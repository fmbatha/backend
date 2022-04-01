module.exports = (sequelize, DataTypes) => {
    const Notifications = sequelize.define("Notifications", {

        message: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      }
     
    });
  

  
    return Notifications;
  };
  