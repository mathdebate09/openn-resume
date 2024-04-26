import React from 'react'

export default function WorkDisplay({ education }, { key }) {

    return (
        <>
            <p>{education.startDate} - {education.endDate}</p>
            <p>{education.course}</p>
            <p>{'('+education.grade+')'}</p>
        </>
    );
}
