import { useState } from 'react'
import React from 'react'

export default function WorkDisplay({ workActivity }) {

    return (
        <>
            <h3>{workActivity.designation}</h3>
            <p>{workActivity.startDate} - {workActivity.endDate}</p>
            <p>{workActivity.description}</p>
        </>
    );
}
