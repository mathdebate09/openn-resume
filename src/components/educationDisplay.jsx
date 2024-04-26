import React from 'react'

export default function WorkDisplay({ education }) {

    return (
        <>
            <p>{education.startDate} - {education.endDate}</p>
            <p>{education.course}</p>
            <p>{'('+education.grade+')'}</p>
        </>
    );
}
