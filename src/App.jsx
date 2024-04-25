import { useState } from 'react'
import React from 'react'
import './styles/App.css'
import WorkInput from './components/workInput'
import WorkDisplay from './components/workDisplay'
import {v4 as uuid} from 'uuid'
import {Activity} from './utils/appClasses'

function App() {
  
  const [workActivities, setWorkActivities] = useState([new Activity(uuid())]);

  return (
    <>
    <WorkInput 
      workActivity={workActivities[0]}
      workActivities={workActivities}
      setWorkActivities={setWorkActivities}
    />
    <WorkDisplay 
      workActivity={workActivities[0]}
    />
    </>
  )
}

export default App
