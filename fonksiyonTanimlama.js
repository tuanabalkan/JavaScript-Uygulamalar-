//FONKSİYON TANIMLAMA

function selamVer(isim)
{
    const mesaj="Hoş Geldiniz "+isim; 
    return mesaj;
}

let selamlama=selamVer("Tuana");
 
document.writeln("<u>Fonksiyon Bildirimi Örneği</u><br>");
document.writeln(selamlama+"<br><br>");

//Fonksiyon Ekspersyon Örneği

const carpmaIslemi=function(sayi1,sayi2)
{
    const sonuc=sayi1*sayi2;
    return sonuc;
}
let hesapSonucu=carpmaIslemi(7,3);

document.writeln("<u>Fonksiyon Ekspresyon Örneği</u><br>");
document.writeln("İşlemin Sonucu: "+hesapSonucu+"<br><br>");

//Ok Fonksiyonları

const farkAl=(sayi1,sayi2)=>sayi1-sayi2;
let farkSonuc=farkAl(25,10);

document.writeln("<u>Ok Fonksiyon Örneği</u><br>");
document.writeln("İşlemin Sonucu: "+farkSonuc+"<br><br>");

