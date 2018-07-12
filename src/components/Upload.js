import React, { Component } from 'react';





class Upload extends Component {

    state = {
        file: '',
        imagePreviewUrl: ''
    };




    _handleImageChange = e => {
        e.preventDefault();
        console.log(e.target.files[0]);
        this.props.onUploadImage(e.target.files[0])


        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} className="rounded-circle" alt={'avatar'} />);
        }

        return (
            (!this.state.file)
                ? < div className="text-center mb-4" >
                    <label className="rounded-circle input">
                        <p className="instruction-helper" >Add avatar</p>
                        <input type="file"  onChange={this._handleImageChange} className="custom-file-input" />
                    </label>
                </div >
                : < div className="text-center mb-4" >
                    {$imagePreview}
                </div >
        )
    }

}
export default Upload;