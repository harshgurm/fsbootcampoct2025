const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bootcamp2025_sequelize', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;