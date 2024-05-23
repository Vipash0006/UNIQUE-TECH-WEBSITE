import React from 'react'
// import styles from './src/assets/css/style.css'

function Header() {
  return (
    <div>
      <header id="home" className="sections">
            <div className="container">

                <div className="row">
                    <div className="homepage-style">
                        <div className="top-arrow hidden-xs text-center"><img src="./src/assets/images/top-arrow.png" alt="" /></div>

                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="unique-apps">
                                <h2>UNIQUE-TECH<br/>APP DEVELOPMENT </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. 
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit. 
                                </p>

                                <div className="home-btn"><button className="btn btn-primary">View More <span><i className="fa fa-paper-plane"></i></span></button></div>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="slider-area">

                                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="3000">
                                    
                                    <ol className="carousel-indicators">
                                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                                        <li data-target="#carousel-example-generic" data-slide-to="3"></li>

                                    </ol>

                                    
                                    <div className="carousel-inner" role="listbox">

                                        <div className="item active">
                                            <img src="./src/assets/images/slider-img.png" alt="" />
                                        </div>

                                        <div className="item">
                                            <img src="./src/assets/images/slider-img.png" alt="" />
                                        </div>

                                        <div className="item">
                                            <img src="./src/assets/images/slider-img.png" alt="" />
                                        </div>

                                        <div className="item">
                                            <img src="./src/assets/images/slider-img.png" alt="" />
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>	
                </div>

            </div>

        </header>
    </div>
  )
}

export default Header
