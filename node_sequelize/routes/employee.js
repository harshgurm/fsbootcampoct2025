const Employee = require('../models/employee');
const router = require('express').Router();

router.post('/create', async (req, res) => {
    const { employee_first_name, employee_last_name, employee_salary, department_id } = req.body;

    if (!employee_first_name || !department_id) {
        return res.status(400).json({ error: 'First name and Department ID are required' });
    }

    try {
        const newEmployee = await Employee.create({ 
            FirstName: employee_first_name, 
            LastName: employee_last_name, 
            Salary: employee_salary,
            DepartmentDepartmentId: department_id
        });
        res.status(201).json(newEmployee);   
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;