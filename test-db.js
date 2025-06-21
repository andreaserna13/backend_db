require('dotenv').config();
const { Sequelize } = require('sequelize');

console.log('Conectando a:', process.env.DATABASE_URL);

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

sequelize.authenticate()
  .then(() => console.log('✅ Conexión exitosa a la DB'))
  .catch(err => console.error('❌ Falló la conexión:', err));
