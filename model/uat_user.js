// Model objek user
// Hansrenee Willysandro 2020

const koneksi = require("./db");

var useruat = {
    tambah: (nama_lengkap, nik, instruksi2)=>{
        console.log("isi nikkk" + nik);
        koneksi.query("insert into fp_database_staging(FIR_DATA, nama_lengkap, NIK, is_KPPS, is_SAKSI, is_PENGAWAS_TPS)values('nihil'," + 
        koneksi.escape(nama_lengkap) + "," +  nik + ",0,0,0);", function(error, hasil){
                if(error){
                    //console.log(hasil[0]);
                    console.log("errorboz");
                    console.log(error);
                    instruksi2(true);
                    return
                }
                console.log("gamasuk error");
                instruksi2(false);
        });
    }

};

module.exports = useruat;