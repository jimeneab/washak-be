const express = require('express');
const router = express.Router()

const rolesService = require('../services/roles')

router.get('/', async (req,res) => {
    let allRoles = await rolesService.getAll()
    res.json(allRoles)
})

router.post('/', async (req,res) => {
    let newRol = await rolesService.create(req.body)
    res.json(newRol)
})

router.get('/:id', async (req, res) => {
    let rol = await rolesService.getById(req.params)
    res.json(rol)
})

module.exports = router;