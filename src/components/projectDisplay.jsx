import React from 'react'

export default function ProjectDisplay({ projectActivity }) {

    return (
        <>
            <h3>{projectActivity.title}</h3>
            <a href={projectActivity.url.startsWith('http://') || projectActivity.url.startsWith('https://') ? projectActivity.url : `https://${projectActivity.url}`} target="_blank" >Link to Demo</a>
            <p>{projectActivity.description}</p>
        </>
    );
}