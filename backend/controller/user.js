//const bycrypt = require('bcrypt');
//const { user } = require('../models/user');
//const JWT = require('jsonwebtoken');
const { sequelize } = require('../db_connect');

//const bcrypt_salt = 10;

exports.dbConnection = async (req, res) => {
    let msg = ''
    try {
        await sequelize.authenticate();
         msg = 'Connected Successfully';
        return res.status(200).json(msg);
    } catch (error) {
        return res.status(500).json(error);
    }
};