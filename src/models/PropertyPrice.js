module.exports = (sequelize, DataTypes) => {
    const PropertyPrice = sequelize.define("PropertyPrice", {

      cleaning_fee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      guest_after: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      guest_fee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      security_fee: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      weekend_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      weekly_discount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      monthly_discount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      currency_code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
     
    });
  
    return PropertyPrice;
  };
  