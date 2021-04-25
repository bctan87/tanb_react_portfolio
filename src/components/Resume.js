import React from "react";

const Resume = () => (
  <div className="container">
    <h4>Resume</h4>
    <a href={process.env.PUBLIC_URL + '/file/tanbenDevResume.pdf'}  download="">Download My Resume</a>
    <br/>
    <h5>
      Front-end Proficiencies
    </h5>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Bootstrap</li>
      <li>Materialize</li>
      <li>Responsive Design</li>
      <li>React</li>

    </ul>
    <h5>
      Back-end Proficiencies
    </h5>
    <ul>
      <li>APIs</li>
      <li>Node</li>
      <li>Express</li>
      <li>MySQL, Sequelize</li>
      <li>MongoDB, Mongoose</li>
      <li>REST</li>

    </ul>
  </div>
);

export default Resume;