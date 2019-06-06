import React from 'react';

class DetailsImages extends React.Component { 
    constructor(props) {
        super(props);
    }

    render() {
        const { images } = this.props;
        console.log(images);

        return (
            <div className="images">
                {
                    images.map(x => (
                        <div key={x + Math.random().toString()} className="details-image">
                            {
                                <img src={x} />
                            }
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default DetailsImages;