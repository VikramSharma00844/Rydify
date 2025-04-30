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
                <img src="/images/logo-light.png" alt="Logo"/>
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
                                    <li><Link to="/admin/admin-home">Home</Link></li>
                                    {/* <li><a href="about-us.html">About</a></li> */}
                                {/* <li><Link to="about">About</Link></li> */}



                                    <li className="has-child">
                                        <a href="javascript:;">Settings</a>
                                        <ul className="sub-menu">
                                            <li><a href="cars.html">Change Password</a></li>
                                            <li><a href="cars-grid-1.html">Logout</a></li>
                                            <li><a href="cars-grid-2.html">Profile</a></li>
                                                                                        
                                        </ul>                                
                                    </li>
                                   
                                    
                                    {/* <li><a href="contact-us.html">Contact</a></li>   */}
                                    
                                    
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