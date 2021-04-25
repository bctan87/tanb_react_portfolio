import React from "react";

const About = () => (
  <div className="container">
    <h4>About Me</h4>
    <div className="col s12 m3">
        <div className="card horizontal">
            <div className="card-image">
                <img src="../images/photo.jpg" alt="ben" />
            </div>
            <div className="card-stacked">
                <div className="card-content">
                <p>
                    My name is Ben Tan. I’m a designer, a developer, and a project manager. 
                    I’m well versed in the tech-related production; from designing digital 
                    assets and mockups, to working closely with engineers and QA, all the 
                    way to reporting to upper management and stakeholders. I have over 4 
                    years of experience in the industry, ranging from startup to mid/large 
                    corporate setting. No matter what project magnitude or product scale, 
                    I’m comfortable in designing, developing, and managing projects from 
                    original concepts through final implementation.
                </p>
               
                </div>
                <div className="card-action">
                    <p>
                        BA Graphic Design, San Jose State University                   
                    </p>
                    <p>
                        Certified SAFe® 5 Scrum Master (SSM) - Scaled Agile, Inc.
                    </p>
                </div>
            </div>
        </div>
    </div>
    
    
  </div>
);

export default About;
