const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "temperament",
    {
      // No es necesario definir el ID ya que sequelize al no encontrarlo lo genera automáticamente, de ser necesario el siguiente código definiría ese ID
      // id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true,
      //   autoIncrement: true,
      //   unique: true,
      // },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
