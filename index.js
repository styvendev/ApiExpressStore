const express = require('express');
var cors = require('cors');
const routerApi = require('./routes');
const { global, boom } = require('./middlewares/error.global');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('server in express');
});

//routes
routerApi(app);

//middlewares
app.use(global);
app.use(boom);

//port
app.listen(port);
