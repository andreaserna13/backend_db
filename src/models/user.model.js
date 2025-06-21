const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Usuario = sequelize.define('Usuario', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  clave: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipoUsuario: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'usuarios', // así se llamará la tabla en MySQL
  timestamps: false
});

module.exports = Usuario;








