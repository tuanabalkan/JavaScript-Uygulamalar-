let mevsim=prompt("Mevsim Giriniz.");
switch(mevsim.toLowerCase())
{
    case "kış":
        document.writeln("Kayak Yapabilirsiniz.");
        break;
    case "yaz":
        document.writeln("Denize Girebilirsiniz");
        break;
    case "sonbahar":
        document.writeln("Yaprak Toplayabilirsiniz.");
        break;
    case "ilkbahar":
        document.writeln("Doğa Yürüyüşü Yapabilirsiniz.");
        break;
    default:
        document.writeln("Geçersiz.");
        break;

}
