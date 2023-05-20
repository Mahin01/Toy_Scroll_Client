import React from 'react';

const Collection = () => {
    return (
        <div className="container-gallery">
        <div className="popup popup-1">
            <img className="img-responsive" alt="Pop Up Gallery" src="gallery/gallery-img-1.jpg" />
        </div>
        <div className="popup popup-2">
            <img className="img-responsive" alt="Pop Up Gallery" src="gallery/gallery-img-2.jpg" />
        </div>
        <div className="popup popup-3">
            <img className="img-responsive" alt="Pop Up Gallery" src="gallery/gallery-img-3.jpg" />
        </div>
        <div className="popup popup-4">
            <img className="img-responsive" alt="Pop Up Gallery" src="gallery/gallery-img-4.jpg" />
        </div>
        <div className="popup popup-5">
            <img className="img-responsive" alt="Pop Up Gallery" src="gallery/gallery-img-5.jpg" />
        </div>
    </div>
    );
};

export default Collection;