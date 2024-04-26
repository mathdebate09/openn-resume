import { useState } from 'react'
import React from 'react'
import { v4 as uuid } from 'uuid'

import './styles/App.css'
import { Work, Education, Skills, Project } from './utils/appClasses'

import HeadingInput from './components/headingInput'
import HeadingDisplay from './components/headingDisplay'
import EducationInput from './components/educationInput'
import EducationDisplay from './components/educationDisplay';
import WorkInput from './components/workInput'
import WorkDisplay from './components/workDisplay'
import SkillsInput from './components/skillsInput'
import SkillsDisplay from './components/skillsDisplay';
import ProjectInput from './components/projectInput';
import ProjectDisplay from './components/projectDisplay';

function App() {
  
    const [projectActivities, setProjectActivities] = useState([new Project(uuid())]);

    const arrInputs = projectActivities.map(activity => (
        <ProjectInput
            projectActivity={activity}
            projectActivities={projectActivities}
            setProjectActivities={setProjectActivities}
            key={activity.id}
        />
    ))

    const arrDisplay = projectActivities.map(activity => (
        <ProjectDisplay
            projectActivity={activity}
            key={activity.id}
        />
    ))
  
    return (
      <>
      {arrInputs}
      {arrDisplay}
      </>
    )
  }

export default App
