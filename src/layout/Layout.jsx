import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/NavMenu';
import Footer from '../shared/Footer/Footer';

const Layout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Layout;