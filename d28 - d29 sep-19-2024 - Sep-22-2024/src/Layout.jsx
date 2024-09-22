import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Menubar from './Components/Menubar/Menubar';

const Layout = () => {
    return (
        <>
            <Menubar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;