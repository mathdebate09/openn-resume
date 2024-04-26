import { useState } from 'react'
import React from 'react'
import { v4 as uuid } from 'uuid'

import './styles/App.css'
import { Work, Education, Skills, Project } from './utils/appClasses'

//Componenets
import HeadingInput from './components/headingInput'
import HeadingDisplay from './components/headingDisplay'
import EducationInput from './components/educationInput'
import EducationDisplay from './components/educationDisplay'
import WorkInput from './components/workInput'
import WorkDisplay from './components/workDisplay'
import SkillsInput from './components/skillsInput'
import SkillsDisplay from './components/skillsDisplay'
import ProjectInput from './components/projectInput'
import ProjectDisplay from './components/projectDisplay'

//Images
import personImg from './assets/icons/personal-details.svg'
import educationImg from './assets/icons/education.svg'
import workImg from './assets/icons/work.svg'
import skillsImg from './assets/icons/skills.svg'
import projectImg from './assets/icons/projects.svg'

function App() {
  //states
  const [name, setName] = useState('')
  const [socialLinks, setSocialLinks] = useState(['', '', '', '', ''])

  const [educationList, setEducationList] = useState([new Education(uuid())])

  const [workActivities, setWorkActivities] = useState([new Work(uuid())])

  const [skillList, setSkillList] = useState([new Skills(uuid())])

  const [projectActivities, setProjectActivities] = useState([new Project(uuid())])



  //Input arrays
  const arrEducationInputs = educationList.map(education => (
    <EducationInput
      education={education}
      educationList={educationList}
      setEducationList={setEducationList}
      key={education.id}
    />
  ))

  const arrWorkInputs = workActivities.map(activity => (
    <WorkInput
      workActivity={activity}
      workActivities={workActivities}
      setWorkActivities={setWorkActivities}
      key={activity.id}
    />
  ))

  const arrSkillsInputs = skillList.map(skill => (
    <SkillsInput
      skill={skill}
      skillList={skillList}
      setSkillList={setSkillList}
      key={skill.id}
    />
  ))

  const arrProjectInputs = projectActivities.map(activity => (
    <ProjectInput
      projectActivity={activity}
      projectActivities={projectActivities}
      setProjectActivities={setProjectActivities}
      key={activity.id}
    />
  ))

  //Display arrays
  const arrEducationDisplay = educationList.map(education => (
    <EducationDisplay
      education={education}
      key={education.id}
    />
  ))

  const arrWorkDisplay = workActivities.map(activity => (
    <WorkDisplay
      workActivity={activity}
      key={activity.id}
    />
  ))

  const arrSkillsDisplay = skillList.map(skill => (
    <SkillsDisplay
      skill={skill}
      key={skill.id}
    />
  ))

  const arrProjectsDisplay = projectActivities.map(activity => (
    <ProjectDisplay
      projectActivity={activity}
      key={activity.id}
    />
  ))

  return (
    <div className="main-container">
      <div className="input-div">
        <div className="personal-input">
          <h2 className="input-heading"><img src={personImg}></img>Personal Details</h2>
          <HeadingInput
            name={name}
            setName={setName}
            socialLinks={socialLinks}
            setSocialLinks={setSocialLinks}
          />
        </div>
        <div className="education-input">
          <h2 className="input-heading"><img src={educationImg}></img>Education</h2>
          {arrEducationInputs}
        </div>
        <div className="work-input">
          <h2 className="input-heading"><img src={workImg}></img>Work Experience</h2>
          {arrWorkInputs}
        </div>
        <div className="skill-input">
          <h2 className="input-heading"><img src={skillsImg}></img>Skils</h2>
          {arrSkillsInputs}
        </div>
        <div className="project-input">
          <h2 className="input-heading"><img src={projectImg}></img>Projects</h2>
          {arrProjectInputs}
        </div>
      </div>
      <div className="display-div">
        <div className="resume-page">
          <div className="personal-display">
            <HeadingDisplay
              name={name}
              socialLinks={socialLinks}
            />
          </div>
          <div className="education-display">
            <h2><span>E</span>ducation</h2>
            {arrEducationDisplay}
          </div>
          <div className="work-display">
            <h2><span>W</span>ork</h2>
            {arrWorkDisplay}
          </div>
          <div className="skill-display">
            <h2><span>S</span>kills</h2>
            {arrSkillsDisplay}
          </div>
          <div className="project-display">
            <h2><span>P</span>roject</h2>
            {arrProjectsDisplay}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
