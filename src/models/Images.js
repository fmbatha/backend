module.exports = (sequelize, DataTypes) => {
    const Images = sequelize.define("Images", {

      
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
        allowNull: true,
      },

      serial: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      
     
    });
  
    return Images;
  };
  