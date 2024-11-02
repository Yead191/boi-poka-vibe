import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    const location = useLocation();
    const isListedBooksPage = location.pathname === "/listedBooks";
    
    return (
        
        <div className="flex flex-col min-h-screen">
        <div className="w-11/12 mx-auto my-5 ">
            <Navbar></Navbar>

        </div>
        <div
                className={`w-11/12 mx-auto my-5 flex-grow ${
                    isListedBooksPage ? "outlet-start" : "place-content-center"
                }`}
            >
                <Outlet />
            </div>
        <Footer></Footer>

        </div>
        
    );
};

export default Root;