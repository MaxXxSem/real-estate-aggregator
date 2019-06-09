import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

class DetailsImages extends React.Component { 
    constructor(props) {
        super(props);

        this.images = this.props.images.map(x => {
            return { original: x, thumbnail: x };
        });
    }
    
    render() {
        console.log(this.images);

        return (
            <div className="images">
                <ImageGallery items={this.images} />
            </div>
        )
    }
}

export default DetailsImages;