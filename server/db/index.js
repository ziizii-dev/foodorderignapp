const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ziiziidev:incorrect@cluster1.nc8pyqv.mongodb.net/food-ordering-app')
  .then(() => console.log('Connected!'));
// mongoose
// .connect('mongodb+srv://ziiziidev:incorrect@cluster1.nc8pyqv.mongodb.net/food-ordering-app')
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })
const db = mongoose.connection

module.exports = db