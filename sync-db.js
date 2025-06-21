require('dotenv').config();
const sequelize = require('./config/db');
const Usuario = require('./src/models/user.model'); // Ajusta la ruta si cambia

sequelize.sync({ force: false }) // ⚠️ "false" para NO borrar datos
  .then(() => {
    console.log('✅ Tablas sincronizadas correctamente');
    process.exit();
  })
  .catch(err => {
    console.error('❌ Error al sincronizar tablas:', err);
    process.exit(1);
  });
