const {User} = require("../models/authModel")
const { hashPassword, comparePassword } = require("../helpers/hashHelper")
const jwt = require("jsonwebtoken")