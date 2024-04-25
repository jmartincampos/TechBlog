const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/index');

const User = sequelize.define('User', {
    // Define user attributes (e.g., username, email, password)
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Define any associations or additional methods here

module.exports = User;
