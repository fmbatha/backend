module.exports = (sequelize, DataTypes) => {

    const CleaningTasks = sequelize.define("CleaningTasks", {

        amount: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          notes: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          cleaner_reply_note: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          cleaner_attachment: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          clean_date: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          status: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          attachment: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          work_status: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          payment: {
            type: DataTypes.STRING,
            allowNull: true,
          },
     
    });
  
  
  
    return CleaningTasks;
  };
  