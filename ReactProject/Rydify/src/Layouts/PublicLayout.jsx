import {Outlet} from "react-router-dom";
import PublicNavbar from "../Components/PublicNavbar.jsx";
import Footer from "../Components/Footer.jsx";
function PublicLayout(){
    return(
        <>
          <PublicNavbar/>  
          <Outlet/>
          <Footer/>
        </>
    )
    
}
export default PublicLayout;