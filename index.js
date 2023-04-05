// import atau panggil package yang kita mau pake di aplikasi kita
const express = require('express');

// framework utk http server
const app = express();
const PORT = 3000;

app.use(express.json());
// proses baca json 
const bodyParser = require('body-parser');

const routes = require('./routes');

// url utama dari aplikasi
// req = request 
// res = response
app.get('/', (req, res) => {
    res.send('Hello FSW 3 yang luar biasa dari server nih !');
})

app.use(routes);

// memulai server nya
app.listen(PORT, () => {
    console.log(`App running on Localhost: ${PORT}`)
})