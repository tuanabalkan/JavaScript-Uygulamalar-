// let kullaniciAdi=String(prompt("KULLANICI ADI GİRİNİZ"));
// let sifre=Number(prompt("ŞİFRE GİRİNİZ"));
// if(kullaniciAdi=="admin" && sifre==1234)

// {
//     alert("GİRİŞ BAŞARILI");
// }
// else
// {
//     alert("HATALI GİRİŞ");
// }

// let sinav1=Number(prompt("BİRİNCİ SINAVIN NOTUNU GİRİNİZ"));
// let sinav2=Number(prompt("İKİNCİ SINAV NOTUNU GİRİNİZ"));
// let sinav3=Number(prompt("ÜÇÜNCÜ SINAV NOTUNU GİRİNİZ"));
// let ortalama=((sinav1*20)+(sinav1/100)+(sinav2*30)+(sinav2/100)+(sinav3/2));
// if(ortalama>60)
// {
//     alert("DERSTEN GEÇTİNİZ");
// }
// else
// {
//     alert("DERSTEN KALDINIZ");
// }

let kilo=Number(prompt("KİLONUZU GİRİNİZ"));
let boy=Number(prompt("BOYUNUZU GİRİNİZ"));
let bki=kilo/(boy*boy);
if(bki<18.5)
{
    alert("İDEAL KİLONUN ALTINDA");
}
else if(bki>18.5 && bki<24.9)
{
    alert("İDEAL KİLODA");
}
else if(bki>25 && bki<29.9)
{
    alert("İDEAL KİLONUN ÜSTÜNDE");
}
else if(bki>30 && bki<39.9);
{
    alert("OBEZ");
}
else(bki>39.9);
{
    alert("İDEAL KİLONUN ÇOK ÜSTÜNDE");
}