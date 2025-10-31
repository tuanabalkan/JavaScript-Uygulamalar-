// document.writeln("<u>0'dan 10'a kadar olan çift sayılar: </u>"+ "<br>");
// for(let i=0; i<=10; i+=2)
// {
//     document.writeln(i);
// }
// document.writeln("<br><u>1'den 10'a kadar olan tek sayılar: </u>"+ "<br>");
// for(let j=1; j<=10; j+=2)
// {
//     document.writeln(j);
// }


// let sayi=prompt("Sayı Giriniz.");
// let faktoriyel=1;
// for(let i=1; i<=sayi; i++)
// {
//     faktoriyel*=i;
// }
// alert(sayi+" sayısının faktöriyeli: "+faktoriyel);


// let toplamSayfa=0;
// let kitapSayfaSayisi=300;
// let gunluk=25;
// document.writeln("<u>Kitap Okuma İlerlemesi</u><br>");
// for(let i=1; toplamSayfa<kitapSayfaSayisi; i++ )
// {
//     toplamSayfa+=gunluk;
//     if(toplamSayfa>kitapSayfaSayisi)
//     {
//         toplamSayfa=kitapSayfaSayisi;
//     }
//     document.writeln(i+" . gün: "+toplamSayfa+" . sayfa<br>");
// }
    

let dogruSifre="1234";
let girilensifre="";
let denemeSayisi=0;
while(girilensifre!=dogruSifre && denemeSayisi<3)
{
    girilensifre=prompt("Şifrenizi Giriniz");
    denemeSayisi++;
    if(girilensifre!==dogruSifre)
    {
        alert("Hatalı Şifre! Kalan Deneme Hakkı: "+(3-denemeSayisi));
    }
}
if(girilensifre==dogruSifre)
{
    alert("Başarılı Giriş! Hoş Geldiniz.");
}
else
{
    alert("Hesap Bloke Edildi.");
}
