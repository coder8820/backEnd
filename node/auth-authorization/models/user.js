const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: String, required:[true,'First name is required']
})


module.exports = mongoose.model('User', userSchema)