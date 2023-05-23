import React from 'react';
import "./Features.css";

const Features = () => {
    return (
        <section id="service">
        <div className="container">
            <div className="row">
                <div className="col-md-4 text-center">
                    <figure className="figure">
                        <i className="fas fa-truck fa-2x figure-img img-fluid"></i>
                        <figcaption className="figure-caption">
                            <h5 className="text-uppercase">free shipping</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                            </p>
                        </figcaption>
                    </figure>
                </div>

                <div className="col-md-4 text-center">
                    <figure className="figure">
                        <i className="fas fa-globe fa-2x figure-img img-fluid"></i>
                        <figcaption className="figure-caption">
                            <h5 className="text-uppercase">Return exchange</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                            </p>
                        </figcaption>
                    </figure>
                </div>

                <div className="col-md-4 text-center">
                    <figure className="figure">
                        <i className="far fa-life-ring fa-2x figure-img img-fluid"></i>
                        <figcaption className="figure-caption">
                            <h5 className="text-uppercase">24/7 Support</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Features;