
import React from 'react'

function OurFeatures(props) {
    return (
        <div>
            <section id="our-feature" className="sections">
                <div className="container">
                    <div className="heading">
                        <div className="title text-center arrow-left">
                            <img className="hidden-xs" src="./src/assets/images/left-arrow.png" alt="" />

                            <h4 className="">Our Features</h4>
                        </div>
                    </div>

                    <div className="feature-wrapper">
                        <div className="row">

                            {
                                props.data.map((val, index) => (
                                    <div className="col-md-4 col-sm-6 col-xs-12">
                                        <div className="features-content">
                                            <h4><i className="fa fa-database"></i><span>{val.title}</span></h4>
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }


                        </div>
                    </div>


                </div>


            </section>
        </div>
    )
}

export default OurFeatures

