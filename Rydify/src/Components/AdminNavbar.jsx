import {Link} from "react-router-dom"

function AdminNavbar(){
    return(
        <>
<header className="site-header header-style-1 mobile-sider-drawer-menu light-hdr">

<div className="header-middle-wraper sticky-header ">     
    <div className="header-middle main-bar">
        <div className="logo-header">
            <div className="logo-header-inner logo-header-one">
                <a href="index.html">
                <img src="images/logo-light.png" alt="Logo"/>
                </a>
            </div>
        </div>
        
        <div className="header-info-wraper">
            <div className="main-bar-wraper  navbar-expand-lg">

                <div className="header-bottom">
                    <div className="container-block clearfix">

                        <div className="navigation-bar">
                            {/* <!-- NAV Toggle Button --> */}
                            <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggler collapsed">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar icon-bar-first"></span>
                                <span className="icon-bar icon-bar-two"></span>
                                <span className="icon-bar icon-bar-three"></span>
                            </button> 
    
                            {/* <!-- MAIN Vav --> */}
                            <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-between">
                        
                                <ul className=" nav navbar-nav">
                                    <li><Link to="/admin/admin-login">Admin Login</Link></li>
                                    {/* <li><a href="about-us.html">About</a></li> */}
                                    <li><Link to="about">About</Link></li>
                                    <li className="has-child">
                                        <a href="javascript:;">Cars</a>
                                        <ul className="sub-menu">
                                            <li><a href="cars.html">Cars</a></li>
                                            <li><a href="cars-grid-1.html">Cars Grid 1</a></li>
                                            <li><a href="cars-grid-2.html">Cars Grid 2</a></li>
                                            <li><a href="cars-grid-3.html">Cars Grid 3</a></li>
                                            <li><a href="cars-grid-4.html">Cars Grid 4</a></li> 
                                            <li><a href="cars-detail.html">Cars Detail</a></li>                                              
                                        </ul>                                
                                    </li>
                                    <li><a href="service.html">Services</a></li>
                                    <li className="has-child">
                                        <a href="javascript:;">Pages</a>
                                        <ul className="sub-menu">
                                            <li><a href="dealer-list.html">Dealers</a></li>
                                            <li><a href="error-404.html">Error 404 </a></li>
                                            <li><a href="faq.html">Faq</a></li>
                                            <li><a href="gallery.html">Gallery</a></li>
                                            <li><a href="plans.html">Plans</a></li> 
                                            <li><a href="team.html">Team</a></li>
                                            <li><a href="team-detail.html">Team Detail</a></li>
                                            <li><a href="testimonial.html">Testimonials</a></li>                                             
                                        </ul>                           
                                    </li>
                                    
                                    {/* <li><a href="contact-us.html">Contact</a></li>   */}
                                    <li><Link to="contact">Contact</Link></li>
                                    <li><Link>Users</Link></li>
                                    <li className="has-child">
                                        <a href="javascript:;">User</a>
                                        <ul className="sub-menu">
                                            <li><Link to="user-signin">Sign In</Link></li>
                                            <li><Link to="user-signup">Sign Up</Link></li>
                                        </ul>                           
                                    </li>
                                </ul>
    
                            </div>
                        </div>
                        
                    </div>   
                </div>

            </div>
            
        </div>
        {/* <!-- Header Right Section--> */}
        <div className="extra-nav header-1-nav">
            <div className="extra-cell one">
                <ul className="wt-topbar-left-info">
                    <li>
                        <a href="tel:+712021022525">
                            <span><i className="feather feather-mail"></i></span>+71 202 102 2525
                        </a>
                    </li>
                    <li>
                        <a href="mailto:someone@example.com">
                            <span><i className="feather feather-phone-call"></i></span>carntelinfo@gmail.com
                        </a>
                    </li>
                </ul>   
            </div>
                                            
        </div>
        
    </div>
</div>

</header>
        </>
    )
}
export default AdminNavbar