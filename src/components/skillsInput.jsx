import React from 'react'

export default function SkillsInput({ skill, skillList, setSkillList }, { key }) {
    
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

    return (
        <>
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