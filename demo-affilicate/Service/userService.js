const User = require("../models/user");
const models = require("../models");
const { response } = require("../helper/response");
const { post } = require("../routes/user");
const { sequelize } = require("../models");




const addUser = async (body) => { 
    try { 
        const create = await models.User.create(body);
        return response("success",create);
    }catch(error) { 
        throw error;
    }
}

const findFather = async (id) => { 
    try { 
        const father = await models.User.findOne({ 
            where: {id : id},
        });
        return response("success", father);
    } catch(error) { 
        throw error;
    }
}
const updateUser = async(id,mark) =>{ 
    try { 
        const sql = `Update Users set point = point+${mark} where id = ${id}`;
        const update = await sequelize.query(sql);
        return response("success",update);
    }catch(error) { 
        throw error;
    }
}

module.exports = { 
    findFather,
    addUser,
    updateUser,
}