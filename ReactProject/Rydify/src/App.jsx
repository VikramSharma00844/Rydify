 import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout.jsx";
import Home from "./pages/Home.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import UserSignup from "./pages/UserSignup.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  

  return (
   <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<PublicLayout/>}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>} /> 
            <Route path="contact" element={<Contact/>} /> 

            <Route path="admin-login" element={<AdminLogin/>} /> 
            <Route path="user-signup" element={<UserSignup/>} />
          </Route>
        </Routes>
      
      </BrowserRouter>
   
   </>
  )
}

export default App
