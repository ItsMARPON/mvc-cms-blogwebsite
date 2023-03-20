const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    post_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "blog",
  }
);

module.exports = Blog;
