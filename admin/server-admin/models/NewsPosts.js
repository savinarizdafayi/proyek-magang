// models/NewsPosts.js
module.exports = (sequelize, DataTypes) => {
  const NewsPosts = sequelize.define(
    'NewsPosts',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    },
  },
    {
      tableName: 'newsposts', // Nama tabel di database
      timestamps: true, // Jika Anda memiliki kolom createdAt dan updatedAt
    }
  );
  return NewsPosts;
};
