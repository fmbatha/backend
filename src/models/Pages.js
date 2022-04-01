module.exports = (sequelize, DataTypes) => {
    const Pages = sequelize.define("Pages", {

        name:{
            type: DataTypes.STRING
        },
        url:{
            type: DataTypes.STRING
        },
        content:{
            type: DataTypes.STRING
        },
        position:{
            type: DataTypes.STRING
        },
        content:{
            type: DataTypes.STRING
        },
     
    });
  
  
    return Pages;
  };
  