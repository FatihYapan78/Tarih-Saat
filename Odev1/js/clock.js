let isim = prompt("Lütfen isminizi giriniz: ")

if (isim.length <= 0) {
    alert("Boş bırakılamaz")
    location.reload(); //sayfayı yeniliyor
} else {
    myName.innerHTML = `${isim}`
}



function time() {
    var days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let date = new Date()
let hour = date.getHours()
var min = date.getMinutes();
var sec = date.getSeconds();
var day= date.getDay();
document.getElementById("myClock").innerHTML = hour+":"+min+":"+sec+"-"+days[day];
}
setInterval(time,1000)




