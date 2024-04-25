import { useState } from 'react'
import React from 'react'

export default function WorkDisplay({ workActivity }) {

    return (
        <>
            <h1>{workActivity.designation}</h1>
            <p>{workActivity.startDate}</p>
            <p>{workActivity.endDate}</p>
            <p>{workActivity.description}</p>
        </>
    );
}
