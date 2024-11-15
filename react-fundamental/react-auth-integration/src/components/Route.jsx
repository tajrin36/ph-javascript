import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Route = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Route;