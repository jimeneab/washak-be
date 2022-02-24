const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')

router.post('/singin', async (req, res) => {

    try {
        let token = await auth.singIn(req.body)

        res.json({
            success: true,
            message: 'User loggen In',
            data: {
                token: token
            }
        })     
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})

router.post('/singup', async (req, res) => {
    try {
        let newUser = await auth.signUp(req.body)
        res.json(newUser)
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router;