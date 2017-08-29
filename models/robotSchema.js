const mongoose = require('mongoose');

const robotSchema = new mongoose.Schema({
  id: Number,
  username: { type: String, required: true, unique: true },
  name: String,
  avatar: String,
  email: { type:String, required: true },
  university: String,
  job: String,
  company: String,
  skills:[String],
  phone: Number,
  address:{
    street_num: Number,
    street_name: String,
    city: String,
    state_or_province: String,
    postal_code: Number,
    country: String
  }
});

const robotUser = mongoose.model('robotSchema', robotSchema);

module.exports = robotUser;
