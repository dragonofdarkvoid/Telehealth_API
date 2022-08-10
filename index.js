const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const app =express();
const corsOptions={
    origin:"*",
    optionSuccessStatus:200,
};
app.use(cors(corsOptions));
mongoose.connect(
    "mongodb+srv://kenny:sitiajaib@cluster0.nlxih.mongodb.net/apitelehealth?retryWrites=true&w=majority"
);

const Doctordata = require("./models/Doctordatas");
const Patientdata = require("./models/Patientdatas");
app.get("/Patientdata/patientdata", (req,res)=>{
    Patientdata.find((err, patientdata)=>{
        if(err){
            res.status(500).send("Terdapat error pada Jaringan");
            return;
            }
        if(patientdata.length === 0){
            res.status(404).send("Data tidak ditemukan");
            return;
        }
        res.status(200).json(patientdata);
    });
});
app.get("/Patientdata/:name", (req,res)=>{
    Patientdata.find({name: req.params.name}, (err, patientdata)=>{
        if(err){
            res.status(500).send("Terdapat error pada Jaringan");
            return;
            }
        if(patientdata.length === 0){
            res.status(404).send("Data tidak ditemukan");
            return;
        }
        res.status(200).json(patientdata);
    });
});
app.get("/Doctordata/:username",(req, res)=>{
    Doctordata.findOne(
        {
        username: req.params.username,
        },
        (err,doctordata) =>{
            if(err){
                res.status(500).send("Terdapat error pada jaringan atau server");
                return;
            }
            if(doctordata.length === 0){
                res.status(404).send("Tidak ada akun yang tersimpan");
                return;
            }
            res.status(200).send(doctordata);
        }
    );
});

app.listen('3306','192.168.43.8', () => {
console.info('server started on port 3306')
});
