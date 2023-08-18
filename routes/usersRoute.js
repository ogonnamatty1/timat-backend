const mongoose = require('mongoose');
const express = require("express")
const router = express.Router();
const  users = require('../controllers/userController');

router.post('/', users.creatUsers );
router.get('/', users.getUsers)

module.exports = router;

