import React, { Component } from 'react'
import ImageUploader from 'react-images-upload';

export default class Images extends Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
        
    }
 
    render() {
      const pStyle = {
        background:'none'}
        return (
          <div className="file"><ImageUploader

            withPreview={true}
          
            fileContainerStyle={pStyle}
            buttonText='Profile Image'
            onChange={this.onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
        /></div>
            
        );
    }
}