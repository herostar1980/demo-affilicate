const express = require('express');
const models = require("../models");
const usersController = require('../controllers/user.controller');
const {updateUser, findFather, addUser} = require("../Service/userService")
const user = require('../models/user');

const router = express.Router();

// router.get("/", usersController.index);
router.post("/", async (req, res) => { 
    try { 
        const user = { 
            name: req.body.name,
            father: req.body.father,
            point: 100,
        }
         const SaveUser = await addUser(user);
        var id =  SaveUser.data.dataValues.father;
        if(id) {
        for(let i =0; i<= 4; i++) { 
            const father = await findFather(id);
            if(father.data != null ) { 
                if(i == 1 ) { 
                    var updateFather1 = await updateUser(id, 30);
                    id = father.data.dataValues.father;
                }
                else if(i == 2 ) { 
                    var updateFather2 = await updateUser(id, 20);
                    id = father.data.dataValues.father;
                }
                else if(i == 3 ) { 
                    var updateFather3 = await updateUser(id, 10);
                    id = father.data.dataValues.father;
                }
            }
        }
        }
        res.status(201).json({ 
            message: "success",
            user1 : SaveUser.data,
            user2: updateFather1,
            user3: updateFather2,
            user4: updateFather3
        })

    }
    catch(error) { 
        throw new Error("Lỗi");
    }
})

module.exports = router;