//ID'si ana başlık olan başlığı yakalayın ve rengini değiştirin

let baslik=document.getElementById("ana-baslik");
console.log("1. görev: "+baslik+"<br>");
baslik.style.color="pink";

//Seçilen paragrafın arkaplan rengini değiştirin.
let ilkMetin=document.querySelector(".bilgi-metni");
console.log("2.görev: "+ilkMetin+"<br>");
ilkMetin.style.backgroundColor="yellow";

//Sola Kaydırın.
let link=document.querySelector("a");
console.log("Üçüncü Görev: "+link+"<br>");
link.style.paddingLeft="60px";

//Li!leri yakalayın
let li=document.querySelectorAll("liste-maddesi");
console.log("Dördüncü Görev: "+li+"<br>");


