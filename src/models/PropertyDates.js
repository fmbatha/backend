module.exports = (sequelize, DataTypes) => {
  const PropertyDates = sequelize.define("PropertyDates", {


status: {
  type: DataTypes.STRING,
  allowNull: true,
},

 date: {
  type: DataTypes.DATE,
  allowNull: true,
},


price: {
  type: DataTypes.INTEGER,
  allowNull: true,
},

color: {
  type: DataTypes.STRING,
  allowNull: true,
},

type: {
  type: DataTypes.STRING,
  allowNull: true,
},

});


return PropertyDates;
  };
  
