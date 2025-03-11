import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "100%",
          value: "Expert"
        },
        {
          id: "react_skill",
          content: "React",
          porcentage: "80%",
          value: "Advanced"
        },
        {
          id: "ts_skill",
          content: "Typescript",
          porcentage: "80%",
          value: "Advanced"
        },
        {
          id: "ror_skill",
          content: "Ruby on Rails",
          porcentage: "80%",
          value: "Advanced"
        },
        {
          id: "kotlin_skill",
          content: "Kotlin",
          porcentage: "50%",
          value: "Competent"
        },
        {
          id: "ros_skill",
          content: "ROS",
          porcentage: "25%",
          value: "Beginner"
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a traveler, an avid climber, an improving snowboarder, an on-and-off reader, a bingewatcher, a huge Niners fan, and a competent cook. I like to build, tinker with, break, and fix things, though not always in that order."
        },
        {
          id: "second-p-about",
          content:
            "I was raised in Oakland, California, and got a Bachelors in Computer Science from Colgate University. After graduation, I began my career in the tech industry. I worked as a software engineer at Bird, Flowcode, and Academia.edu, with a stint as an engineering manager at Roots automation in the middle. Now I am working my way through Masters in Mechanical Engineering from UC Berkeley, with an expected graduation date of May 2025."
        },
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
            <div className="title-box-2">
                <h5 className="title-left">About Me</h5>
              </div>
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Bio</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h5 className="title-left">Skills</h5>
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skills</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.value}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
