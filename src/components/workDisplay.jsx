import { useState } from 'react'
import React from 'react'

export default function WorkDisplay({ workActivity }, { key }) {

    return (
        <>
            <h1>{workActivity.designation}</h1>
            <p>{workActivity.startDate} - {workActivity.endDate}</p>
            <p>{workActivity.description}</p>
        </>
    );
}
