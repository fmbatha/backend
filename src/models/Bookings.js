module.exports = (sequelize, DataTypes) => {
    const Bookings = sequelize.define("Bookings", {


      host_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      guest_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
      start_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      end_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      guest: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      
      total_night: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      per_night: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },

      custom_price_dates: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
      base_price: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },

      cleaning_charge: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      guest_charge: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },

      service_charge: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      security_money: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      host_fee: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      total: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },

      booking_type: {
        type: DataTypes.ENUM('request','instant'),
        allowNull: true,
      },
      currency_code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cancellation: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      transaction_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      payment_method_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      accepted_at: {
        type: DataTypes.DATE(6),
        allowNull: true,
      },
      expired_at: {
        type: DataTypes.DATE(6),
        allowNull: true,
      },
      declined_at: {
        type: DataTypes.DATE(6),
        allowNull: true,
      },
      cancelled_at: {
        type: DataTypes.DATE(6),
        allowNull: true,
      },
      added_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      confirm_arrival_status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      deleted_status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      
    });
  
    Bookings.associate = (models) => {

      Bookings.hasOne(models.Payments, { foreignKey: "BookingId" }) // If only one portfolio per user

      models.Payments.belongsTo(Bookings);

      Bookings.hasMany(models.Messages, { foreignKey: "booking_id" }) // If only one portfolio per user

      models.Messages.belongsTo(Bookings);

      Bookings.hasMany(models.Reviews, { foreignKey: "booking_id" }) // If only one portfolio per user

      models.Reviews.belongsTo(Bookings);

      Bookings.hasMany(models.Payouts, { foreignKey: "BookingId" }) // If only one portfolio per user

      models.Payouts.belongsTo(Bookings);


     

    }
  
    return Bookings;
  };
  