import { Button, Container, Image, Nav, Navbar} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import "./NavMenu.css";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const NavMenu = () => {
  const {user, logout} = useContext(AuthContext);

  const handleLogOut = () => {
    logout()
    .then(() =>{})
    .catch( error => console.log(error))
  }
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
              <Navbar.Brand className='brand-title' to="/"><Image src='logo.png' roundedCircle></Image> Toy Scroll</Navbar.Brand>
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
                    <Link className='text-decoration-none menu-item' to="/add-a-toy">
                        <Button className="add-toy-btn">Add A Toy</Button> 
                    </Link>
                </Nav.Link>

                <Nav>
                {user ? 
                <div>
                    <Button onClick={handleLogOut} className="logout-btn mt-2" variant="primary">Logout</Button> 
                </div>
                :
                <Nav.Link>
                  <Link className='btn login-btn text-decoration-none menu-item' to="/login">Login</Link>
                </Nav.Link>
                }
                </Nav>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    );
};

export default NavMenu;