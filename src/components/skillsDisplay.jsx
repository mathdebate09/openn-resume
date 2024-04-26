import React from 'react'

export default function SkillsDisplay({ skill }, { key }) {

    return (
        <>
            <p>{skill.position}</p>
            <p>{skill.techstack}</p>
        </>
    );
}