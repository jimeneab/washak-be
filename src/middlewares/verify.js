const jwt = require("jsonwebtoken")
const secret = require('../config')
const User = require('../models/users')
const Role = require('../models/roles')


module.exports = {
    verifyToken(req,res,next){
        const token = req.headers.authorization

        if (!token){
            res.status(401)
            res.json({
               success:false,
               message: 'Token required'        
            })
            return
        }
       
        const payloadDecoded = jwt.verify(token, secret.SECRET)
       
        if (!payloadDecoded){
            res.json({
                success:false,
                message: 'Invalid token'
            })
            return
        }
       
        next()},

     async isAdmin(req,res,next){
        try {
            const token = req.headers.authorization
            const payloadDecoded = jwt.verify(token, secret.SECRET)
            const userId = payloadDecoded.id
            const userLogged = await User.findById(userId)
            const userRole = await Role.findById(userLogged.role)
            
            if (userRole.name !== 'admin'){
                throw new Error('Not authorizated')
            }else{
                next()
            }
            
        } catch (error) {
         res.json({
             success:false,
             message: error.message
         })    
        }        
    },
    async isUser(req,res,next){
        try {
            const token = req.headers.authorization
            const payloadDecoded = jwt.verify(token, secret.SECRET)
            const userId = payloadDecoded.id
            const userLogged = await User.findById(userId)
            const userRole = await Role.findById(userLogged.role)
            
            if (userRole.name !== 'user'){
                throw new Error('Not authorizated')
            }else{
                next()
            }
            
        } catch (error) {
         res.json({
             success:false,
             message: error.message
         })    
        }     
    },
    async isSuperUser(req,res,next){
        try {
            const token = req.headers.authorization
            const payloadDecoded = jwt.verify(token, secret.SECRET)
            const userId = payloadDecoded.id
            const userLogged = await User.findById(userId)
            const userRole = await Role.findById(userLogged.role)
            
            if (userRole.name !== 'superUser'){
                throw new Error('Not authorizated')
            }else{
                next()
            }
            
        } catch (error) {
         res.json({
             success:false,
             message: error.message
         })    
        }     
    }
}