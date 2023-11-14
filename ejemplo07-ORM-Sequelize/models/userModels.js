const {DataTypes} = require('sequelize');
const sequelize = require('../sequelize')

const User = sequelize.define('User' , {
    username : {
        type:DataTypes.STRING,
        allowNull:false,
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
});

module.exports= User;