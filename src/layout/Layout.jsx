import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/NavMenu';

const Layout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default Layout;