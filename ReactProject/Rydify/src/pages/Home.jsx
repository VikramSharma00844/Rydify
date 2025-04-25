function Home(){
    return(
        <>
        <div className="twm-home-1-banner-wrap">
                <div className="twm-home-1-banner"    style={{ backgroundImage: 'url(images/main-slider/slider1/slider1.jpg)' }} >

                    <div className="twm-banner-LR-wrap">
                        <div className="twm-banner-left">
                            <div className="twm-banner-left-info">
                                <div className="twm-banner-left-content">

                                    <div className="twm-sm-title left">Premium</div>
                                    <h2 className="twm-banner-title">
                                        <em className="txt-type" data-wait="3000" data-words='["The Best Rental", "Wide Range of"]'></em>
                                        Cars<span>&</span>Bikes
                                    </h2>

                                    <div className="twm-banner-search-tabs">

                                        <h3 className="twm-tabs-title">
                                            Available For Rent
                                        </h3>

                                        <div className="twm-banner-tabs-filter">
                                            <nav>
                                                <div className="nav nav-tabs" id="nav-tab">
                                                 {/* Car Tabs*/} 
                                                    <div className="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-Car">
                                                        <div className="twm-tabs-bx">
                                                            <div className="tabs-media">
                                                                <img src="images/tabs-icon/car.png" alt="#"/>
                                                            </div>
                                                            <div className="tabs-title">Car</div>
                                                        </div>
                                                    </div>
                                                    {/* Van Tabs*/}
                                                    <div className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-Van">
                                                        <div className="twm-tabs-bx">
                                                            <div className="tabs-media">
                                                                <img src="/images/tabs-icon/van.png" alt="#"/>
                                                            </div>
                                                            <div className="tabs-title">Van</div>
                                                        </div>
                                                    </div>
                                                    {/* Minibus Tabs*/}
                                                    <div className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-Minibus">
                                                        <div className="twm-tabs-bx">
                                                            <div className="tabs-media">
                                                                <img src="/images/tabs-icon/minibus.png" alt="#"/>
                                                            </div>
                                                            <div className="tabs-title">Minibus</div>
                                                        </div>
                                                    </div>
                                                    {/* Coupe Tabs*/}
                                                    <div className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-coupe">
                                                        <div className="twm-tabs-bx">
                                                            <div className="tabs-media">
                                                                <img src="/images/tabs-icon/coupe.png" alt="#"/>
                                                            </div>
                                                            <div className="tabs-title">Coupe</div>
                                                        </div>
                                                    </div>
                                                    {/* Bike Tabs*/}
                                                    <div className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-bike">
                                                        <div className="twm-tabs-bx">
                                                            <div className="tabs-media">
                                                                <img src="images/tabs-icon/bike.png" alt="#"/>
                                                            </div>
                                                            <div className="tabs-title">Bike</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </nav>
                                            <div className="tab-content" id="nav-tabContent">
                                                {/* Car Detail */}
                                                <div className="tab-pane fade show active" id="nav-Car">
                                                    <div className="twm-tabs-search-section">

                                                        <form>
                                                            <div className="row m-b20">
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Choose Vehicle type</label>
                                                                        <select className="form-select form-control" aria-label="Default select example">
                                                                            <option selected>Model</option>
                                                                            <option value="1">Yamaha</option>
                                                                            <option value="2">Honda</option>
                                                                            <option value="3">Suzuki</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Pick up Location</label>
                                                                        <input className="form-control" placeholder="Type..."/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Drop off Location</label>
                                                                        <input className="form-control" placeholder="Type..."/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                                                                        <label>Pick up date and time</label>
                                                                        <div className="form-group-2column">
                                                                            <div className="input-group date datepicker">
                                                                                <input className="form-control" placeholder="Date"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa fa-solid fa-calendar-days"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="input-group time timepicker">
                                                                                <input className="form-control" placeholder="Time"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa-regular fa-clock"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                                                                        <label>Return date and time</label>
                                                                        <div className="form-group-2column">
                                                                            <div className="input-group date datepicker">
                                                                                <input className="form-control" placeholder="Date"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa fa-solid fa-calendar-days"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="input-group time timepicker">
                                                                                <input className="form-control" placeholder="Time"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa-regular fa-clock"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
    
                                                            <div className="twm-tabs-search-btn">
                                                                <a href="cars-grid-4.html" className="site-button">
                                                                    <em>Find A vehicle</em>
                                                                </a>
                                                            </div>
                                                        </form>
                                                            
                                                    </div>
                                                </div>
                                                {/* Van Detail */}
                                                <div className="tab-pane fade" id="nav-Van">
                                                    <div className="twm-tabs-search-section">

                                                        <form>
                                                            <div className="row m-b20">
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Choose Vehicle type</label>
                                                                        <select className="form-select form-control" aria-label="Default select example">
                                                                            <option selected>Model</option>
                                                                            <option value="1">Yamaha</option>
                                                                            <option value="2">Honda</option>
                                                                            <option value="3">Suzuki</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Pick up Location</label>
                                                                        <input className="form-control" placeholder="Type..."/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Drop off Location</label>
                                                                        <input className="form-control" placeholder="Type..."/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                                                                        <label>Pick up date and time</label>
                                                                        <div className="form-group-2column">
                                                                            <div className="input-group date datepicker">
                                                                                <input className="form-control" placeholder="Date"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa fa-solid fa-calendar-days"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="input-group time timepicker">
                                                                                <input className="form-control" placeholder="Time"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa-regular fa-clock"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                                                                        <label>Return date and time</label>
                                                                        <div className="form-group-2column">
                                                                            <div className="input-group date datepicker">
                                                                                <input className="form-control" placeholder="Date"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa fa-solid fa-calendar-days"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="input-group time timepicker">
                                                                                <input className="form-control" placeholder="Time"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa-regular fa-clock"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
    
                                                            <div className="twm-tabs-search-btn">
                                                                <a href="cars-grid-4.html" className="site-button">
                                                                    <em>Find A vehicle</em>
                                                                </a>
                                                            </div>
                                                        </form>
                                                            
                                                    </div>
                                                </div>
                                                {/* Minibus Detail */}
                                                <div className="tab-pane fade" id="nav-Minibus">
                                                    <div className="twm-tabs-search-section">

                                                        <form>
                                                            <div className="row m-b20">
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Choose Vehicle type</label>
                                                                        <select className="form-select form-control" aria-label="Default select example">
                                                                            <option selected>Model</option>
                                                                            <option value="1">Yamaha</option>
                                                                            <option value="2">Honda</option>
                                                                            <option value="3">Suzuki</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Pick up Location</label>
                                                                        <input className="form-control" placeholder="Type..."/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Drop off Location</label>
                                                                        <input className="form-control" placeholder="Type..."/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                                                                        <label>Pick up date and time</label>
                                                                        <div className="form-group-2column">
                                                                            <div className="input-group date datepicker">
                                                                                <input className="form-control" placeholder="Date"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa fa-solid fa-calendar-days"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="input-group time timepicker">
                                                                                <input className="form-control" placeholder="Time"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa-regular fa-clock"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                                                                        <label>Return date and time</label>
                                                                        <div className="form-group-2column">
                                                                            <div className="input-group date datepicker">
                                                                                <input className="form-control" placeholder="Date"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa fa-solid fa-calendar-days"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="input-group time timepicker">
                                                                                <input className="form-control" placeholder="Time"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa-regular fa-clock"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
    
                                                            <div className="twm-tabs-search-btn">
                                                                <a href="cars-grid-4.html" className="site-button">
                                                                    <em>Find A vehicle</em>
                                                                </a>
                                                            </div>
                                                        </form>
                                                            
                                                    </div>
                                                </div>
                                                {/* Coupe Detail*/}
                                                <div className="tab-pane fade" id="nav-coupe">
                                                    <div className="twm-tabs-search-section">

                                                        <form>
                                                            <div className="row m-b20">
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Choose Vehicle type</label>
                                                                        <select className="form-select form-control" aria-label="Default select example">
                                                                            <option selected>Model</option>
                                                                            <option value="1">Yamaha</option>
                                                                            <option value="2">Honda</option>
                                                                            <option value="3">Suzuki</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Pick up Location</label>
                                                                        <input className="form-control" placeholder="Type..."/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Drop off Location</label>
                                                                        <input className="form-control" placeholder="Type..."/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                                                                        <label>Pick up date and time</label>
                                                                        <div className="form-group-2column">
                                                                            <div className="input-group date datepicker">
                                                                                <input className="form-control" placeholder="Date"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa fa-solid fa-calendar-days"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="input-group time timepicker">
                                                                                <input className="form-control" placeholder="Time"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa-regular fa-clock"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                                                                        <label>Return date and time</label>
                                                                        <div className="form-group-2column">
                                                                            <div className="input-group date datepicker">
                                                                                <input className="form-control" placeholder="Date"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa fa-solid fa-calendar-days"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="input-group time timepicker">
                                                                                <input className="form-control" placeholder="Time"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa-regular fa-clock"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
    
                                                            <div className="twm-tabs-search-btn">
                                                                <a href="cars-grid-4.html" className="site-button">
                                                                    <em>Find A vehicle</em>
                                                                </a>
                                                            </div>
                                                        </form>
                                                            
                                                    </div>
                                                </div>
                                                {/* Bike Details*/}
                                                <div className="tab-pane fade" id="nav-bike">
                                                    <div className="twm-tabs-search-section">

                                                        <form>
                                                            <div className="row m-b20">
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Choose Vehicle type</label>
                                                                        <select className="form-select form-control" aria-label="Default select example">
                                                                            <option selected>Model</option>
                                                                            <option value="1">Yamaha</option>
                                                                            <option value="2">Honda</option>
                                                                            <option value="3">Suzuki</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Pick up Location</label>
                                                                        <input className="form-control" placeholder="Type..."/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>Drop off Location</label>
                                                                        <input className="form-control" placeholder="Type..."/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                                                                        <label>Pick up date and time</label>
                                                                        <div className="form-group-2column">
                                                                            <div className="input-group date datepicker">
                                                                                <input className="form-control" placeholder="Date"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa fa-solid fa-calendar-days"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="input-group time timepicker">
                                                                                <input className="form-control" placeholder="Time"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa-regular fa-clock"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                                                                        <label>Return date and time</label>
                                                                        <div className="form-group-2column">
                                                                            <div className="input-group date datepicker">
                                                                                <input className="form-control" placeholder="Date"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa fa-solid fa-calendar-days"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="input-group time timepicker">
                                                                                <input className="form-control" placeholder="Time"/>
                                                                                <span className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text">
                                                                                        <i className="fa-regular fa-clock"></i>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
    
                                                            <div className="twm-tabs-search-btn">
                                                                <a href="cars-grid-4.html" className="site-button">
                                                                    <em>Find A vehicle</em>
                                                                </a>
                                                            </div>
                                                        </form>
                                                            
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>
                             </div>
                        </div>
                        <div className="twm-banner-right">
                            <div className="twm-banner-right-section">
                                <div className="twm-banner-r-content">
                                    <div className="twm-banner-r-bx">
                                        <h1 className="twm-bnr-title">Mercedes</h1>
                                        <div className="twm-banner-product-price">
                                            <div className="twm-product-name">Mercedes</div>
                                            <div className="twm-price-section">
                                                <div className="v-price" id="number_notification">$800</div>
                                                <div className="v-duration">/ Day</div>
                                            </div>
                                         </div>
                                    </div>
                                </div>
                                <div className="twm-banner-media">
                                    <img src="/images/main-slider/slider1/car.png" alt="Car Pic"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-full p-t150 p-b120 site-bg-white twm-w-range-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
                <div className="container">

                   
                    {/* TITLE START*/}
                    <div className="section-head center ">
                        <div className="twm-sm-title left">Find your car by car brand</div>
                        <h2 className="twm-large-title site-text-dark">Wide Range Of Commercial 
                            And Luxury Cars
                        </h2>
                    </div>
                    {/* TITLE END*/}
                    

                    <div className="section-content">
                        <div className="row twm-w-range-section">
                            
                            {/*One block*/}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="twm-cntr-with-icon">
                                    <div className="icon-media">
                                        <img src="images/icons/rental.png" alt=""/>
                                    </div>
                                    <span className="counter">4500</span> <em className="symble">+</em>
                                    <h3 className="icon-content-info">Client Served</h3>
                                </div> 
                            </div>

                            {/*Two block*/}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="twm-cntr-with-icon">
                                    <div className="icon-media">
                                        <img src="images/icons/man.png" alt=""/>
                                    </div>
                                    <span className="counter">2750</span> <em className="symble">+</em>
                                    <h3 className="icon-content-info">Happy Customers</h3>
                                </div> 
                            </div>

                            {/*Three block*/}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="twm-cntr-with-icon">
                                    <div className="icon-media">
                                        <img src="images/icons/car-insurance.png" alt=""/>
                                    </div>
                                    <span className="counter">600</span> <em className="symble">+</em>
                                    <h3 className="icon-content-info">Vehicle In Stock Cars</h3>
                                </div> 
                            </div>

                            {/*Four block*/}
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="twm-cntr-with-icon">
                                    <div className="icon-media">
                                        <img src="images/icons/work-time.png" alt=""/>
                                    </div>
                                    <span className="counter">12</span> <em className="symble">+</em>
                                    <h3 className="icon-content-info">Years Experience</h3>
                                </div> 
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div className="section-full twm-explore-section-wrap site-bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-12">
                             {/* TITLE START*/} 
                            <div className="section-head left">
                                <div className="twm-sm-title left site-text-white">Car Brands</div>
                                <h2 className="twm-large-title site-text-white">Explore Our Premium Brands</h2>
                            </div>
                             {/* TITLE END*/} 
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className="twm-mid-section-car">
                                <div className="twm-media">
                                    <img src="images/explore-sec-image.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-12">
                            <div className="twm-mid-section-btn">
                                <a href="cars-grid-4.html" className="site-button">
                                    <em>View All Brands</em>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/* Client Slider===>Brands Slider */}
            <div className="twm-client-slider1-wrap site-bg-white">
                <div className="twm-client-slider1">
                    <div className="owl-carousel home-client-carousel3 owl-btn-vertical-center">
                    
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="cars-grid-4.html"><img src="images/client-logo/dark/w1.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="cars-grid-4.html"><img src="images/client-logo/dark/w2.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="cars-grid-4.html"><img src="images/client-logo/dark/w3.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="cars-grid-4.html"><img src="images/client-logo/dark/w4.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="cars-grid-4.html"><img src="images/client-logo/dark/w5.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="cars-grid-4.html"><img src="images/client-logo/dark/w6.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="cars-grid-4.html"><img src="images/client-logo/dark/w1.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="cars-grid-4.html"><img src="images/client-logo/dark/w2.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="cars-grid-4.html"><img src="images/client-logo/dark/w3.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                <a href="cars-grid-4.html"><img src="images/client-logo/dark/w5.png" alt=""/></a></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        {/* About us Section */}
        <div className="section-full site-bg-white p-t150 p-b120 twm-abus-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
                <div className="container">
                    <div className="row twm-abus-section">

                        <div className="col-lg-7 col-md-12">
                            <div className="twm-abus-left">
                                <div className="twm-media">
                                    <img src="images/abus-pic.jpg" alt="Image"/>
                                    <div className="twm-abus-video">
                                        <a href="https://vimeo.com/337649532" className="mfp-video ">
                                            <i className="icon fa fa-play"></i>
                                        </a>
                                    </div>
                                    <div className="twm-abus-year-section">
                                        <div className="tem-abus-year-content">
                                            <span>Since</span>
                                            <h2 className="year-title">2016</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="twm-media2">
                                    <img src="images/car-pic1.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-5 col-md-12">
                            {/* TITLE START*/} 
                            <div className="section-head left aside-section">
                                <div className="twm-sm-title left">About Us</div>
                                <h2 className="twm-large-title site-text-dark">
                                    We Have Many Provided 
                                    Assistance To People And 
                                    Companies In This Field
                                </h2>
                                <div className="section-head-detail">
                                    I must explain to you how all this mistaken idea of denouncing pleasure 
                                    and praising pain was born and I will give you a complete account of the 
                                    system, and expound the actual teachings of the great explorer of the 
                                    truth, the master-builder of human happiness. No one rejects, dislikes, 
                                    or avoids pleasure itself, because it is pleasure,
                                </div>
                            </div>
                            {/* TITLE END */} 
                            <div className="twm-inline-list2">
                                <ul>
                                    <li>All Type Vehicle Available</li>
                                    <li>You Get 24/7 Roadside Assistance</li>
                                    <li>We Are The UK’s Largest Provider</li>
                                </ul>
                            </div>
                            <div className="twm-btn-left">
                                <a href="about-us.html" className="site-button">
                                    <em>Read More</em>
                                </a>
                             </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        {/* Let's Adventure Begin */}

        <div className="section-full p-t150 p-b120 site-bg-dark twm-step-towards-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
            <div className="twm-half-bg-pic" style={{backgroundImage:" url(images/half-bg-pic.jpg)"}}></div>
            <div className="container">

              <div className="row">
                  <div className="col-lg-6 col-md-12">
                      {/* TITLE START*/}
                      <div className="section-head left">
                          <div className="twm-sm-title left">One step towards you</div>
                          <h2 className="twm-large-title site-text-white">Let's Your Adventure Begin</h2>
                      </div>
                      {/* TITLE END*/}
                  </div>
              </div>

              <div className="section-content">
                  <div className="row twm-step-towards-section">
                      
                      <div className="col-xl-4 col-lg-4 col-md-4 m-b30">
                          <div className="twm-icon-style-left large-set in-dark-area">
                              <div className="twm-media">
                                  <img src="images/icons/label.png" alt="image"/>
                              </div>
                              <div className="twm-content">
                                  <h3 className="twm-title">Deals For Every Budget</h3>
                                  <p>Incredible prices on every car, van, bike 
                                      and package worldwide Book vehicles at 
                                      incredible prices worldwide
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className="col-xl-4 col-lg-4 col-md-4 m-b30">
                          <div className="twm-icon-style-left large-set in-dark-area">
                              <div className="twm-media">
                                  <img src="images/icons/customer-support.png" alt="image"/>
                              </div>
                              <div className="twm-content">
                                  <h3 className="twm-title">24/7 Road Assistance</h3>
                                  <p>
                                      We are ready to assist you and provide 
                                      reliable support. Who Will keep you moving 
                                      forward with confidence and mental peace.
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className="col-xl-4 col-lg-4 col-md-4 m-b30">
                          <div className="twm-icon-style-left large-set in-dark-area">
                              <div className="twm-media">
                                  <img src="images/icons/parking-area.png" alt="image"/>
                              </div>
                              <div className="twm-content">
                                  <h3 className="twm-title">Free Pick-Up & Drop-Off</h3>
                                  <p>
                                      Enjoy free pickup and drop-off services,
                                      which adds an extra layer of ease to your 
                                      car rental experience.
                                  </p>
                              </div>
                          </div>
                      </div>

                  </div>

              </div>

            </div>
            </div>

        {/* Our Vehicle Fleet Section */}

        <div className="section-full p-t150 p-b120 site-bg-white twm-blog-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
                <div className="container-fluid">

                   
                    {/* TITLE START*/}
                    <div className="section-head center ">
                        <div className="twm-sm-title left">Choose your car</div>
                        <h2 className="twm-large-title site-text-dark">Our Vehicle Fleet</h2>
                    </div>
                    {/* TITLE END*/}
                    

                    <div className="section-content">
                        <div className="owl-carousel twm-vehicle-fleet-carousel m-b30">
                            
                            {/*One block*/}
                            <div className="item">
                                <div className="twm-vehicle-fleet-bx">
                                    <div className="twm-media">
                                        <div className="twm-media-pic">
                                            <img src="images/vehicle-2/pic1.jpg" alt="image"/>
                                        </div>
                                        <div className="twm-price-section">
                                            <div className="v-price">$800</div>
                                            <div className="v-duration">/ Day</div>
                                            <a href="cars-detail.html" className="v-detail"><em>Detail</em></a>
                                        </div>
                                    </div>
                                    <div className="twm-vehicle-fleet-content">
                                        <h3 className="twm-v-title"><a href="cars-detail.html">Jeep Renegade</a></h3>
                                        <ul className="twm-vehicle-facility">
                                            <li><span><img src="images/icons/car-seat.png" alt="Image"/></span>4 Seat</li>
                                            <li><span><img src="images/icons/bag.png" alt="Image"/></span>4 Bags</li>
                                            <li><span><img src="images/icons/car.png" alt="Image"/></span>4 Suv</li>
                                        </ul>
                                        <ul className="twm-vehicle-fuel-type">
                                            <li>Petrol</li>
                                            <li><del>Diesel</del></li>
                                            <li><del>Electric</del></li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>

                            {/*Two block*/}
                            <div className="item">
                                <div className="twm-vehicle-fleet-bx">
                                    <div className="twm-media">
                                        <div className="twm-media-pic">
                                            <img src="images/vehicle-2/pic2.jpg" alt="image"/>
                                        </div>
                                        <div className="twm-price-section">
                                            <div className="v-price">$700</div>
                                            <div className="v-duration">/ Day</div>
                                            <a href="cars-detail.html" className="v-detail"><em>Detail</em></a>
                                        </div>
                                    </div>
                                    <div className="twm-vehicle-fleet-content">
                                        <h3 className="twm-v-title"><a href="cars-detail.html">Ferarri Enzo</a></h3>
                                        <ul className="twm-vehicle-facility">
                                            <li><span><img src="images/icons/car-seat.png" alt="Image"/></span>4 Seat</li>
                                            <li><span><img src="images/icons/bag.png" alt="Image"/></span>4 Bags</li>
                                            <li><span><img src="images/icons/car.png" alt="Image"/></span>4 Suv</li>
                                        </ul>
                                        <ul className="twm-vehicle-fuel-type">
                                            <li>Petrol</li>
                                            <li><del>Diesel</del></li>
                                            <li><del>Electric</del></li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>

                            {/*Three block*/}
                            <div className="item">
                                <div className="twm-vehicle-fleet-bx">
                                    <div className="twm-media">
                                        <div className="twm-media-pic">
                                            <img src="images/vehicle-2/pic3.jpg" alt="image"/>
                                        </div>
                                        <div className="twm-price-section">
                                            <div className="v-price">$900</div>
                                            <div className="v-duration">/ Day</div>
                                            <a href="cars-detail.html" className="v-detail"><em>Detail</em></a>
                                        </div>
                                    </div>
                                    <div className="twm-vehicle-fleet-content">
                                        <h3 className="twm-v-title"><a href="cars-detail.html">Mini Cooper</a></h3>
                                        <ul className="twm-vehicle-facility">
                                            <li><span><img src="images/icons/car-seat.png" alt="Image"/></span>4 Seat</li>
                                            <li><span><img src="images/icons/bag.png" alt="Image"/></span>4 Bags</li>
                                            <li><span><img src="images/icons/car.png" alt="Image"/></span>4 Suv</li>
                                        </ul>
                                        <ul className="twm-vehicle-fuel-type">
                                            <li>Petrol</li>
                                            <li><del>Diesel</del></li>
                                            <li><del>Electric</del></li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>

                            {/*Four block*/}
                            <div className="item">
                                <div className="twm-vehicle-fleet-bx">
                                    <div className="twm-media">
                                        <div className="twm-media-pic">
                                            <img src="images/vehicle-2/pic4.jpg" alt="image"/>
                                        </div>
                                        <div className="twm-price-section">
                                            <div className="v-price">$500</div>
                                            <div className="v-duration">/ Day</div>
                                            <a href="cars-detail.html" className="v-detail"><em>Detail</em></a>
                                        </div>
                                    </div>
                                    <div className="twm-vehicle-fleet-content">
                                        <h3 className="twm-v-title"><a href="cars-detail.html">Rolls Royce Cullinan</a></h3>
                                        <ul className="twm-vehicle-facility">
                                            <li><span><img src="images/icons/car-seat.png" alt="Image"/></span>4 Seat</li>
                                            <li><span><img src="images/icons/bag.png" alt="Image"/></span>4 Bags</li>
                                            <li><span><img src="images/icons/car.png" alt="Image"/></span>4 Suv</li>
                                        </ul>
                                        <ul className="twm-vehicle-fuel-type">
                                            <li>Petrol</li>
                                            <li><del>Diesel</del></li>
                                            <li><del>Electric</del></li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>

                            {/*Five block*/}
                            <div className="item">
                                <div className="twm-vehicle-fleet-bx">
                                    <div className="twm-media">
                                        <div className="twm-media-pic">
                                            <img src="images/vehicle-2/pic5.jpg" alt="image"/>
                                        </div>
                                        <div className="twm-price-section">
                                            <div className="v-price">$800</div>
                                            <div className="v-duration">/ Day</div>
                                            <a href="cars-detail.html" className="v-detail"><em>Detail</em></a>
                                        </div>
                                    </div>
                                    <div className="twm-vehicle-fleet-content">
                                        <h3 className="twm-v-title"><a href="cars-detail.html">Porsche 911</a></h3>
                                        <ul className="twm-vehicle-facility">
                                            <li><span><img src="images/icons/car-seat.png" alt="Image"/></span>4 Seat</li>
                                            <li><span><img src="images/icons/bag.png" alt="Image"/></span>4 Bags</li>
                                            <li><span><img src="images/icons/car.png" alt="Image"/></span>4 Suv</li>
                                        </ul>
                                        <ul className="twm-vehicle-fuel-type">
                                            <li>Petrol</li>
                                            <li><del>Diesel</del></li>
                                            <li><del>Electric</del></li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>

                            {/*Six block*/}
                            <div className="item">
                                <div className="twm-vehicle-fleet-bx">
                                    <div className="twm-media">
                                        <div className="twm-media-pic">
                                            <img src="images/vehicle-2/pic6.jpg" alt="image"/>
                                        </div>
                                        <div className="twm-price-section">
                                            <div className="v-price">$800</div>
                                            <div className="v-duration">/ Day</div>
                                            <a href="cars-detail.html" className="v-detail"><em>Detail</em></a>
                                        </div>
                                    </div>
                                    <div className="twm-vehicle-fleet-content">
                                        <h3 className="twm-v-title"><a href="cars-detail.html">Chevrolet Coupe</a></h3>
                                        <ul className="twm-vehicle-facility">
                                            <li><span><img src="images/icons/car-seat.png" alt="Image"/></span>4 Seat</li>
                                            <li><span><img src="images/icons/bag.png" alt="Image"/></span>4 Bags</li>
                                            <li><span><img src="images/icons/car.png" alt="Image"/></span>4 Suv</li>
                                        </ul>
                                        <ul className="twm-vehicle-fuel-type">
                                            <li>Petrol</li>
                                            <li><del>Diesel</del></li>
                                            <li><del>Electric</del></li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>

                            {/*Seven block*/}
                            <div className="item">
                                <div className="twm-vehicle-fleet-bx">
                                    <div className="twm-media">
                                        <div className="twm-media-pic">
                                            <img src="images/vehicle-2/pic7.jpg" alt="image"/>
                                        </div>
                                        <div className="twm-price-section">
                                            <div className="v-price">$800</div>
                                            <div className="v-duration">/ Day</div>
                                            <a href="cars-detail.html" className="v-detail"><em>Detail</em></a>
                                        </div>
                                    </div>
                                    <div className="twm-vehicle-fleet-content">
                                        <h3 className="twm-v-title"><a href="cars-detail.html">Ford White SUV</a></h3>
                                        <ul className="twm-vehicle-facility">
                                            <li><span><img src="images/icons/car-seat.png" alt="Image"/></span>4 Seat</li>
                                            <li><span><img src="images/icons/bag.png" alt="Image"/></span>4 Bags</li>
                                            <li><span><img src="images/icons/car.png" alt="Image"/></span>4 Suv</li>
                                        </ul>
                                        <ul className="twm-vehicle-fuel-type">
                                            <li>Petrol</li>
                                            <li><del>Diesel</del></li>
                                            <li><del>Electric</del></li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>

                            {/*Eight block*/}
                            <div className="item">
                                <div className="twm-vehicle-fleet-bx">
                                    <div className="twm-media">
                                        <div className="twm-media-pic">
                                            <img src="images/vehicle-2/pic8.jpg" alt="image"/>
                                        </div>
                                        <div className="twm-price-section">
                                            <div className="v-price">$800</div>
                                            <div className="v-duration">/ Day</div>
                                            <a href="cars-detail.html" className="v-detail"><em>Detail</em></a>
                                        </div>
                                    </div>
                                    <div className="twm-vehicle-fleet-content">
                                        <h3 className="twm-v-title"><a href="cars-detail.html">Toyota Crew Cab</a></h3>
                                        <ul className="twm-vehicle-facility">
                                            <li><span><img src="images/icons/car-seat.png" alt="Image"/></span>4 Seat</li>
                                            <li><span><img src="images/icons/bag.png" alt="Image"/></span>4 Bags</li>
                                            <li><span><img src="images/icons/car.png" alt="Image"/></span>4 Suv</li>
                                        </ul>
                                        <ul className="twm-vehicle-fuel-type">
                                            <li>Petrol</li>
                                            <li><del>Diesel</del></li>
                                            <li><del>Electric</del></li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        
        {/* Why choose us section */}
        <div className="section-full site-bg-white twm-w-chooseus-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
                <div className="container">
                    <div className="row twm-w-chooseus-section">
                        <div className="col-lg-5 col-md-12">
                            {/* TITLE START*/}
                            <div className="section-head left ">
                                <div className="twm-sm-title left">Our Features</div>
                                <h2 className="twm-large-title site-text-dark">Why Choose Us?</h2>
                                <div className="section-head-detail">
                                    Discover a world of convenience, safety, and customization, paving the way for unforgettable adventures and seamless mobility solutions.
                                </div>
                            </div>
                            {/* TITLE END*/}

                            <div className="twm-list-icon-style1">
                                <ul>
                                    <li>
                                        <div className="twm-list-icon-style-bx">
                                            <div className="twm-icon-bx">
                                                <span>
                                                    <img src="images/w-choose-icon/icon-1.png" alt="image"/>
                                                </span>
                                            </div>
                                            <div className="twm-icon-bx-detail">
                                                <h3 className="twm-title">Deals For Every Budget</h3>
                                                <p>Incredible prices on every car, van, bike and package 
                                                    worldwide Book vehicles at incredible.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="twm-list-icon-style-bx">
                                            <div className="twm-icon-bx">
                                                <span>
                                                    <img src="images/w-choose-icon/icon-2.png" alt="image"/>
                                                </span>
                                            </div>
                                            <div className="twm-icon-bx-detail">
                                                <h3 className="twm-title">Flexible Pricing</h3>
                                                <p>customization, paving the way for unforgettable
                                                    adventures seamless mobility solutions.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="twm-list-icon-style-bx">
                                            <div className="twm-icon-bx">
                                                <span>
                                                    <img src="images/w-choose-icon/icon-3.png" alt="image"/>
                                                </span>
                                            </div>
                                            <div className="twm-icon-bx-detail">
                                                <h3 className="twm-title">Quality At Minimum Expense</h3>
                                                <p>customization, paving the way for unforgettable
                                                    adventures seamless mobility solutions.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="twm-list-icon-style-bx">
                                            <div className="twm-icon-bx">
                                                <span>
                                                    <img src="images/w-choose-icon/icon-4.png" alt="image"/>
                                                </span>
                                            </div>
                                            <div className="twm-icon-bx-detail">
                                                <h3 className="twm-title">Free Pick-Up & Drop-Off</h3>
                                                <p>Enjoy free pickup and drop-off services, adding an
                                                    extra layer of ease to your car rental experience.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="twm-w-chooseus-media">
                                <div className="twm-media">
                                    <img src="images/need-h-pic.png" alt="Image"/>
                                </div>
                                <div className="twm-need-help-bx">
                                    <div className="twm-need-help-content">
                                        <span>Need any help ?</span>
                                        <h3 className="twm-title">+71 202 102 2124</h3>
                                    </div>
                                    <div className="twm-need-help-icon">
                                        <img src="images/24-clock.png" alt="icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/* Categories Section */}
        <div className="section-full p-t150 site-bg-white twm-categories-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            {/* TITLE START*/}
                            <div className="section-head left ">
                                <div className="twm-sm-title left">Categories</div>
                                <h2 className="twm-large-title site-text-dark">A Look At All Types Of Vehicles</h2>
                            </div>
                            {/* TITLE END*/}
                        </div>
                    </div>

                    <div className="section-content">
                        <div className="owl-carousel twm-categories-carousel next-prev-top-right">
                            
                            {/*One block*/}
                            <div className="item">
                                <div className="twm-categories-type">
                                    <div className="twm-media">
                                        <img src="images/vehicle/pic13.jpg" alt="Image"/>
                                        <div className="twm-media-link">
                                            <a href="cars-detail.html" className="twm-media-link-content">SUV</a>
                                        </div>
                                    </div>
                                </div> 
                            </div>

                            {/*Two block*/}
                            <div className="item">
                                <div className="twm-categories-type">
                                    <div className="twm-media">
                                        <img src="images/vehicle/pic8.jpg" alt="Image"/>
                                        <div className="twm-media-link">
                                            <a href="cars-detail.html" className="twm-media-link-content">Sedan</a>
                                        </div>
                                    </div>
                                </div> 
                            </div>

                            {/*Three block*/}
                            <div className="item">
                                <div className="twm-categories-type">
                                    <div className="twm-media">
                                        <img src="images/vehicle/pic14.jpg" alt="Image"/>
                                        <div className="twm-media-link">
                                            <a href="cars-detail.html" className="twm-media-link-content">Harley Davidson</a>
                                        </div>
                                    </div>
                                </div> 
                            </div>

                            {/*Four block*/}
                            <div className="item">
                                <div className="twm-categories-type">
                                    <div className="twm-media">
                                        <img src="images/vehicle/pic6.jpg" alt="Image"/>
                                        <div className="twm-media-link">
                                            <a href="cars-detail.html" className="twm-media-link-content">Hatchback</a>
                                        </div>
                                    </div>
                                </div> 
                            </div>

                            {/*Five block*/}
                            <div className="item">
                                <div className="twm-categories-type">
                                    <div className="twm-media">
                                        <img src="images/vehicle/pic3.jpg" alt="Image"/>
                                        <div className="twm-media-link">
                                            <a href="cars-detail.html" className="twm-media-link-content">Coupe</a>
                                        </div>
                                    </div>
                                </div> 
                            </div>

                            {/*Six block*/}
                            <div className="item">
                                <div className="twm-categories-type">
                                    <div className="twm-media">
                                        <img src="images/vehicle/pic5.jpg" alt="Image"/>
                                        <div className="twm-media-link">
                                            <a href="cars-detail.html" className="twm-media-link-content">Hybrid</a>
                                        </div>
                                    </div>
                                </div> 
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        {/* Working Steps */}
        <div className="section-full p-t150 site-bg-white twm-w-steps-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2" style={{ backgroundImage: 'url("images/step-bg.jpg")' }}
        >
                <div className="container">

                    
                    {/* TITLE START*/}
                    <div className="section-head center ">
                        <div className="twm-sm-title left">How it Work</div>
                        <h2 className="twm-large-title site-text-dark">Following Working Steps</h2>
                    </div>
                    {/* TITLE END*/}
                     

                    <div className="section-content">
                        <div className="row twm-w-steps-section">
                            
                            <div className="col-lg-3 col-md-6 m-b30">
                                <div className="twm-w-steps">
                                    <div className="twm-w-step-count">
                                        <span>01</span>
                                    </div>
                                    <div className="twm-w-step-detail">
                                        <h3 className="twm-title">Choose A Car</h3>
                                        <p>Check out our range of cars and choose the car of your choice </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 m-b30">
                                <div className="twm-w-steps">
                                    <div className="twm-w-step-count">
                                        <span>02</span>
                                    </div>
                                    <div className="twm-w-step-detail">
                                        <h3 className="twm-title">Pick Up Date</h3>
                                        <p>Check out our range of cars and choose the car of your choice </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 m-b30">
                                <div className="twm-w-steps">
                                    <div className="twm-w-step-count">
                                        <span>03</span>
                                    </div>
                                    <div className="twm-w-step-detail">
                                        <h3 className="twm-title">Confirm Your Booking</h3>
                                        <p>Check out our range of cars and choose the car of your choice </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 m-b30">
                                <div className="twm-w-steps">
                                    <div className="twm-w-step-count">
                                        <span>04</span>
                                    </div>
                                    <div className="twm-w-step-detail">
                                        <h3 className="twm-title">Enjoy Driving</h3>
                                        <p>Check out our range of cars and choose the car of your choice </p>
                                    </div>
                                </div>
                            </div>
                            

                        </div>

                        <div className="twm-adv-show">
                            <img src="images/adv-car.png" alt="Image"/>
                        </div>

                    </div>

                </div>
            </div>

        {/* Testimonial Section */}
        <div className="section-full p-t150 site-bg-white twm-testimonial-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            {/* TITLE START*/}
                            <div className="section-head left ">
                                <div className="twm-sm-title left">Testimonial</div>
                                <h2 className="twm-large-title site-text-dark">What Our Customers Say</h2>
                            </div>
                            {/* TITLE END*/}
                        </div>
                    </div>

                    <div className="section-content">
                        <div className="owl-carousel twm-blog-carousel next-prev-top-right">
                            
                            {/*One block*/}
                            <div className="item">
                                <div className="twm-testimonial2">
                                    <div className="twm-testimonial-head">
                                        <div className="media-pic">
                                            <img src="/images/testimonial/pic1.jpg" alt="Image"/>
                                        </div>
                                        <div className="twm-author-detail">
                                            <h3 className="twm-title">Kevin Martin</h3>
                                            <div className="twm-position">Customer</div>
                                        </div>
                                    </div>
                                    
                                    <div className="twm-testimonial-detail">
                                        <p>I Was Very Impresed Lorem posuere in miss and drana 
                                            en the nisan semere sceriun amiss etiam ornare in 
                                            the miss drana is lorem fermen mauris.
                                        </p>
                                        <div className="twm-rating-wrap">
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                        </div> 
                                    </div>
                                        
                                    <div className="twm-quote-icon">
                                        <img src="/images/quote.png" alt="#"/>
                                    </div>
                                    
                                </div> 
                            </div>

                            {/*Two block*/}
                            <div className="item">
                                <div className="twm-testimonial2">
                                    <div className="twm-testimonial-head">
                                        <div className="media-pic">
                                            <img src="images/testimonial/pic2.jpg" alt="Image"/>
                                        </div>
                                        <div className="twm-author-detail">
                                            <h3 className="twm-title">Devid Cullen</h3>
                                            <div className="twm-position">Customer</div>
                                        </div>
                                    </div>
                                    
                                    <div className="twm-testimonial-detail">
                                        <p>I Was Very Impresed Lorem posuere in miss and drana 
                                            en the nisan semere sceriun amiss etiam ornare in 
                                            the miss drana is lorem fermen mauris.
                                        </p>
                                        <div className="twm-rating-wrap">
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                        </div> 
                                    </div>
                                        
                                    <div className="twm-quote-icon">
                                        <img src="images/quote.png" alt="#"/>
                                    </div>
                                    
                                </div> 
                            </div>

                            {/*Three block*/}
                            <div className="item">
                                <div className="twm-testimonial2">
                                    <div className="twm-testimonial-head">
                                        <div className="media-pic">
                                            <img src="images/testimonial/pic3.jpg" alt="Image"/>
                                        </div>
                                        <div className="twm-author-detail">
                                            <h3 className="twm-title">Piter Has</h3>
                                            <div className="twm-position">Customer</div>
                                        </div>
                                    </div>
                                    
                                    <div className="twm-testimonial-detail">
                                        <p>I Was Very Impresed Lorem posuere in miss and drana 
                                            en the nisan semere sceriun amiss etiam ornare in 
                                            the miss drana is lorem fermen mauris.
                                        </p>
                                        <div className="twm-rating-wrap">
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                        </div> 
                                    </div>
                                        
                                    <div className="twm-quote-icon">
                                        <img src="images/quote.png" alt="#"/>
                                    </div>
                                    
                                </div> 
                            </div>

                            {/*Four block*/}
                            <div className="item">
                                <div className="twm-testimonial2">
                                    <div className="twm-testimonial-head">
                                        <div className="media-pic">
                                            <img src="images/testimonial/pic1.jpg" alt="Image"/>
                                        </div>
                                        <div className="twm-author-detail">
                                            <h3 className="twm-title">Kevin Martin</h3>
                                            <div className="twm-position">Customer</div>
                                        </div>
                                    </div>
                                    
                                    <div className="twm-testimonial-detail">
                                        <p>I Was Very Impresed Lorem posuere in miss and drana 
                                            en the nisan semere sceriun amiss etiam ornare in 
                                            the miss drana is lorem fermen mauris.
                                        </p>
                                        <div className="twm-rating-wrap">
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                        </div> 
                                    </div>
                                        
                                    <div className="twm-quote-icon">
                                        <img src="images/quote.png" alt="#"/>
                                    </div>
                                    
                                </div> 
                            </div>

                            {/*Five block*/}
                            <div className="item">
                                <div className="twm-testimonial2">
                                    <div className="twm-testimonial-head">
                                        <div className="media-pic">
                                            <img src="images/testimonial/pic2.jpg" alt="Image"/>
                                        </div>
                                        <div className="twm-author-detail">
                                            <h3 className="twm-title">Devid Cullen</h3>
                                            <div className="twm-position">Customer</div>
                                        </div>
                                    </div>
                                    
                                    <div className="twm-testimonial-detail">
                                        <p>I Was Very Impresed Lorem posuere in miss and drana 
                                            en the nisan semere sceriun amiss etiam ornare in 
                                            the miss drana is lorem fermen mauris.
                                        </p>
                                        <div className="twm-rating-wrap">
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                        </div> 
                                    </div>
                                        
                                    <div className="twm-quote-icon">
                                        <img src="images/quote.png" alt="#"/>
                                    </div>
                                    
                                </div> 
                            </div>

                            {/*Six block*/}
                            <div className="item">
                                <div className="twm-testimonial2">
                                    <div className="twm-testimonial-head">
                                        <div className="media-pic">
                                            <img src="images/testimonial/pic3.jpg" alt="Image"/>
                                        </div>
                                        <div className="twm-author-detail">
                                            <h3 className="twm-title">Piter Has</h3>
                                            <div className="twm-position">Customer</div>
                                        </div>
                                    </div>
                                    
                                    <div className="twm-testimonial-detail">
                                        <p>I Was Very Impresed Lorem posuere in miss and drana 
                                            en the nisan semere sceriun amiss etiam ornare in 
                                            the miss drana is lorem fermen mauris.
                                        </p>
                                        <div className="twm-rating-wrap">
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                        </div> 
                                    </div>
                                        
                                    <div className="twm-quote-icon">
                                        <img src="images/quote.png" alt="#"/>
                                    </div>
                                    
                                </div> 
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        {/* Blogs */}
        <div className="section-full p-t150 p-b120 site-bg-white twm-blog-section-wrap wow fadeInDown" data-wow-offset="100" data-wow-delay="0.2">
                <div className="container-fluid">

                   
                    {/* TITLE START*/}
                    <div className="section-head center ">
                        <div className="twm-sm-title left">From the Blog</div>
                        <h2 className="twm-large-title site-text-dark">Car And Bike Rental News</h2>
                    </div>
                    {/* TITLE END*/}
                    

                    <div className="section-content">
                        <div className="owl-carousel twm-blog-carousel m-b30">
                            
                            {/*One block*/}
                            <div className="item">
                                <div className="twm-lt-blog">
                                    <div className="wt-post-media">
                                        <a href="blog-detail.html"><img src="images/blog/latest/bg1.jpg" alt=""/></a>
                                    </div>
                                    <div className="twm-post-info-wrap">
                                        <div className="post-date-wrap">
                                            <div className="post-date">
                                                <span className="date">14</span>
                                                <span className="month">June</span>
                                            </div>
                                        </div>                                  
                                        <div className="twm-post-info">
                                            
                                            <div className="post-author">
                                                <a className="au-name" href="blog-detail.html">by Mike Hardson</a>
                                            </div>
                                            
                                            <h3 className="post-title">
                                                <a href="blog-detail.html">Your Perfect Memorial Day Weekend Getaway with Carntel</a>
                                            </h3>
                                        </div>
                                    </div>
                                    
                                </div> 
                            </div>

                            {/*Two block*/}
                            <div className="item">
                                <div className="twm-lt-blog">
                                    <div className="wt-post-media">
                                        <a href="blog-detail.html"><img src="images/blog/latest/bg2.jpg" alt=""/></a>
                                    </div>
                                    <div className="twm-post-info-wrap">
                                        <div className="post-date-wrap">
                                            <div className="post-date">
                                                <span className="date">18</span>
                                                <span className="month">July</span>
                                            </div>
                                        </div>                                  
                                        <div className="twm-post-info">
                                            
                                            <div className="post-author">
                                                <a className="au-name" href="blog-detail.html">by Devid Culun</a>
                                            </div>
                                            
                                            <h3 className="post-title">
                                                <a href="blog-detail.html">The Ultimate Checklist for a Successful Car Rental Adventure</a>
                                            </h3>
                                        </div>
                                    </div>
                                    
                                </div> 
                            </div>

                            {/*Three block*/}
                            <div className="item">
                                <div className="twm-lt-blog">
                                    <div className="wt-post-media">
                                        <a href="blog-detail.html"><img src="images/blog/latest/bg3.jpg" alt=""/></a>
                                    </div>
                                    <div className="twm-post-info-wrap">
                                        <div className="post-date-wrap">
                                            <div className="post-date">
                                                <span className="date">26</span>
                                                <span className="month">Sep</span>
                                            </div>
                                        </div>                                  
                                        <div className="twm-post-info">
                                            
                                            <div className="post-author">
                                                <a className="au-name" href="blog-detail.html">by Kevin Smith</a>
                                            </div>
                                            
                                            <h3 className="post-title">
                                                <a href="blog-detail.html">Tips for Renting the Perfect Car for Your Family Vacation</a>
                                            </h3>
                                        </div>
                                    </div>
                                    
                                </div> 
                            </div>

                            {/*Four block*/}
                            <div className="item">
                                <div className="twm-lt-blog">
                                    <div className="wt-post-media">
                                        <a href="blog-detail.html"><img src="images/blog/latest/bg4.jpg" alt=""/></a>
                                    </div>
                                    <div className="twm-post-info-wrap">
                                        <div className="post-date-wrap">
                                            <div className="post-date">
                                                <span className="date">14</span>
                                                <span className="month">June</span>
                                            </div>
                                        </div>                                  
                                        <div className="twm-post-info">
                                            
                                            <div className="post-author">
                                                <a className="au-name" href="blog-detail.html">by Mike Hardson</a>
                                            </div>
                                            
                                            <h3 className="post-title">
                                                <a href="blog-detail.html">Your Perfect Memorial Day Weekend Getaway with Carntel</a>
                                            </h3>
                                        </div>
                                    </div>
                                    
                                </div> 
                            </div>

                            {/*Five block*/}
                            <div className="item">
                                <div className="twm-lt-blog">
                                    <div className="wt-post-media">
                                        <a href="blog-detail.html"><img src="images/blog/latest/bg5.jpg" alt=""/></a>
                                    </div>
                                    <div className="twm-post-info-wrap">
                                        <div className="post-date-wrap">
                                            <div className="post-date">
                                                <span className="date">18</span>
                                                <span className="month">July</span>
                                            </div>
                                        </div>                                  
                                        <div className="twm-post-info">
                                            
                                            <div className="post-author">
                                                <a className="au-name" href="blog-detail.html">by Devid Culun</a>
                                            </div>
                                            
                                            <h3 className="post-title">
                                                <a href="blog-detail.html">The Ultimate Checklist for a Successful Car Rental Adventure</a>
                                            </h3>
                                        </div>
                                    </div>
                                    
                                </div> 
                            </div>

                            {/*Six block*/}
                            <div className="item">
                                <div className="twm-lt-blog">
                                    <div className="wt-post-media">
                                        <a href="blog-detail.html"><img src="images/blog/latest/bg6.jpg" alt=""/></a>
                                    </div>
                                    <div className="twm-post-info-wrap">
                                        <div className="post-date-wrap">
                                            <div className="post-date">
                                                <span className="date">26</span>
                                                <span className="month">Sep</span>
                                            </div>
                                        </div>                                  
                                        <div className="twm-post-info">
                                            
                                            <div className="post-author">
                                                <a className="au-name" href="blog-detail.html">by Kevin Smith</a>
                                            </div>
                                            
                                            <h3 className="post-title">
                                                <a href="blog-detail.html">Tips for Renting the Perfect Car for Your Family Vacation</a>
                                            </h3>
                                        </div>
                                    </div>
                                    
                                </div> 
                            </div>
                            

                        </div>

                    </div>

                </div>
            </div>

        </>

          
        
    )
}
export default Home