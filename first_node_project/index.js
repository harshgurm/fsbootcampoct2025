const express = require('express');
const app = express();
const port = 3000;

const customers = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Jim Beam' }  
]

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Incoming request here`);
  next();
})

function checkValidCustomerId(req, res, next) {
  console.log('This is going to be executed for /customers/:id route only');
  next();
}

app.get('/customers/', (req, res) => {
  return res.send(customers);
}); 



app.get('/customers/:id', checkValidCustomerId, (req, res) => {
  const cust_id = req.params.id;
  const customer = customers.find(c => c.id === parseInt(cust_id));
  if (customer) {
    return res.send(customer);
  } else {
    return res.status(404).send('Customer not found');
  }

}); 

app.post('/add_customers/', (req, res) => {
  console.log('HERE', req.body.name);
  const newCustomer = { id: customers.length + 1, name: req.body.name };
  customers.push(newCustomer);
  return res.status(201).send(newCustomer);
})

app.get('/users/', (req, res) => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  fetch(url)
    .then(response => response.json())
    .then(data => res.send(data))
    .catch(error => res.status(500).send('Error fetching users'));
})


app.put('/update_customer/:id', (req, res) => {
  console.log('COming here')
  const cust_id = req.params.id;
  const customer = customers.find(c => c.id === parseInt(cust_id));
  if (customer) {
    customer.name = req.body.name || customer.name;    
    return res.send(customer);
  } else {
    return res.status(404).send('Customer not found');
  }

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});