import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex gap-3 my-4">
            <NavLink to="/"><span className="text-2xl font-semibold">Home</span></NavLink>
            <NavLink to="/login"><span className="text-2xl font-semibold">Login</span></NavLink>
        </div>
    );
};

export default Header;