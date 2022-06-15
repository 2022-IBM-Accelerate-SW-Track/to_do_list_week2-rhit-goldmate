import React, { Component } from 'react';
import "./About.css";
import headshot from "../assets/headshot.jpg";

  
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src={headshot}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Taylor Goldman</div>
          <div className="brief_description">
          I will be a junior Computer Science major at Rose-Hulman Institute of Technology.
           I'm currently an intern at CUNA Mutual Group in Madison, Wisconsin as an Infrastructure
           Automation Intern in the IT department. I am also focusing my schooling on cybersecurity, 
           as I am hoping to be able to pursue that in the future. I am looking forward to participating
           in the IBM Accelerate Program and I hope to learn a lot to add to my skillset, and to learn
           more about IBM. I also play on the women's tennis team at Rose-Hulman, and I 
           enjoy going outside, and spending time with friends and family.
          </div>
        </div>
      </div>
    </div>
    )
  }
}