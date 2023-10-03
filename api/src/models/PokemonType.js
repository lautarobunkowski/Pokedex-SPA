const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('pokemonType', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
    },
    type: {
      type: DataTypes.ENUM(
        'Normal', 
        'Fighting', 
        'Flying', 
        'Poison', 
        'Ground', 
        'Rock', 
        'Bug', 
        'Ghost', 
        'Steel', 
        'Fire', 
        'Water', 
        'Grass', 
        'Electric', 
        'Psychic', 
        'Ice', 
        'Dragon', 
        'Dark', 
        'Fairy', 
        'Unknown', 
        'Shadow'),
      allowNull: false,
    },
  },{
    timestamps: false,
  });
};
