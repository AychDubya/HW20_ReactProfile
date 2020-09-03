import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Hannibal Wyman</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Hello, my name is Hannibal Wyman and I am a Full Stack Coding student through the University of Washington coding Boot Camp. I am excited to be finally learning how to code! I am 1/3 of the way through my journey and have already learned more than I could have imagined about HTML, CSS, JavaScript, jQuery, Git, and most recently Node.js. Thanks to the University of Washington's Coding Boot Camp, I hope to demonstrate my skills soon.

My background is in DevOps Project and Release Management. With my current experience, the valuable knowledge I am now gaining will result in making me a great software developer.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Space Needle, 58819</p>
            <h5>Phone</h5>
            <p>(512) 773-5413</p>
            <h5>Email</h5>
            <p>hannibalwy@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={1995}
              endYear={1997}
              schoolName="Texas State Technical College"
              schoolDescription="Computer Network Systems and Administration"
               />

               <Education
                 startYear={2020}
                 endYear={2020}
                 schoolName="University of Washington"
                 schoolDescription="Full Stack Web Development Coding Boot Camp"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2002}
              endYear={2010}
              jobName="Dell Computers"
              jobDescription="Regulatory Compliance and Product Safety Technician"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Microsoft"
                jobDescription="DevOps Software Release Manager"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
