const mongoose = require("mongoose");

const doctordataSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  bio:String,
  rating:Number,
});

const Doctordata = mongoose.model("doctordatas", doctordataSchema);

module.exports = Doctordata;
name
:"Kenny"
username
:"kennyyohanda8@gmail.com"
password
:"kennydokter"
bio
:"Saya dokter spesialis Jantung"
rating
:5