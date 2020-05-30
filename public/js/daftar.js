function daftarKuy(){
    if(document.getElementsByTagName("input")[0].value == null || document.getElementsByTagName("input")[0].value == ""){
        window.alert("NAMA TIDAK BOLEH KOSONG!");
    } else {
        $.ajax({
            url: "/",
            type: "post",
            dataType: "json",
            data:{ 
                "nama_uat" : document.getElementsByTagName("input")[0].value
            },
            success: function(data_respon){
                console.log(data_respon);
                // var data = JSON.parse(data_respon);
                console.log(data_respon["status"]);
                if(data_respon["status"] != -1){
                    document.getElementById("tampil_nik").innerHTML = "<p>NIK " + data_respon["status"] + "</p>";
                    window.alert("Berhasil daftar! Diingat lagi ya NIK nya untuk nanti testing");
                } else {
                    window.alert("ada error");
                }
            }, 
            error: function(respon){
                console.log("masuk ERROR ajax");
                console.log(respon);
                window.alert("Ada error lagi");
            }
        });
    }
    
}
