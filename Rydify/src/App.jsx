 import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout.jsx";
import Home from "./pages/Home.jsx";
import UserSignup from "./pages/UserSignup.jsx";
import UserSignin from "./pages/UserSignin.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";



// User Pages
import UserLayout from "./Layouts/UserLayout.jsx";
import UserHome from "./pages/users/UserHome.jsx";



// Admin Pages
import AdminLayout from './Layouts/AdminLayout.jsx';
import AdminLogin from "./pages/AdminLogin.jsx";


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
          </Route>

          {/* User Routes */}
          <Route path="/user" element={<UserLayout/>}>
            <Route path="home" element={<UserHome/>}  />

          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout/>}>
            <Route path="admin-login" element={<AdminLogin/>} /> 

          </Route>

        </Routes>
      
      </BrowserRouter>
   
   </>
  )
}

export default App
