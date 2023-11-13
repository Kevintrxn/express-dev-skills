const Skill = require('../models/skills');

function index(req, res) {
    res.render('skills/index', { skills: Skill.listSkills() });
}

function show(req, res) {
    const skill = Skill.findSkillById(req.params.id);
    if (skill) {
        res.render('skills/show', { skill });
    } else {
        res.redirect('/skills');
    }
}

function newSkill(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    Skill.addSkill(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.removeSkill(req.params.id);
    res.redirect('/skills');
}

function edit(req, res) {
    const skill = Skill.findSkillById(req.params.id);
    if (skill) {
        res.render('skills/edit', { skill, id: req.params.id });
    } else {
        res.redirect('/skills');
    }
}


function update(req, res) {
    Skill.modifySkill(req.params.id, req.body);
    res.redirect('/skills');
}

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};
