module.exports = (sequelize, DataTypes) => {
    const Services = sequelize.define("Services", {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      image_url: {
        type: DataTypes.STRING
      },
    },
    {
      tableName: 'services', 
      timestamps: false, 
    }
  );


    return Services;
  };
  