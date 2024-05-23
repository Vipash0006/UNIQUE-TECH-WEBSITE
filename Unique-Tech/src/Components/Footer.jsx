import React from 'react'
// import './src/assets/css/style.css'
// import '.src/assets/css/responsive.css'
function Footer() {
  return (
    <div>
      <footer id="footer" className="footer">
            <div className="container">

                <div className="row">
                    <div className="main-footer">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="footer-item">
                                <h2>PORTFOLIO</h2>
                                <ul>
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">Brand & Identity</a></li>
                                    <li><a href="#">Mobile Design</a></li>
                                    <li><a href="#">Print</a></li>
                                    <li><a href="#">User Interface</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="footer-item">
                                <h2>ABOUT</h2>
                                <ul>
                                    <li><a href="#">The Company</a></li>
                                    <li><a href="#">History</a></li>
                                    <li><a href="#">Vision</a></li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="footer-item">
                                <h2>GALLERY</h2>
                                <ul>
                                    <li><a href="#">lickr</a></li>
                                    <li><a href="#">Picasa</a></li>
                                    <li><a href="#">iStockPhoto</a></li>
                                    <li><a href="#">PhotoDune</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="footer-item">
                                <h2>CONTACT</h2>
                                <ul>
                                    <li><a href="#">Basic Info</a></li>
                                    <li><a href="#">Map</a></li>
                                    <li><a href="#">Conctact Form</a></li>

                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="socio-copyright">

                        <div className="social">
                            <a target="_blank" href="#"><i className="fa fa-facebook"></i></a>
                            <a target="_blank" href="#"><i className="fa fa-twitter"></i></a>
                            <a target="_blank" href="#"><i className="fa fa-google-plus"></i></a>
                            <a target="_blank" href="#"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>

                </div>	
            </div>

        </footer>
    </div>
  )
}

export default Footer
