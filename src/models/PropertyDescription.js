module.exports = (sequelize, DataTypes) => {
    const PropertyDescription = sequelize.define("PropertyDescription", {

        property_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          summary: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          place_is_great_for: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          about_place: {
            type: DataTypes.STRING,
            allowNull: true,
          },
    
          guest_can_access: {
            type: DataTypes.STRING,
            allowNull: true,
          },
    
          interaction_guests: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          other: {
            type: DataTypes.STRING,
            allowNull: true,
          },
    
          about_neighborhood: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          get_around: {
            type: DataTypes.STRING,
            allowNull: true,
          },
         
         
        });


        return PropertyDescription;
  };