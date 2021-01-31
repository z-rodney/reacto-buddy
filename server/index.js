const express = require('express');
const morgan = require('morgan');
const path = require('path')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
});


const PORT = 3033 || process.env.PORT;
const init = () => {
  app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
  });
}

init()
