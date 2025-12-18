const Department = require('../models/department');
const router = require('express').Router();

router.post('/create', async (req, res) => {
    
    const {department_name} = req.body;

    if (!department_name) {
        return res.status(400).json({ error: 'Department name is required' });
    }

    try {
        const newDepartment = await Department.create({ DepartmentName: department_name });
        res.status(201).json(newDepartment);   
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/list', async (req, res) => {
    try{
        const departments = await Department.findAll();
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/list/:id', async (req, res) => {
    const department_id = req.params.id;
    try{
        const departments = await Department.findAll({
            where: {
                DepartmentId: department_id
            }
        });

        if(departments.length === 0){
            return res.status(404).json({ error: 'Department not found' });
        }

        return res.status(200).json(departments);

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/delete/:id', async (req, res) => {
    const department_id = req.params.id;

    try {
        const department = await Department.findByPk(department_id);
        if(department){
            await department.destroy();
            return res.status(200).json({ message: 'Department deleted successfully' });
        } else {
            return res.status(404).json({ error: 'Department not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.patch('/update/:id', async (req, res) => {
    const department_id = req.params.id;
    const department_name = req.body.department_name;
    try {
        const department = await Department.findByPk(department_id);
        if(department){

            department.DepartmentName = department_name;
            console.log(department.DepartmentName);
            await department.save();
            return res.status(200).json(department);
        } else {
            return res.status(404).json({ error: 'Department not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;