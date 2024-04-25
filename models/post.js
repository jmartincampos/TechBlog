const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/index');

const Post = sequelize.define('Post', {
    // Define post attributes (e.g., title, content, userId)
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    // userId can be a foreign key to associate the post with its creator
    // For simplicity, assuming each post belongs to a single user
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

// Define any associations or additional methods here

module.exports = Post;
