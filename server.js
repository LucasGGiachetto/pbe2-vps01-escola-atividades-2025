const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes);

app.listen(5000, (req, res) => {
    console.log('Server is running on http://localhost:5000');
});