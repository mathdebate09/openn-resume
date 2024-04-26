import React from 'react'

//importing images
import resetImg from '../assets/icons/reset.svg'
import deleteImg from '../assets/icons/delete.svg'

export default function SkillsInput({ skill, skillList, setSkillList }) {
    
    //handler functions
    function handlePositionChange(e) {
        let updatedSkill = { ...skill, position: e.target.value };

        let updatedSkillList = skillList.map(everySkill =>
            everySkill.id === updatedSkill.id ? updatedSkill : everySkill
        );

        setSkillList(updatedSkillList);
    }

    function handleTechstackChange(e) {
        let updatedSkill = { ...skill, techstack: e.target.value };

        let updatedSkillList = skillList.map(everySkill =>
            everySkill.id === updatedSkill.id ? updatedSkill : everySkill
        );

        setSkillList(updatedSkillList);
    }

    function handleReset() {
      let updatedSkill = {
        ...skill,
        position: '',
        techstack: ''
      };
  
      let updatedSkillList = skillList.map(everySkill =>
        everySkill.id === updatedSkill.id ? updatedSkill : everySkill
      );
  
      setSkillList(updatedSkillList);
    }
  
    function handleDelete() {
      let updatedSkillList = skillList.filter(everySkill =>
        everySkill.id !== skill.id
      );
  
      setSkillList(updatedSkillList);
    }

    return (
        <>
          <div className="input-bts">
            <img src={resetImg} onClick={handleReset}></img>
            <img src={deleteImg} onClick={handleDelete}></img>
          </div>
          <form onSubmit={e => e.preventDefault()}>
            <input
              placeholder="Position"
              value={skill.position}
              onChange={handlePositionChange}
            />
            <input
              placeholder="Technologies"
              value={skill.techstack}
              onChange={handleTechstackChange}
            />
          </form>
        </>
      );
}