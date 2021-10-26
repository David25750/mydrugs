
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const drugsRoutes = require('./routes/drugs.routes');
const orderRoutes = require('./routes/order.routes');
const cartRoutes = require('./routes/cart.routes');
const optionRoutes = require('./routes/option.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', drugsRoutes);
app.use('/api', optionRoutes);
app.use('/api', orderRoutes);
app.use('/api', cartRoutes);


/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* MONGOOSE */
process.env.NODE_ENV === 'production' ?
  mongoose.connect('mongodb+srv://AdrianoXXX:Adri@n87==@cluster0.6d47y.mongodb.net/my-drugs?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }) :
  mongoose.connect('mongodb://localhost:27017/my-drugs', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
