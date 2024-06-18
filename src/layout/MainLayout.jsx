
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
const MainLayout = () => {
    return (
        <div>
              <div>
            <div className="">
           <NavBar/>
        </div>
        <div className=" mx-auto container min-h-[calc(100vh-246px)]">
            <Outlet />
        </div>
         <div className="">
           
        </div> 
        </div>
        </div>
    );
};

export default MainLayout;