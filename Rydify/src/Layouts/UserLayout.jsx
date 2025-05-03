import {Outlet} from "react-router-dom";
import UserNavbar from "../Components/UserNavbar.jsx";
import Footer from "../Components/Footer.jsx";
import {ToastContainer} from "react-toastify";

function UserLayout(){
    return(
        <>
          <UserNavbar/>  
          <Outlet/>

          <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                
            />
          
        </>
    )
    
}
export default UserLayout;