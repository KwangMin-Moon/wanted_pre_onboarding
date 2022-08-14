const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('port', process.env.PORT);
app.get('/', (req, res, next) => {
  res.send('Welcome to wanted_pre_onboarding!');
});

app.use((req, res) => {
  res.status(404).send('Not Found!');
});

app.use((err, req, res, next) => {
  const { status, message } = err;
  res.status(status || 500).json({ result: false, message });
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중!');
});
