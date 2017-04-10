import React, { Component } from 'react';
import ImagesItem from './Image.js';
import images from './images.json';

export default class ImagesContainer extends Component {
    constructor() {
        super();
        this.state = {
            images,
            index: 0
        };
        this.onNextImage = this.onNextImage.bind(this);
    }
    onNextImage({nativeEvent, target}) {
        var { offsetWidth } = target;
        var { index, images } = this.state;
        var X = nativeEvent.clientX;
        var delta = (X < offsetWidth / 2) ? -1 : +1;
        var newIndex = (index + delta) % images.length;
        if(newIndex < 0) {
            newIndex = images.length - Math.abs(newIndex);
        }
        this.setState({
            index: newIndex
        });
    }
    render() {
        var { images, index } = this.state;
        var image = images[index];
        return (
            <ImagesItem
                uri={image.uri}
                caption={image.label}
                onNextImage={this.onNextImage}
            />
        )
    }
}