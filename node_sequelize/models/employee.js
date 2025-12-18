const {sequelize, Sequelize} = require('../connection');

const Employee = sequelize.define('Employee', {
    EmployeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    FirstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    LastName: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    Salary: {
        type: Sequelize.FLOAT,
        allowNull: true,
    }
});

module.exports = Employee;