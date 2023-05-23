import "./Collection.css";

const Collection = () => {

    return (

        <div className="container">
            <h1 className="text-center gallery-title mt-4 mb-0">Exclusive Collection</h1>

            <hr style={{ color:"#48C9D0" , width:"200px", borderWidth: "2px"}} className="mt-2 m-auto mb-5" />

            <div className="row text-center text-lg-start">

                <div className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src="gallery/gallery-img-1.jpg" alt="" />
                </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src="gallery/gallery-img-2.jpg" alt="" />
                </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src="gallery/gallery-img-3.jpg" alt="" />
                </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src="gallery/gallery-img-4.jpg" alt="" />
                </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src="gallery/gallery-img-5.jpg" alt="" />
                </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src="gallery/gallery-img-6.jpg" alt="" />
                </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src="gallery/gallery-img-7.jpg" alt="" />
                </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src="gallery/gallery-img-8.jpg" alt="" />
                </a>
                </div>
            </div>
        </div>
    );
};

export default Collection;