

module.exports = (sequelize, DataTypes) => {
  const Properties = sequelize.define("Properties", {

      name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    prop_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    private_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  

    bedrooms: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    beds: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    bed_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
    bathrooms: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    amenities: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    property_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
    space_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    accommodates: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    booking_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    minimum_stay: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    policy_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    featured: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cancellation: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    policy_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    featured: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    minimum_stay_seasonal: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });




  Properties.associate = (models) => {

    Properties.hasOne(models.PropertyAddress, { foreignKey: "PropertyId" }) // If only one portfolio per user


    Properties.hasMany(models.Images, { foreignKey: "PropertyId" }) // If only one portfolio per user

    models.Images.belongsTo(Properties);


    Properties.hasOne(models.PropertyPrice, { foreignKey: "PropertyId" }) // If only one portfolio per user


    Properties.hasMany(models.Messages, { foreignKey: "PropertyId" }) // If only one portfolio per user

    models.Messages.belongsTo(Properties);


    Properties.hasMany(models.FavoriteProperty, { foreignKey: "property_id" }); // If only one portfolio per user

    models.FavoriteProperty.belongsTo(Properties);

    Properties.hasMany(models.Payments, { foreignKey: "PropertyId" }); // If only one portfolio per user

    models.Payments.belongsTo(Properties);



    Properties.hasMany(models.Reviews, { foreignKey: "property_id" }); // If only one portfolio per user

    models.Reviews.belongsTo(Properties);



    Properties.hasMany(models.CleaningTasks, { foreignKey: "property_id" }); // If only one portfolio per user

    models.CleaningTasks.belongsTo(Properties);


    Properties.hasMany(models.Payouts, { foreignKey: "PropertyId" }); // If only one portfolio per user

    models.Payouts.belongsTo(Properties);

    
    Properties.hasMany(models.PropertyDates, { foreignKey: "PropertyId" }); // If only one portfolio per user

    models.PropertyDates.belongsTo(Properties);


    Properties.hasMany(models.Bookings, {
      foreignKey: 'property_id'
    });
    models.Bookings.belongsTo(Properties);

    
    
  }


  return Properties;
};
