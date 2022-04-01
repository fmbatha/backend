module.exports = (sequelize, DataTypes) => {
    const Reviews = sequelize.define("Reviews", {


        receiver_id: {
            type: DataTypes.STRING,
            allowNull: true,
         },
      reviewer: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      secret_feedback: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      comments: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      improve_message: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      accuracy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      accuracy_message: {
        type: DataTypes.STRING,
        allowNull: true,
      }, 

      location: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      location_message: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      communication: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      communication_message: {
        type: DataTypes.STRING,
        allowNull: true,
      },
   
      checkin: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      checkin_message: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      cleanliness: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      cleanliness_message: {
        type: DataTypes.STRING,
        allowNull: true,
      },


      amenities: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      amenities_message: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      value: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      value_message: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      house_rules: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      recommend: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

    });
  
    return Reviews;
  };
  