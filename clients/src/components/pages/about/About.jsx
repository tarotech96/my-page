import React, { useCallback } from 'react'
import './About.css'
import avatar2Img from 'assets/images/avatar2.png'
import avatar from 'assets/images/avatar.png'
import { Button } from '@material-ui/core'
import { downloadCV } from 'services/userService'

function About() {
  const handleDownloadCV = useCallback(() => {
    downloadCV()
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {})
      .finally(() => {})
  }, [])
  return (
    <div className="about">
      <div className="ab__header">
        <img src={avatar} alt="" />
        <h1>
          Taro Nguyen
          <br />
          Fullstack Web Developer
        </h1>
      </div>
      <div className="ab__details">
        <div className="ab__details-left">
          <img src={avatar2Img} alt="" />
        </div>
        <div className="ab__details-right">
          <h4>About Me</h4>
          <p>
            Hello my name is Taro. I'm a full stack developer living in Tokyo Japan. I have had 3 years of experience
            working on software such as web systems, web application.Strong Knowledge with SQL,JavaScript,NodeJs,
            ReactJs and have knowledge about webpack, AWS services, Docker...vv for development webapp. I like reading,
            sports, travel and Japanese. If you are interested, contact me.
          </p>
          <ul>
            <li>
              <span>Name: Taro</span>
              <span>Age: 25years</span>
            </li>
            <li>
              <span>Phone: 070-6666-8888</span>
              <span>Address: Tokyo, Japan</span>
            </li>
            <li>
              <span>Experience: over 3years</span>
              <span>Position: Fullstack developer</span>
            </li>
            <li>
              <span>Skype: </span>
              <span>live:nguyenvancong4696_1</span>
            </li>
            <li>
              <span>Email: </span>
              <span>nguyenvancong4696@gmail.com</span>
            </li>
          </ul>
          <Button size="small" variant="contained" color="primary" onClick={handleDownloadCV}>
            Download CV
          </Button>
        </div>
      </div>
    </div>
  )
}

export default About
