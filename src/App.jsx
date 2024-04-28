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
import pdfImg from './assets/icons/pdf.svg'

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {
  //states
  const [name, setName] = useState('Your Name')
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

  //Addition handlers
  function handleAddEducation() {
    let updatedEducationList = [...educationList];
    updatedEducationList.push(new Education(uuid()));
    setEducationList(updatedEducationList);
  }

  function handleAddWork() {
    let updatedWorkActivities = [...workActivities];
    updatedWorkActivities.push(new Work(uuid()));
    setWorkActivities(updatedWorkActivities);
  }

  function handleAddSkills() {
    let updatedSkillList = [...skillList];
    updatedSkillList.push(new Skills(uuid()));
    setSkillList(updatedSkillList);
  }

  function handleAddProject() {
    let updatedProjectActivities = [...projectActivities];
    updatedProjectActivities.push(new Project(uuid()));
    setProjectActivities(updatedProjectActivities);
  }

  //print pdf
  function getPDF() {
    const htmlContent = document.querySelector(".html-content");
    const HTML_Width = htmlContent.offsetWidth;
    const HTML_Height = htmlContent.offsetHeight;
    const top_left_margin = 15;
    const PDF_Width = HTML_Width + top_left_margin * 2;
    const PDF_Height = (PDF_Width * 1.4142);

    html2canvas(htmlContent, { allowTaint: true }).then(function (canvas) {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', top_left_margin, top_left_margin, pdfWidth, pdfHeight);
      pdf.save("HTML-Document.pdf");
    });
  }

  return (
    <div className="main-container">
      <header className="primary-header" onClick={() => window.location.reload()}>OpenRésumé</header>
      <section className="input-div">
        <button onClick={getPDF}><img src={pdfImg}></img>Download</button>
        <div className="personal-input">
          <h2 className="input-heading flex-row"><img src={personImg}></img>Personal Details</h2>
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
          <button onClick={handleAddEducation}>+ Add New</button>
        </div>
        <div className="work-input">
          <h2 className="input-heading"><img src={workImg}></img>Work Experience</h2>
          {arrWorkInputs}
          <button onClick={handleAddWork}>+ Add New</button>
        </div>
        <div className="skill-input">
          <h2 className="input-heading"><img src={skillsImg} className="smaller-input-logo "></img>Skills</h2>
          {arrSkillsInputs}
          <button onClick={handleAddSkills}>+ Add New</button>
        </div>
        <div className="project-input">
          <h2 className="input-heading"><img src={projectImg} className="smaller-input-logo "></img>Projects</h2>
          {arrProjectInputs}
          <button onClick={handleAddProject}>+ Add New</button>
        </div>
      </section>
      <section className="display-div">
        <div className="resume-page html-content">
          <div className="personal-display">
            <HeadingDisplay
              name={name}
              socialLinks={socialLinks}
            />
          </div>
          <div className="education-display">
            <h2><span>E</span>ducation</h2>
            <div className="education-children">
              {arrEducationDisplay}
            </div>
          </div>
          <div className="work-display">
            <h2><span>W</span>ork <span>E</span>xperience</h2>
            <div className="work-children">
              {arrWorkDisplay}
            </div>
          </div>
          <div className="skill-display">
            <h2><span>S</span>kills</h2>
            <div className="skill-children">
              {arrSkillsDisplay}
            </div>
          </div>
          <div className="project-display">
            <h2><span>P</span>rojects</h2>
            <div className="project-children">
              {arrProjectsDisplay}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App
