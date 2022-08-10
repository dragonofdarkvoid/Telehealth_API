const mongoose =require("mongoose");
const patientdataSchema = mongoose.Schema({
    index: Number,
    heartrate: Number,
    oxygen:Number,
    systole:Number,
    diastole:Number,
    body_temp:Number,
    name :String,
    date: String,
});
const Patientdata = mongoose.model("patientdatas",patientdataSchema);
module.exports=Patientdata;
