const skills = [
    { skill: 'JavaScript', type: 'Coding', proficiency: '4' },
    { skill: 'CSS', type: 'Coding', proficiency: '4' },
    { skill: 'Python', type: 'Coding', proficiency: '1' },
    { skill: 'HTML', type: 'Coding', proficiency: '5' },
    { skill: 'MongoDB', type: 'Coding', proficiency: '1' },
    { skill: 'Express', type: 'Coding', proficiency: '1' },
    { skill: 'Communication', type: 'Life', proficiency: '2' },
    { skill: 'Socializing', type: 'Life', proficiency: '1' },
];

function listSkills() {
    return skills;
}

function findSkillById(id) {
    return skills[id];
}

function addSkill(skill) {
    skills.push(skill);
}

function removeSkill(id) {
    skills.splice(id, 1);
}

function modifySkill(id, skill) {
    skills[id] = skill;
}

module.exports = {
    listSkills,
    findSkillById,
    addSkill, 
    removeSkill,
    modifySkill,
};
