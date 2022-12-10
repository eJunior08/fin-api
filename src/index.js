const express = require("express");
const { v4: uuidV4 } = require("uuid");

const app = express();

app.use(express.json());

const customers = [];

/**
 * cpf - string
 * name - string
 * id - uuid
 * statement - array
 */
app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  customers.push({
    cpf,
    name,
    id: uuidV4(),
    statement: [],
  });

  return response.status(201).send();
});

app.listen(3333);
