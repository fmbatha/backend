module.exports = (sequelize, DataTypes) => {
    const Payments = sequelize.define("Payments", {


     
      payment_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      added_by: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      
      payment_method_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      payment_amount: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },

      fee: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },

      notes: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      
      company: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      attachment: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
      payment_method_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
     
    });
  
    // Users.associate = (models) => {
    //   Users.hasMany(models.Likes, {
    //     onDelete: "cascade",
    //   });
    // };
  
    return Payments;
  };
  