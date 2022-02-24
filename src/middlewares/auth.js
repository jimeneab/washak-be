const users = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt =  require(`jsonwebtoken`)
const secret = require('../config')

module.exports = {

   async singIn(data){
        let { email, password } = data
        const userFound = await users.findOne({ email })
        
        if(!userFound) throw new Error('Invalid Data')

        const isPasswordValid = await bcrypt.compare(password, userFound.password)

        if(!isPasswordValid) throw  new Error('Invalid Data')

        const token = jwt.sign({ id: userFound._id }, secret.SECRET)
        
        return token
    },

    async signUp(data){
        let { name, email, role, password } = data
        let encryptedPassword = await bcrypt.hash(password, 10)
        let newUser = await users.create({
            name,
            email,
            role,
            password: encryptedPassword
        })
        return newUser
    }
}