const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Pizzaria Ginno e Silva'});
});

const Cliente = require('./controllers/cliente');
const Pedido = require('./controllers/pedido');
const Pizza = require('./controllers/pizza');
const Contem = require('./controllers/contem');

routes.get('/cliente', Cliente.read);
routes.post('/cliente', Cliente.create);
routes.put('/cliente/:id', Cliente.update);
routes.delete('/cliente/:id', Cliente.remove);

routes.get('/pizza', Pizza.read);
routes.post('/pizza', Pizza.create);
routes.put('/pizza/:id', Pizza.update);
routes.delete('/pizza/:id', Pizza.remove);

routes.get('/pedido', Pedido.read);
routes.post('/pedido', Pedido.create);
routes.put('/pedido/:id', Pedido.update);
routes.delete('/pedido/:id', Pedido.remove);

routes.get('/contem', Contem.read);
routes.post('/contem', Contem.create);
routes.put('/contem/:id', Contem.update);
routes.delete('/contem/:id', Contem.remove);

module.exports = routes;