// let urunFiyati=Number(prompt("Ürünün Fiyatını Giriniz: "));
// const indirimliFiyat=function(orijinalFiyat, indirimYuzdesi)
// {
//     const indirimMiktari=orijinalFiyat*(indirimYuzdesi/100);
//     const nihaiFiyat=orijinalFiyat-indirimMiktari;
//     return nihaiFiyat;
// }
// let kazancim=indirimliFiyat(urunFiyati,25);
// document.writeln(`Ürünün %25 indirimle: ${kazancim} TL`);


// const metinUzunluguBul = metin => metin.length;
// let cumle=prompt("Lütfen Cümle Giriniz.");
// if(cumle==null || cumle.trim()=="")
// {
//     document.writeln("Lütfen Geçerli Bir Metin Giriniz.");
// }
// else
// {
//     let uzunluk=metinUzunluguBul(cumle.trim());
//     document.writeln(`Girdiğiniz Metin ${uzunluk} Karakterden Oluşmaktadır`);
// }


let sifre=("JavAsCripT öĞrEnİYorUz.");
document.writeln(`Şifrenin Uzunluğu: (uzunluk: ${sifre.length}): "${sifre}"<br>`);
let temizSifre=sifre.trim();
let buyukmetin=temizSifre.toUpperCase();
document.writeln(`Temizlenmiş ve Büyük Metin: "${buyukmetin}" (uzunluk: ${buyukmetin.length})`);

let iceriyorMu=buyukmetin.includes("JAVASCRİPT");
let baslangic=buyukmetin.includes("JAVASCRİPT");
document.writeln(`"JAVASCRİPT KELİMESİNİ İÇERİYOR MU? ${iceriyorMu}`+"</br>");
document.writeln();

