import { useState } from 'react'
import React from 'react'
import {v4 as uuid} from 'uuid'

import './styles/App.css'
import { Work, Education, Skills, Project} from './utils/appClasses'

import WorkInput from './components/workInput'
import WorkDisplay from './components/workDisplay'
import HeadingInput from './components/headingInput'
import HeadingDisplay from './components/headingDisplay'
import EducationInput from './components/educationInput'
import EducationDisplay from './components/educationDisplay';

function App() {
  const [educationList, setEducationList] = useState([new Education(uuid())]);
  
    const arrEducationInputs = educationList.map(education => (
      <EducationInput
        education={education}
        educationList={educationList}
        setEducationList={setEducationList}
        key={education.id}
      />
    ))
  
    const arrEducationDisplay = educationList.map(education => (
      <EducationDisplay
        education={education}
        key={education.id}
      />
    ))
  
    return (
      <>
      {arrEducationInputs}
      {arrEducationDisplay}
      </>
    )
}

export default App
