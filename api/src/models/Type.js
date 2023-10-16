const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('type', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
  },{
    timestamps: false,
  });
};
