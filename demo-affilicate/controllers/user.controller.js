const models = require("../models");
const { response } = require("../helper/response");
const { addUser,findFather } = require("../Service/userService")

async function save(req,res) { 
    const user = {
         name: req.body.name,
         father: req.body.father,
         point: 100,
    }

    models.User.create(user).then(result => { 
        const abc = findFather(result.dataValues.father);
        console.log(abc);
        res.status(201).json({ 
            message: "Created User Successfully",
            user : abc,
        })
    }).catch(error => { 
        res.status(500).json({ 
            message: "Something Wrong",
            error : error,
        })
    })
    ;
}

module.exports = { 
    save: save,
}