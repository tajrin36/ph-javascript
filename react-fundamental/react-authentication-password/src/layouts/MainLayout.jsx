import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="md:container md:mx-auto">
                <Header></Header>
                <div className="min-h-[calc(100vh-292px)]">
                    <Outlet></Outlet>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;