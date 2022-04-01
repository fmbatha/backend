module.exports = (sequelize, DataTypes) => {
    const Messages = sequelize.define("Messages", {

      

      message: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Read: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      archive: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      star: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      sender_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      }
     
 
     
    });
  
    return Messages;
  };
  