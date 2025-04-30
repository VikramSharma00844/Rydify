 import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout.jsx";
import Home from "./pages/Home.jsx";
import UserSignup from "./pages/UserSignup.jsx";
import UserSignin from "./pages/UserSignin.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Dealer from "./pages/Dealer.jsx";



// User Pages
import UserLayout from "./Layouts/UserLayout.jsx";
import UserHome from "./pages/users/UserHome.jsx";



// Admin Pages
import AdminLayout from './Layouts/AdminLayout.jsx';
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminHome from "./pages/admin/AdminHome.jsx";
import Categories from './pages/admin/Categories.jsx';

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
            <Route path="dealer" element={<Dealer/>} />

            <Route path="admin-login" element={<AdminLogin/>} /> 


          </Route>

          {/* User Routes */}
          <Route path="/user" element={<UserLayout/>}>
            <Route path="home" element={<UserHome/>}  />

          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout/>}>
            <Route path="admin-home" element={<AdminHome/>} />
            <Route path="categories" element={<Categories/>} />


          </Route>

        </Routes>
      
      </BrowserRouter>
   
   </>
  )
}

export default App
