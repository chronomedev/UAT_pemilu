const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');

app.use(express.static("./public")); // buat semua direktori yang diakses ato dirender kan dari express requestnya sendiri
//ke defaultnya

app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));

// ChronomeDev
// NIK Random generator

const userUAT = require("./model/uat_user");
var provinsi;
var tgl;
var bulan;
var tahun;
var nourut;


function buatNIKRandom(){
    provinsi = (Math.floor(Math.random() * (36-31)) + 31).toString();
    kabupatenkota = (Math.floor(Math.random() * (74-71)) + 71).toString()
    kecamatan = (Math.floor(Math.random() * (71-10)) + 10).toString()

    tgl = (Math.floor(Math.random() * (31-1)) + 1).toString();
    bulan = (Math.floor(Math.random() * (12-1)) + 1).toString()
    tahun = (Math.floor(Math.random() * (98-60)) + 60).toString()
    nourut = "000" + (Math.floor(Math.random() * (9-1)) + 1).toString()
}

function nikClean(){
    if(tgl.length == 1 ){
        tgl = "0" + tgl
    }
    if(bulan.length == 1){
        bulan = "0" + bulan;
    }

    return provinsi + kabupatenkota + kecamatan + tgl + bulan + tahun + nourut;
}

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname +'/public/index.html'));
});

app.post("/", async (req, res)=>{
    console.log(req.body);
    await buatNIKRandom();
    nik_random = await nikClean();
    userUAT.tambah(req.body["nama_uat"], nik_random, (error)=>{
        if(error){
            res.send({status : -1});
        }
        res.send({status : nik_random});
    });
});


app.listen(8383, ()=>{
    console.log("Server jalan");
})