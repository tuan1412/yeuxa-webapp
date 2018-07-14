import React, { Component } from 'react';
import io from 'socket.io-client';
import MessageField from '../../components/MessageField/MessageField';
import './Home.css';
import { Container, Row, Col } from 'reactstrap';
import NavigationPanel from '../../components/NavigationPanel/NavigationPanel'
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.socket = null;
    this.state = {
      lover: {},
      user: {},
      messages: [{
        username: 'tuannguyen',
        content: 'Mệt vãi'
      },
      {
        username: 'thaongongoc',
        content: 'Uk mệt nhỉ'
      },
      ],
      chatContent: ''
    }
  }
 
  componentWillMount() {
    const { username } = this.props.location.state;
    this.socket = io('localhost:9000');
    // this.socket.emit('online', username);
    // axios.get('https://geoip-db.com/jsonp/')
    //   .then(res => console.log(res.data));
    const self = this;
    axios.get('https://geoip-db.com/json/')
        .then(res => this.socket.emit('online', {
          username,
          place: {city: res.data.city, country: res.data.country_name}
        }));
    this.socket.on('loveOnline', function(loveInfo) {
      if (loveInfo.length >= 2) {
        const lover = loveInfo.find(love => love.username !== username);
        const user = loveInfo.find(love => love.username === username);
        lover.online = true;
        self.setState({
          lover,
          user
        })
      }
    });
    this.socket.on('loveMessage', function(message) {
      self.setState((preState) => {
        return {
          messages: [...preState.messages, message]
        }
      })
    });
    this.socket.on('loveOffline', function() {
      self.setState({
        lover: {...self.state.lover, online: false}
      })
    })
  }

  handleMessage = (e) => {
    this.setState({
      chatContent: e.target.value
    })
  }

  sendChat = () => {
    this.socket.emit('message', {
      username: this.state.user.username,
      content: this.state.chatContent
    });
    // call api luu value
  }

  
  render() {
    const { lover, messages, user, chatContent } = this.state;
    return (
      <Container fluid className="Home" 
                style={{paddingRight: '0px', paddingLeft: '0px'}}>
        <Row style={{height: "100%"}} 
            className="no-gutter">
          <Col md="4" 
            style={{height: "100%"}}>
            <NavigationPanel
              lover={lover} />
          </Col>
          <Col md="8" 
            style={{height: "100%"}}>
            <MessageField messages={messages}
                         lover={lover} 
                         user={user} 
                         sendChat={this.sendChat} 
                         handleMessage={this.handleMessage}
                         chatContent={chatContent}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;