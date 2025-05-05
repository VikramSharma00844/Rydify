 import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout.jsx";
import Home from "./pages/Home.jsx";
import UserSignup from "./pages/UserSignup.jsx";
import UserSignin from "./pages/UserSignin.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Dealer from "./pages/Dealer.jsx";
import DealerSignin from "./pages/DealerSignin.jsx";



// User Pages
import UserLayout from "./Layouts/UserLayout.jsx";
import UserHome from "./pages/users/UserHome.jsx";
import ChangePassword from './pages/users/ChangePassword.jsx';



// Dealer Pages
import DealerLayout from './Layouts/DealerLayout.jsx';
import Dashboard from "./pages/dealer/Dashboard.jsx"



// Admin Pages
import AdminLayout from './Layouts/AdminLayout.jsx';
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminHome from "./pages/admin/AdminHome.jsx";
import Categories from './pages/admin/Categories.jsx';
import ManageDealer from "./pages/admin/ManageDealer.jsx";

function App() {
  

  return (
   <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<PublicLayout/>}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>} /> 
            <Route path="contact" element={<Contact/>} /> 

            <Route path="user-signup" element={<UserSignup/>} />
            <Route path="user-signin" element={<UserSignin/>} />
            <Route path="dealer-signin" element={<DealerSignin/>} />
            <Route path="dealer-signup" element={<Dealer/>} />


            <Route path="admin-login" element={<AdminLogin/>} /> 


          </Route>

          {/* User Routes */}
          <Route path="/user" element={<UserLayout/>}>
            <Route path="home" element={<UserHome/>}  />
            <Route path="user-change-password"  element={<ChangePassword/>} />

          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout/>}>
            <Route path="admin-home" element={<AdminHome/>} />
            <Route path="categories" element={<Categories/>} />
            <Route path="manage-dealer" element={<ManageDealer/>} />
          </Route>

          {/* Dealer Routes */}
          <Route path="/dealer" element={<DealerLayout/>}>
            <Route path="dealer-dashboard" element={<Dashboard/>}/>
          </Route>

        </Routes>
      
      </BrowserRouter>
   
   </>
  )
}

export default App
