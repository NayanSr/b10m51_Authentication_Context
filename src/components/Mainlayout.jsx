import {  Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Mainlayout = () => {
    return (
        <div className="w-11/12 mx-auto bg-slate-200 p-4 min-h-screen flex flex-col">
           <Navbar/>
            <div className="flex-grow py-4">
                 <Outlet/>
            </div>
            <footer>Footer</footer>
        </div>
    );
};

export default Mainlayout;