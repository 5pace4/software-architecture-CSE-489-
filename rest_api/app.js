require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes');

// app.get('/', (req, res) => {
//   res.send('Your server is running');
// });
// app.get('/api', (req, res) => {
//   res.json({
//     message: 'Welcome to the API',
//   });
// });

// Middleware for parsing JSON
app.use(express.json());
// Middleware for parsing URL-encoded data (if needed)
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use('/users', userRoutes);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
