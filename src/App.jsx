import { useState } from 'react'
import React from 'react'
import {v4 as uuid} from 'uuid'

import './styles/App.css'
import { Work,  } from './utils/appClasses'

import WorkInput from './components/workInput'
import WorkDisplay from './components/workDisplay'
import HeadingInput from './components/headingInput'
import HeadingDisplay from './components/headingDisplay'


function App() {
  const [name, setName] = useState('');
  const [socialLinks, setSocialLinks] = useState(['','','','','']);

  return(
    <>
    <HeadingInput 
      name={name}
      setName={setName}
      socialLinks={socialLinks}
      setSocialLinks={setSocialLinks}
    />
    <HeadingDisplay
      name={name}
      socialLinks={socialLinks}
    />
    </>
  );
}

export default App
