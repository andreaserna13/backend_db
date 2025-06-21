const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  logging: false,
  dialectOptions: {
    ssl: false // 👈 Esto le dice a Sequelize que NO use SSL
  }
});

module.exports = sequelize;










