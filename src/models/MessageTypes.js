module.exports = (sequelize, DataTypes) => {
    const MessageTypes = sequelize.define("MessageTypes", {

      
        name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          description: {
            type: DataTypes.STRING,
            allowNull: true,
          }

        });

    MessageTypes.associate = (models) => {


        MessageTypes.hasMany(models.Messages, { foreignKey: "type_id" }) // If only one portfolio per user

        models.Messages.belongsTo(MessageTypes);
  
  
       };




  

  
    return MessageTypes;
  };
  