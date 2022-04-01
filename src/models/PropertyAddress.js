module.exports = (sequelize, DataTypes) => {
    const PropertyAddress = sequelize.define("PropertyAddress", {

       
      address_line_1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address_line_2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      latitude: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      longitude: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      state: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      postal_code: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      prop_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
 
 
      
    });
  
    
    return PropertyAddress;
  };
  