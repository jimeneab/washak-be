const roles = require('../models/roles')

module.exports = {

    async getAll(){
        let allRoles = await roles.find()
        return allRoles
    },

    async create(data){
        let { name } = data
        let newRol = await roles.create({
            name
        })
        return newRol
    },

     async getById(id){
         let rol = await roles.findById(id.id)
        return rol
    }
}