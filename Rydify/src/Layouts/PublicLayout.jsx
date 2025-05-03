import {Outlet} from "react-router-dom";
import PublicNavbar from "../Components/PublicNavbar.jsx";
import Footer from "../Components/Footer.jsx";
import {ToastContainer} from "react-toastify";
function PublicLayout(){
    return(
        <>
          <PublicNavbar/>  
          <Outlet/>
          <Footer/>
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
export default PublicLayout;