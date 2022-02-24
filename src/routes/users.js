const express = require('express');
const { verifyToken, isAdmin } = require('../middlewares/verify');
const router = express.Router()

const usersService = require('../services/users')

router.get('/', async (req, res) => {
    let users = await usersService.getAll()
    return res.json(users)
})

router.get('/:id', async (req, res) => {
    let id = req.params
    let user = await usersService.getUserById(id)
    return res.json(user)
})

router.put('/:id', async (req, res) => {
    let updatedUser = await usersService.updateUser(req)
    return res.json(updatedUser)
})

router.delete('/:id', async (req, res) => {
    let deletedUser = await usersService.deleteUser(req)
    return res.json(deletedUser)
})

module.exports = router;