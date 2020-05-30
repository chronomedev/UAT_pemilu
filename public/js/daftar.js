function daftarKuy(){
    data_masuk = 
    $.ajax({
        url: "/",
        type: "post",
        data: JSON.stringify({
            nama_uat : document.getElementsByTagName("input")[0].value
        }),
        success: function(data_respon){
            console.log(data_respon);
            var data = JSON.parse(data_respon);
            console.log(data["status"]);
            if(data["status"] == -1){
                document.getElementById("tampil_nik").innerHTML = "<p>NIK " + data["status"] + "</p>";
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
