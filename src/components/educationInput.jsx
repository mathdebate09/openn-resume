import React from 'react'

//importing images
import resetImg from '../assets/icons/reset.svg'
import deleteImg from '../assets/icons/delete.svg'

export default function EducationInput({ education, educationList, setEducationList }) {

  //handlers functions
  function handleStartChange(e) {
    let updatedEducation = { ...education, startDate: e.target.value };

    let updatedEducationList = educationList.map(everyEducation =>
      everyEducation.id === updatedEducation.id ? updatedEducation : everyEducation
    );

    setEducationList(updatedEducationList);
  }

  function handleEndChange(e) {
    let updatedEducation = { ...education, endDate: e.target.value };

    let updatedEducationList = educationList.map(everyEducation =>
      everyEducation.id === updatedEducation.id ? updatedEducation : everyEducation
    );

    setEducationList(updatedEducationList);
  }

  function handleCourseChange(e) {
    let updatedEducation = { ...education, course: e.target.value };

    let updatedEducationList = educationList.map(everyEducation =>
      everyEducation.id === updatedEducation.id ? updatedEducation : everyEducation
    );

    setEducationList(updatedEducationList);
  };

  function handleGradeChange(e) {
    let updatedEducation = { ...education, grade: e.target.value };

    let updatedEducationList = educationList.map(everyEducation =>
      everyEducation.id === updatedEducation.id ? updatedEducation : everyEducation
    );

    setEducationList(updatedEducationList);
  };

  function handleReset() {
    let updatedEducation = {
      ...education,
      startDate: '',
      endDate: '',
      course: '',
      grade: ''
    };

    let updatedEducationList = educationList.map(everyEducation =>
      everyEducation.id === updatedEducation.id ? updatedEducation : everyEducation
    );

    setEducationList(updatedEducationList);
  }

  function handleDelete() {
    let updatedEducationList = educationList.filter(everyEducation =>
      everyEducation.id !== education.id
    );

    setEducationList(updatedEducationList);
  }

  return (
    <>
      <div className="input-bts">
        <img src={resetImg} onClick={handleReset}></img>
        <img src={deleteImg} onClick={handleDelete}></img>
      </div>
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="Start"
          value={education.startDate}
          onChange={handleStartChange}
        />
        <input
          placeholder="End"
          value={education.endDate}
          onChange={handleEndChange}
        />
        <input
          placeholder="Course"
          value={education.course}
          onChange={handleCourseChange}
        />
        <input
          placeholder="Grade"
          value={education.grade}
          onChange={handleGradeChange}
        />
      </form>
    </>
  );
}
