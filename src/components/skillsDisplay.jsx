import React from 'react'

export default function SkillsDisplay({ skill }) {

    return (
        <>
            <p>{skill.position}</p>
            <p>{skill.techstack}</p>
        </>
    );
}