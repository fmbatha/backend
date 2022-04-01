module.exports = (sequelize, DataTypes) => {
    const Payouts = sequelize.define("Payouts", {
        
        user_type:{
            type: DataTypes.STRING
        },
        account:{
            type: DataTypes.STRING
        },
        amount:{
            type: DataTypes.DOUBLE
        },
        penalty_amount:{
            type: DataTypes.DOUBLE
        },
        status:{
            type: DataTypes.STRING
        },
        currency_code:{
            type: DataTypes.STRING
        },
     
    });
  
  
    return Payouts;
  };
  