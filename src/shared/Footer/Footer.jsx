import { Figure, Image, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
          <footer className="text-white text-center text-lg-start" style={{ background : '#444444' }}>
            <div className="container py-4">
              <div className="row mt-4">

            <div className="col-lg-2 col-md-12 mt-5 mb-md-0">
                <Figure>
                    <Image className="ms-5" src="logo.png" roundedCircle/>
                </Figure>
                <h5 className="brand-title tex-center">Toy Scroll</h5>
            </div>
                <div className="col-lg-3 col-md-12 mb-md-0">
                  <h5 className="text-uppercase mb-4">About Us</h5>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentiumvoluptatum deleniti atque corrupti.Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                    molestias.
                  </p>

                  <div className="mt-4">
                    <a type="button" className="btn btn-floating btn-warning btn-lg me-2"><FontAwesomeIcon icon={faFacebook} /></a>
      
                    <a type="button" className="btn btn-floating btn-warning btn-lg me-2"><FontAwesomeIcon icon={faTwitter} /></a>
                
                    <a type="button" className="btn btn-floating btn-warning btn-lg me-2"><FontAwesomeIcon icon={faInstagram} /></a>
          
                    <a type="button" className="btn btn-floating btn-warning btn-lg"><FontAwesomeIcon icon={faYoutube} /></a>
                  </div>
                </div>
              
                <div className="col-lg-2 col-md-6 mb-md-0">
                  <h5 className="text-uppercase mb-4 pb-1">My Account</h5>
        
                  <Nav className="flex-column">
                    <Nav.Link>My Account</Nav.Link>
                    <Nav.Link>Delivery</Nav.Link>
                    <Nav.Link>Payment</Nav.Link>
                    <Nav.Link>FAQ</Nav.Link>
                  </Nav>
                </div>
              
                <div className="col-lg-3 col-md-6 mb-md-0">
                  <h5 className="text-uppercase mb-4 pb-1">Information</h5>
        
                  <Nav className="flex-column">
                    <Nav.Link>Payment & Return</Nav.Link>
                    <Nav.Link>Customers Feedback</Nav.Link>
                    <Nav.Link>Browse Products</Nav.Link>
                    <Nav.Link>Promotion</Nav.Link>
                  </Nav>
                </div>

                <div className="col-lg-2 col-md-6 mb-md-0">
                  <h5 className="text-uppercase mb-4">Subscribe</h5>
        
                  <div className="input-group">
                      <input type="email" className="form-control" placeholder="Enter your email" />
                      <span className="input-group-btn">
                      <button className="btn btn-theme" type="submit">Subscribe</button>
                      </span>
                  </div>
                    
                </div>
      
              </div>

            </div>
        
            <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              © 2023 Copyright:
               <span> Cooking-Lights</span>
            </div>
           
          </footer>
        </>

    );
};

export default Footer;