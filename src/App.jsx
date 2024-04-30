import { useState } from 'react'
import React from 'react'
import { v4 as uuid } from 'uuid'

import './styles/App.css'
import './styles/App-responsive.css'
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
import Footer from './components/footer'

//Images
import personImg from './assets/icons/personal-details.svg'
import educationImg from './assets/icons/education.svg'
import workImg from './assets/icons/work.svg'
import skillsImg from './assets/icons/skills.svg'
import projectImg from './assets/icons/projects.svg'
import pdfImg from './assets/icons/pdf.svg'

import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

export default function App() {
  //states
  const [name, setName] = useState('Your Name')
  const [socialLinks, setSocialLinks] = useState(['username', 'username', 'mysite.com', 'email@mysite.com', '+ 00.0000.000'])

  const [educationList, setEducationList] = useState([{ startDate: '2030', endDate: 'present', course: 'PhD (Subject) at University', grade: 'GPA: 4.0/4.0', id: uuid() }, { startDate: '2023', endDate: '2027', course: 'Bachelor’s Degree at College', grade: 'GPA: 4.0/4.0', id: uuid() }, { startDate: '2022', endDate: '2021', course: 'Class 12th Some Board', grade: 'Grade', id: uuid() }, { startDate: '2021', endDate: '2020', course: 'Class 10th Some Board', grade: 'Grade', id: uuid() }]);

  const [workActivities, setWorkActivities] = useState([{ designation: 'Designation', startDate: 'Jan 2021', endDate: 'present', description: 'long long line of blah blah that will wrap when the table fills the column width long long line of blah blah that will wrap when the table fills the column width long long line of blah blah that will wrap when the table fills the column width long long line of blah blah that will wrap when the table fills the column width', id: uuid() }, { designation: 'Designation', startDate: 'Mar 2019', endDate: 'Jan 2021', description: 'long long line of blah blah that will wrap when the table fills the column width again, long long line of blah blah that will wrap when the table fills the column width but this time even more long long line of blah blah. again, long long line of blah blah that will wrap when the table fills the column width but this time even more long long line of blah blah', id: uuid() }]);

  const [skillList, setSkillList] = useState([{ position: 'Some Skills', techstack: 'This, That, Some of this and that etc.', id: uuid() }, { position: 'Some More Skills', techstack: ' Also some more of this, Some more that, And some of this and that etc.', id: uuid() }]);

  const [projectActivities, setProjectActivities] = useState([{ title: 'Some Project', url: 'something.com', description: 'long long line of blah blah that will wrap when the table fills the column width again, long long line of blah blah that will wrap when the table fills the column width but this time even more long long line of blah blah. again, long long line of blah blah that will wrap when the table fills the column width but this time even more long long line of blah blah', id: uuid() }]);

  const [isVisible, setIsVisible] = useState([false, false, false, false, false]);

  function toggleVisibility(index) {
    let updatedToggleArr = [...isVisible]
    updatedToggleArr[index] = !updatedToggleArr[index]
    setIsVisible(updatedToggleArr);
  }


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
    const resumeTitle = document.querySelector(".resume-page h1");
    const socialLinksTexts = document.querySelectorAll(".social-links span");
    const resumeH2s = document.querySelectorAll(".resume-page h2");

    const scaledElement = document.querySelector('.display-div');
    const oldTransform = scaledElement.style.transform;
    scaledElement.style.transform = 'none';


    resumeTitle.style.paddingBottom = '20px';
    socialLinksTexts.forEach(el => el.style.paddingBottom = '18px');
    resumeH2s.forEach(el => el.style.paddingBottom = '8px');

    const htmlContent = document.querySelector(".html-content");

    const HTML_Width = htmlContent.offsetWidth;
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
      pdf.save(`${name} CV.pdf`);
    });

    resumeTitle.style.paddingBottom = '';
    socialLinksTexts.forEach(el => el.style.paddingBottom = '');
    resumeH2s.forEach(el => el.style.paddingBottom = '');
    scaledElement.style.transform = oldTransform;
  }



  return (
    <>
      <div className="main-container">
        <header className="primary-header" onClick={() => window.location.reload()}>OpennRésumé</header>
        <section className="input-div">
          <button onClick={getPDF}><img src={pdfImg} alt="Adobe for PDF"></img>Download</button>
          <div className="personal-input">
            <h2 className="input-heading" onClick={() => toggleVisibility(0)}><img src={personImg} alt="personal details"></img>Personal Details</h2>
            {isVisible[0] && (
              <HeadingInput
                name={name}
                setName={setName}
                socialLinks={socialLinks}
                setSocialLinks={setSocialLinks}
              />
            )}
          </div>
          <div className="education-input">
            <h2 className="input-heading" onClick={() => toggleVisibility(1)}>
              <img src={educationImg} alt="education"></img>Education
            </h2>
            {isVisible[1] && arrEducationInputs}
            {isVisible[1] &&<button onClick={handleAddEducation}>+ Add New</button>}
          </div>
          <div className="work-input">
            <h2 className="input-heading" onClick={() => toggleVisibility(2)}><img src={workImg} alt="work experience"></img>Work Experience</h2>
            {isVisible[2] && arrWorkInputs}
            {isVisible[2] &&<button onClick={handleAddWork}>+ Add New</button>}
          </div>
          <div className="skill-input">
            <h2 className="input-heading" onClick={() => toggleVisibility(3)}><img src={skillsImg} alt="skills" className="smaller-input-logo "></img>Skills</h2>
            {isVisible[3] && arrSkillsInputs}
            {isVisible[3] && <button onClick={handleAddSkills}>+ Add New</button>}
          </div>
          <div className="project-input">
            <h2 className="input-heading" onClick={() => toggleVisibility(4)}><img src={projectImg} alt="projects" className="smaller-input-logo "></img>Projects</h2>
            {isVisible[4] && arrProjectInputs}
            {isVisible[4] && <button onClick={handleAddProject}>+ Add New</button>}
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
        <Footer
          numOfHours={17}
        />
      </div>
    </>
  );
}