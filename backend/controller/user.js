const bycrypt = require('bcrypt');
const { User } = require('../models/user');
const JWT = require('jsonwebtoken');
const { sequelize } = require('../db_connect');

const bcrypt_salt = 10;

exports.signup = async (req , res ) => {
    const { user , email , password } = req.body;
    try {
        const hashedPassword = await bycrypt.hash( password , bcrypt_salt );
        const newUser = await User.create({ 
            user , 
            email , 
            password : hashedPassword });

        const token = JWT.sign({id : newUser.id}, process.env.JWT_SECRET, 
            { expiresIn: '1hr'});
        return res.status(201).json({message : 'User Registered Successfully', token});
    } catch (error) { 
        return res.status(500).json({error: 'Registration Failed'}); 
    }
};

exports.confirmDbConnection = async (req, res) => {
    let msg = '';
    try {
        await sequelize.authenticate();
        msg = 'Connected Successfully';
        return res.status(200).json(msg);
    } catch (error) {
        return res.status(500).json(error);
    }
};