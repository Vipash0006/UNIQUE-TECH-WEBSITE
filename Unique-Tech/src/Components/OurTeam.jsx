import React from 'react'

function OurTeam() {
  return (
    <div>
      
      <section id="our-team" className="sections">
            <div className="container">

                <div className="heading">
                    <div className="title text-center arrow-left">
                        <img className="hidden-xs" src="./src/assets/images/left-arrow.png" alt="" />

                        <h4 className="">Our Team Members</h4>
                    </div>
                </div>
            </div>

            <div className="container-fluid project-bg">
                <div className="row">

                    <div className="main-team text-center">

                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="team-member">

                                <img className="img-circle" src="./src/assets/images/team/1.png" alt="" />
                                <h5>SAYED MIRAJ</h5>
                                <p>UI & UX DESIGNER</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="team-member">
                                <img className="img-circle" src="./src/assets/images/team/2.png" alt="" />
                                <h5>PENNY HUSTON</h5>
                                <p>DEVELOPER</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="team-member">
                                <img className="img-circle" src="./src/assets/images/team/3.png" alt="" />
                                <h5>LENNERD SHELLY</h5>
                                <p>REVIEWER</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="team-member">
                                <img className="img-circle" src="./src/assets/images/team/4.png" alt="" />
                                <h5>SHELDON CUPPER</h5>
                                <p>MARKETTER</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>

       
    </div>
  )
}

export default OurTeam
