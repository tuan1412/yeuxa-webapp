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
            messages: [],
            chatContent: ''
        }
    }

    onLogOut = () => {
        this.socket.disconnect();
        this.props.onLogOut();
    }

    componentWillMount() {
        const { username, room } = this.props.userInfo;
        axios.get(`https://yeuxa-api.herokuapp.com/api/users/${username}`)
            .then(res => this.setState({
                user: { ...res.data, imgUrl: `https://yeuxa-api.herokuapp.com${res.data.avatarUrl}` }
            }));


        axios.get(`https://yeuxa-api.herokuapp.com/api/room/info/${room}`)
            .then(res => {
                const members = res.data.members;
                let loveUsername = members[0] === username ? members[1] : members[0];
                return axios.get(`https://yeuxa-api.herokuapp.com/api/users/${loveUsername}`)
            })
            .then(res => this.setState({
                lover: { ...res.data, imgUrl: `https://yeuxa-api.herokuapp.com${res.data.avatarUrl}` }
            }));

        axios.get(`https://yeuxa-api.herokuapp.com/api/room/${room}`)
            .then(res => this.setState({
                messages: res.data
            }))

        this.socket = io('https://yeuxa-api.herokuapp.com');
                // this.socket = io('localhost:9000');

        const self = this;
        axios.get('https://geoip-db.com/json/')
            .then(res => this.socket.emit('online', {
                room,
                username,
                place: { city: res.data.city, country: res.data.country_name }
            }));
        this.socket.on('loveOnline', function (loveInfo) {
            // console.log(loveInfo);
            
            if (loveInfo.length >= 2) {
                const love = loveInfo[0].username === username ? loveInfo[1] : loveInfo[0];
                self.setState({
                    lover: { ...self.state.lover, online: true, place: love.place, location: love.location }
                })
            }
        });
        this.socket.on('loveMessage', function (message) {
            self.setState((preState) => {
                return {
                    messages: [...preState.messages, message]
                }
            })
        });
        this.socket.on('loveOffline', function () {
            self.setState({
                lover: { ...self.state.lover, online: false }
            })
        })
    }


    handleMessage = (e) => {
        this.setState({
            chatContent: e.target.value
        })
    }

    sendChat = () => {
        const self = this;  
        self.setState((preState) => {
            return {
                messages: [...preState.messages,{
                    userName: this.state.user.username,
                    body: this.state.chatContent
                }]
            }
        })
        self.socket.emit('message', {
            userName: this.state.user.username,
            body: this.state.chatContent
        });
        axios.put(`https://yeuxa-api.herokuapp.com/api/room/${this.props.userInfo.room}`, {
            username: this.state.user.username,
            contents: this.state.chatContent
        })
            .then(res => {
              
                self.setState({
                    chatContent: ''
                })
            })
    };


    render() {
        const { lover, messages, user, chatContent } = this.state;
        return (
            <Container fluid className="Home"
                style={{ paddingRight: '0px', paddingLeft: '0px' }} >
                <Row style={{ height: "100%" }}
                    className="no-gutter">
                    <Col md="4"
                        style={{ height: "100%" }}>
                        <NavigationPanel
                            lover={lover}
                            onLogOut={this.onLogOut} />
                    </Col>
                    <Col md="8"
                        style={{ height: "100%" }}>
                        <MessageField messages={messages}
                            lover={lover}
                            user={user}
                            sendChat={this.sendChat}
                            handleMessage={this.handleMessage}
                            chatContent={chatContent} />
                    </Col>
                </Row>
            </Container >
        );
    }
}


export default Home;