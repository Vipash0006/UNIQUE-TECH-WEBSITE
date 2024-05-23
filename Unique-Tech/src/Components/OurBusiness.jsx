
import React from 'react'


function OurBusiness({projectData}) {
  return (
    <div>
        <section id="our-project" className="sections">
            <div className="container">

                <div className="heading">
                    <div className="title text-center arrow-left">
                        <h4 className="">"OUR BUSINESS RELATED PROJECTS"</h4>
                        <img className="hidden-xs" src="./src/assets/images/right-arrow.png" alt="" />
                    </div>
                </div>

                <div className="row">
                    <div className="main-project text-center">
                        {projectData.map((project, index) => (
                            <div key={index} className="col-md-3 col-sm-6 col-xs-12">
                                <div className="project-item">
                                    <div className="project-photo">
                                        <img src={project.imageSrc} alt={project.altText} />
                                    </div>
                                    <h5>{project.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}



export default OurBusiness;

