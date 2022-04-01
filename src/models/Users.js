module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {

     username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
        first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      phone_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
 
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      state: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      profile_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
     Users.associate = (models) => {



      Users.hasMany(models.Bookings, { foreignKey: "user_id" }) // If only one portfolio per user

      models.Bookings.belongsTo(Users);
      

      Users.hasMany(models.Notifications, { foreignKey: "user_id" }) // If only one portfolio per user

      models.Notifications.belongsTo(Users);


      Users.hasMany(models.Messages, { foreignKey: "receiver_id" }) // If only one portfolio per user

      models.Messages.belongsTo(Users);


      Users.hasMany(models.FavoriteProperty, { foreignKey: "user_id" }) // If only one portfolio per user

      models.FavoriteProperty.belongsTo(Users);


      Users.hasMany(models.Reviews, { foreignKey: "sender_id" }) // If only one portfolio per user

      models.Reviews.belongsTo(Users);


      Users.hasMany(models.CleaningTasks, { foreignKey: "user_id" }) // If only one portfolio per user

      models.CleaningTasks.belongsTo(Users);


      Users.hasMany(models.Payments, { foreignKey: "user_id" }); // If only one portfolio per user

      models.Payments.belongsTo(Users);

      Users.hasMany(models.Payouts, { foreignKey: "UserId" }); // If only one portfolio per user

      models.Payouts.belongsTo(Users);



     

      Users.hasMany(models.Properties, {
        foreignKey: 'host_id'
      });
      models.Properties.belongsTo(Users);

     
     };
  
    return Users;
  };
  