const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model { };
Blog.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    create_at: {
        type: DataTypes.INTERGER,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTERGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
            },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }, 
    sequelize: {
        freeTableName: true,
        timestamps: true,
        createdAt: 'created_at',
        underscored: true,
        modelName: 'blog'
    },
});
    

    
    


module.exports = Blog;