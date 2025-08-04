const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://stunning_user:BKotoGtw1JVXWFGD@stunningcluster.wxd3j0m.mongodb.net/stunning?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));