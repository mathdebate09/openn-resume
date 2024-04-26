import { useState } from 'react'
import React from 'react'
import { v4 as uuid } from 'uuid'

import './styles/App.css'
import { Work, Education, Skills, Project } from './utils/appClasses'

import WorkInput from './components/workInput'
import WorkDisplay from './components/workDisplay'
import HeadingInput from './components/headingInput'
import HeadingDisplay from './components/headingDisplay'
import EducationInput from './components/educationInput'
import EducationDisplay from './components/educationDisplay';
import SkillsInput from './components/skillsInput'
import SkillsDisplay from './components/skillsDisplay';

function App() {
    const [skillList, setSkillList] = useState([new Skills(uuid()), new Skills(uuid())]);

    const arrSkillsInput = skillList.map(skill => (
        <SkillsInput
            skill={skill}
            skillList={skillList}
            setSkillList={setSkillList}
            key={skill.id}
        />
    ))

    const arrSkillsDisplay = skillList.map(skill => (
        <li key={skill.id}>
            <SkillsDisplay
                skill={skill}
            />
        </li>
    ))

    return (
        <>
            {arrSkillsInput}
            <ul>
                {arrSkillsDisplay}
            </ul>
        </>
    );
}

export default App
