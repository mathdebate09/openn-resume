import React from 'react'

export default function WorkInput({ workActivity, workActivities, setWorkActivities }) {

  //handlers functions
  function handleDesignationChange(e) {
    let updatedWorkActivity = { ...workActivity, designation: e.target.value };

    let updatedWorkActivities = workActivities.map(activity =>
      activity.id === updatedWorkActivity.id ? updatedWorkActivity : activity
    );

    setWorkActivities(updatedWorkActivities);
  }

  function handleStartChange(e) {
    let updatedWorkActivity = { ...workActivity, startDate: e.target.value };

    let updatedWorkActivities = workActivities.map(activity =>
      activity.id === updatedWorkActivity.id ? updatedWorkActivity : activity
    );

    setWorkActivities(updatedWorkActivities);
  }

  function handleEndChange(e) {
    let updatedWorkActivity = { ...workActivity, endDate: e.target.value };

    let updatedWorkActivities = workActivities.map(activity =>
      activity.id === updatedWorkActivity.id ? updatedWorkActivity : activity
    );

    setWorkActivities(updatedWorkActivities);
  }

  function handleDescriptionChange(e) {
    let updatedWorkActivity = { ...workActivity, description: e.target.value };

    let updatedWorkActivities = workActivities.map(activity =>
      activity.id === updatedWorkActivity.id ? updatedWorkActivity : activity
    );

    setWorkActivities(updatedWorkActivities);
  };

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="Designation"
          value={workActivity.designation}
          onChange={handleDesignationChange}
        />
        <input
          placeholder="Start"
          value={workActivity.startDate}
          onChange={handleStartChange}
        />
        <input
          placeholder="End"
          value={workActivity.endDate}
          onChange={handleEndChange}
        />
        <textarea
          placeholder="Description"
          value={workActivity.description}
          onChange={handleDescriptionChange}
        />
      </form>
    </>
  );
}
