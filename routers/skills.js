const router = require("express").Router();
const Skill = require("../models/skill");


router.post('/add-skills', async (req, res) => {
    try {
        const { id, tech, year, month } = req.body;
        console.log('post method', id)
        if (id) {
            console.log('Inside update condition')
            await Skill.findByIdAndUpdate(id,{
                tech: tech,
                year: year,
                month: month
            })
            res.status(200).json({ message: "Skill update successfully",type:"update", id : id })
        } else {
            console.log('Inside Create condition')
            const newSkill = new Skill({ tech: tech, year: year, month: month })
            await newSkill.save();
            res.status(200).json({ message: "Skill added successfully",type:"create" ,data:newSkill})
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" });
    }
})

router.get('/get-skills', async (req, res) => {
    try {
        // const { id } = req.body;
        const skill = await Skill.find();
        return res.json({
            status: "Success",
            data: skill
        });

        res.status(200).json({ message: "Skill added successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" });
    }
})

module.exports = router;