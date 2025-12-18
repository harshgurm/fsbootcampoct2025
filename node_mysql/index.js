const express = require('express');
const connection = require('./connection');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/customers', (req, res) => {
  try {
    connection.query('SELECT * FROM bootcamp_lecture_2025.customers;', (error, results) => {
      if (error) return res.status(401).json(error);
      if (results.length === 0) {
        return res.status(404).send('No customers found');
      } else {
        return res.json(results);
      }
    });
  } catch (err) {
    return res.status(500).send('Database query failed');
  }
});

app.get('/customers/:id', (req, res) => {

  const customer_id = req.params.id;

  try {
    connection.query(`SELECT * FROM bootcamp_lecture_2025.customers WHERE customers_id = ?`, [customer_id], (error, results) => {
      if (error) return res.status(401).json(error);
      if (results.length === 0) {
        return res.status(404).send('No customers found');
      } else {
        return res.json(results);
      }
    });
  } catch (err) {
    return res.status(500).send('Database query failed');
  }
});

app.delete('/delete_customers/:id', (req, res) => {
  const customer_id = req.params.id;
  try {
    connection.query(`DELETE FROM bootcamp_lecture_2025.customers WHERE customers_id = ?`, [customer_id], (error, results) => {
      if (error) return res.status(401).json(error);
      if (results.affectedRows === 0) {
        return res.status(404).send('No customer found to delete');
      } else {
        return res.send('Customer deleted successfully');
      }
    })
  }
  catch (error) {
    return res.status(500).send('Database query failed');
  }
});

app.post('/add_customers', (req, res) => {

  const { name } = req.body;
  try {
    connection.query(`INSERT INTO bootcamp_lecture_2025.customers (customer_name) VALUES (?)`, [name], (error, results) => {
      if (error) return res.status(401).json(error);
      return res.json(results);
    })
  } catch (error) {
    return res.status(500).send('Database query failed');
  }

});

app.put('/update_customers/:id', (req, res) => {
  const customer_id = req.params.id;
  const { name } = req.body;

  try {
    connection.query(`UPDATE bootcamp_lecture_2025.customers SET customer_name = ? WHERE customers_id = ?`, [name, customer_id], (error, results) => {
      if (error) return res.status(401).json(error);
      if (results.affectedRows === 0) {
        return res.status(404).send('No customer found to update');
      } else {
        return res.send('Customer updated successfully');
      }
    })
  } catch (error) {
    return res.status(500).send('Database query failed');
  }

});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});