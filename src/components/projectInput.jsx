import React from 'react'

//importing images
import resetImg from '../assets/icons/reset.svg'
import deleteImg from '../assets/icons/delete.svg'

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

  function handleReset() {
    let updatedProjectActivity = {
      ...projectActivity,
      title: '',
      url: '',
      description: ''
    };

    let updatedProjectActivities = projectActivities.map(activity =>
      activity.id === updatedProjectActivity.id ? updatedProjectActivity : activity
    );

    setProjectActivities(updatedProjectActivities);
  }

  function handleDelete() {
    let updatedProjectActivities = projectActivities.filter(activity =>
      activity.id !== projectActivity.id
    );

    setProjectActivities(updatedProjectActivities);
  }

  return (
    <>
      <div className="input-bts">
        <img src={resetImg} onClick={handleReset}></img>
        <img src={deleteImg} onClick={handleDelete}></img>
      </div>
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
