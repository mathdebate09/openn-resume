import React from 'react'

export default function ProjectInput({ projectActivity, projectActivities, setProjectActivities }) {

  //handlers functions
  function handleTitleChange(e) {
    let updatedProjectActivity = { ...projectActivity, title: e.target.value };

    let updatedProjectActivities = projectActivities.map(activity =>
      activity.id === updatedProjectActivity.id ? updatedProjectActivity : activity
    );

    setProjectActivities(updatedProjectActivities);
  }

  function handleUrlChange(e) {
    let updatedProjectActivity = { ...projectActivity, url: e.target.value };

    let updatedProjectActivities = projectActivities.map(activity =>
      activity.id === updatedProjectActivity.id ? updatedProjectActivity : activity
    );

    setProjectActivities(updatedProjectActivities);
  }

  function handleDescriptionChange(e) {
    let updatedProjectActivity = { ...projectActivity, description: e.target.value };

    let updatedProjectActivities = projectActivities.map(activity =>
      activity.id === updatedProjectActivity.id ? updatedProjectActivity : activity
    );

    setProjectActivities(updatedProjectActivities);
  };

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="Title"
          value={projectActivity.title}
          onChange={handleTitleChange}
        />
        <input
          placeholder="Link"
          value={projectActivity.url}
          onChange={handleUrlChange}
        />
        <textarea
          placeholder="Description"
          value={projectActivity.description}
          onChange={handleDescriptionChange}
        />
      </form>
    </>
  );
}
