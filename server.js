const Faker = require('faker');
const Joi = require('joi');

const express = require('express');
const app = express();

app.use(express.json());

const products = [];
for(let i = 0; i < 10; i++) {
  products.push({
    name: Faker.lorem.word(),
    id: i,
    description: Faker.lorem.text()
  })
}

// check for new product
const checkError = data => {
  const scheme = Joi.object({
    name: Joi.string().min(1).required(),
    description: Joi.string().min(0)
  })

  return scheme.validate(data)
}

//root
app.get('/', (req, res) => {
  res.send('root directory exist');
});

// get all products
app.get('/api/products/', (req, res) => {
  res.send(products);
});

// get the product by id
app.get('/api/products/:id', (req, res) => {
  const product = products.find(item => item.id === Number(req.params.id));

  if(!product) {
    res.status(404).send('The product was not found.');
  } else {
    res.send(product);
  }
});

// add new product
app.post('/api/products/', (req, res) => {
  const validateResult = checkError(req.body);
  const {error} = validateResult;

  if(error) {
    return res.status(400).send(error.message);
  }

  else {
    const product = {
      id: products.length,
      name: req.body.name,
      description: req.body.description && req.body.description.length > 0 ? req.body.description : null
    }

    console.log(product)

    products.push(product);
    res.send(product);
  }
})

// delete product
app.delete('/api/products/:id', (req, res) => {
  const targetItem = products.find(item => item.id === Number(req.params.id));

  if(targetItem) {
    const index = products.indexOf(targetItem);
    products.splice(index, 1);

    res.send(targetItem);
  } else {
    return res.status(404).send("The product can't be deleted")
  }
})

// port
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on ${port}...`))



