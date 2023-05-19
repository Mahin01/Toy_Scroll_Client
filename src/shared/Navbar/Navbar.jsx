import { Button, Container, Image, Nav} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
              <Navbar.Brand className='brand-title' to="/">Toy Scroll</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto menu">
                  <Nav.Link>
                    <NavLink className={({ isActive }) => (isActive ? 'active-link text-decoration-none menu-item' : 'link text-decoration-none menu-item')} to="/">Home</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink className={({ isActive }) => (isActive ? 'active-link text-decoration-none menu-item' : 'link text-decoration-none menu-item')} to="/all-toys">All Toys</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink  className={({ isActive }) => (isActive ? 'active-link text-decoration-none menu-item' : 'link text-decoration-none menu-item')} to="/my-toys">My Toys</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink  className={({ isActive }) => (isActive ? 'active-link text-decoration-none menu-item' : 'link text-decoration-none menu-item')} to="/blogs">Blogs</NavLink>
                  </Nav.Link>
                </Nav>
                {/* Right Side Navbar */}
                <Nav>
                <Nav.Link>
                    <Link className='btn login-btn text-decoration-none menu-item' to="/add-a-toy">
                        <Button className="add-toy-btn" variant="primary">Add A Toy</Button> 
                    </Link>
                </Nav.Link>

                    <Nav.Link>
                        <Link>
                            <span>
                                <Image></Image>
                            </span>
                            <Button className="logout-btn" variant="primary">Logout</Button> 
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link className='btn login-btn text-decoration-none menu-item' to="/login">Login</Link>
                    </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    );
};

export default Navbar;