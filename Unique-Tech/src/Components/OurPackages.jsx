import React from 'react'

function OurPackages() {
  return (
    <div>
      <section id="our-package" className="sections lightbg">
            <div className="container">

                <div className="heading">
                    <div className="title text-center arrow-left">
                        <img className="hidden-xs" src="./src/assets/images/left-arrow.png" alt="" />

                        <h4 className="">Our Packages</h4>
                    </div>
                </div>

                <div className="row">


                    <div className="main-package text-center">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="package-item basic">

                                <h5>Basic</h5>

                                <ul>
                                    <li>5 web sites</li>
                                    <li>5 e-mails</li>
                                    <li>5 MySQL databases</li>
                                    <li>5 MySQL databases</li>
                                    <li>10 GB storage</li>
                                </ul>

                                <div className="package-bottom-area">
                                    <h3>$5/<span>mo.</span></h3>
                                </div>

                                <div className="pkg-btn"><a href="" className="btn btn-primary">ORDER NOW</a></div>

                            </div>


                        </div>

                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="package-item standard">

                                <h5>Standard</h5>

                                <ul>
                                    <li>5 web sites</li>
                                    <li>5 e-mails</li>
                                    <li>5 MySQL databases</li>
                                    <li>5 MySQL databases</li>
                                    <li>10 GB storage</li>
                                </ul>

                                <div className="package-bottom-area">
                                    <h3>$12<span>/mo.</span></h3>
                                </div>

                                <div className="pkg-btn"><a href="" className="btn btn-primary">ORDER NOW</a></div>

                            </div>


                        </div>

                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="package-item premium">

                                <h5>Premium</h5>

                                <ul>
                                    <li>5 web sites</li>
                                    <li>5 e-mails</li>
                                    <li>5 MySQL databases</li>
                                    <li>5 MySQL databases</li>
                                    <li>10 GB storage</li>
                                </ul>

                                <div className="package-bottom-area">
                                    <h3>$19<span>/mo.</span></h3>
                                </div>

                                <div className="pkg-btn"><a href="" className="btn btn-primary">ORDER NOW</a></div>

                            </div>


                        </div>

                    </div>


                </div>
            </div>	
        </section>
    </div>
  )
}

export default OurPackages
