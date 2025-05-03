import {Outlet} from "react-router-dom";
import DealerNavbar from "../Components/DealerNavbar";
import {ToastContainer} from "react-toastify";
function DealerLayout(){
    return(
        <>
        <DealerNavbar/>  
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
export default DealerLayout;