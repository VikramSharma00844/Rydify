import {Outlet} from "react-router-dom";
import AdminNavbar from "../Components/AdminNavbar.jsx";
import Footer from "../Components/Footer.jsx";
function AdminLayout(){
    return(
        <>
          <AdminNavbar/>  
          <Outlet/>
          
        </>
    )
    
}
export default AdminLayout;