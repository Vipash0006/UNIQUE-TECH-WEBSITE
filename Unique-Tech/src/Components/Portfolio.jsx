import React from 'react'

function Portfolio() {
  return (
    <div>
      <section id="our-portfolio" className="sections">
            <div className="container">

                <div className="row">
                    <div className="heading">
                        <div className="title text-center arrow-right">
                            <h4 className="">WHAT WE DO </h4>
                            <img className="hidden-xs" src="./src/assets/images/right-arrow.png" alt="" />

                        </div>
                    </div>	


                    
                    <div className="portfolio-wrap">

                        <div className="portfolio">

                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <img src="./src/assets/images/monitor.png" alt="" />
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="portfolio-item">
                                    <h4>WEB DESIGN</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. laboru
                                    </p>
                                    <button className="btn pt-btn btn-primary">View More</button>
                                </div>
                            </div>

                        </div>



                        <div className="portfolio">

                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="portfolio-item">
                                    <h4>SEARCH ENGINE OPTIMIZATION</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. laboru
                                    </p>
                                    <button className="btn pt-btn btn-primary">View More</button>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <img className="portfolio-img img-responsive" src="./src/assets/images/monitor.png" alt="" />
                            </div>

                        </div>



                        <div className="portfolio">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <img className="portfolio-img img-responsive" src="./src/assets/images/monitor.png" alt="" />
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="portfolio-item">
                                    <h4>AFFILIATE MARKETING</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est. laboru
                                    </p>
                                    <button className="btn pt-btn btn-primary">View More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      
        </section>
    </div>
  )
}

export default Portfolio

