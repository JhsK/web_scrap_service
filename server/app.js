const express = require('express');
const cors = require('cors');
const session = require('express-session');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const hpp = require('hpp');
const helmet = require('helmet');

const urlRouter = require('./routes/url');

dotenv.config();
const app = express();

app.use(morgan('combined'));
app.use(hpp());
app.use(helmet());
app.use({
  origin: 'https://effulgent-licorice-f9f730.netlify.app/',
  credentials: true,
});

// app.use(morgan('dev'));
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
//   })
// );

// app.use('/', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello api');
});

app.use('/url', urlRouter);

app.listen(process.env.PORT, () => {
  console.log('서버 실행 중', process.env.PORT);
});
