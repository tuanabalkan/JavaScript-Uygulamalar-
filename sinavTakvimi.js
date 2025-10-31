let suankiSaat=new Date().getHours();
let suankiDakika=new Date().getMinutes();
document.writeln("Saat Ve Dakika: " +suankiSaat+" . "+ suankiDakika+"<br>");
let sinavSaati=13;
let sinavDakika=37;
if (suankiSaat<sinavSaati)
{
    let kalanSaat=sinavSaati-suankiSaat;
    let kalanDakika=60-suankiDakika;
    document.writeln("sınava "+ kalanSaat + "saat" + kalanDakika + "dakika");
}
else if(suankiSaat==sinavSaati && suankiDakika<sinavDakika)
{
    let kalanDakika=sinavDakika-suankiDakika;
    document.writeln("Sınava "+ kalanDakika+"dakika var!");
}
else if(suankiSaat==sinavSaati && suankiDakika>=sinavDakika)
{
    document.writeln("Sınav Başladı! Hemen Giriş Yapınız!");
}
else
{
    document.writeln("Sınav Süresi Doldu.");
}
