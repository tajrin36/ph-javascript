import { useState } from "react";
import Link from "./Link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

const SelfNavbar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/faq", name: "FAQ" }
    ];

    return (
        <nav className="">
            <div onClick={() => setOpen(!open)} className="md:hidden bg-[#99ffff] p-3">
                {
                    open === true ? <RxCross1 className="text-2xl  " /> : <HiOutlineMenuAlt1 className="text-2xl" />
                }

            </div>
            <ul className={`md:flex absolute md:static bg-[#99ffff] md:bg-white space-y-3 md:space-y-0 p-4 duration-1000 text-lg
                ${ open ? 'left-0' : '-left-60'}`}>
                {
                    routes.map(route =>
                        <Link
                            key={route.id}
                            route={route}
                        ></Link>)
                }
            </ul>
        </nav>
    );
};

export default SelfNavbar;