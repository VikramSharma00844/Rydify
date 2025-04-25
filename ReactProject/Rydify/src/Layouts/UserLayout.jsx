import {Outlet} from "react-router-dom";
import UserNavbar from "../Components/UserNavbar.jsx";
import Footer from "../Components/Footer.jsx";
function UserLayout(){
    return(
        <>
          <UserNavbar/>  
          <Outlet/>
          
        </>
    )
    
}
export default UserLayout;