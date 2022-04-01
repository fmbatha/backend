module.exports = (sequelize, DataTypes) => {
    const PropertyPhoto = sequelize.define("PropertyPhoto", {

      
      photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cover_photo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      serial: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
     
    });
  
    return PropertyPhoto;
  };
  