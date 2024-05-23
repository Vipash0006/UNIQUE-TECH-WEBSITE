import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html"/><img src="./src/assets/images/logo.png" alt=""/>
                    </div>

                    
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active"><a href="#home">Home<span className="sr-only">(current)</span></a></li>
                            <li><a href="#works-area">Service</a></li>
                            <li><a href="#our-team">About</a></li>
                            <li><a href="#our-portfolio">Portfolio</a></li>
                            <li><a href="#our-history">Academic</a></li>
                            <li><a href="#our-feature">Blog</a></li>
                            <li><a href="#">Contact Us</a></li>

                            <div className="contact-number text-right"> 
                                <ul><li className="">(+001122334)</li></ul>
                            </div>

                        </ul>
                    </div>
                </div>
            </nav>
  )
}

export default Navbar
