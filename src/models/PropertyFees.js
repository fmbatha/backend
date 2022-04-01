module.exports = (sequelize, DataTypes) => {
    const PropertyFees = sequelize.define("Property_Fee", {

    
    
      cleaning_fee: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      guest_after: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      guest_fee: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      security_fee: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      weekend_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      weekly_discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      monthly_discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      currency_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
 
     
    });
  
    return PropertyFees;
  };
  