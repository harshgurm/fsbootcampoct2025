const express = require('express');
const app = express();
const PORT = 3000;
const { sequelize } = require('./connection');
const Employee = require('./models/employee');
const Department = require('./models/department');

app.use(express.json());

const departmentRoutes = require('./routes/department');
const employeeRoutes = require('./routes/employee');

app.use('/employees/', employeeRoutes);
app.use('/departments/', departmentRoutes);

Department.hasMany(Employee);
Employee.belongsTo(Department);

// Sync database and start server
sequelize.sync()
    .then((res) => {
        // console.log(res);
    })
    .catch(err => {
        console.error('Unable to sync the database:', err);
    });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});