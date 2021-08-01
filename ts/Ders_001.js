// let adi:string="Hamit";
// let dizi:string[]=["44" ,"Battalgazi","YeşilYurt","Hamit","Mızrak"];
// console.log(...dizi);
// let sayi:number=44;
// let sayi44:number=55;
//Hoisting ts izin vermez
//DataTypes
// var , let , const
//TS: number,string,boolean ,any:joker
var sayi = 44.55; //virgüllü sayılar
var sayi2 = 66; //tam sayılar
var SABIT = 3.14555;
var isim = "Hamit";
var sonuc;
sonuc = true;
//Ternary
var sabit = 55;
var ternary = sabit === 55 ? "sayı 55" : "sayı 55 farklı";
console.log(ternary);
alert(ternary);
//sayısal sistemler
var ikilik = 1;
var sekizlik = 485;
var onluk = 741;
var onaltilik = 0x125;
//fonksiyon
function deneme(adi, soyadi) {
    return adi + " " + soyadi;
}
function deneme2(adi, soyadi) {
    return adi + " " + soyadi;
}
function deneme3(adi, soyadi) {
    return adi + " " + soyadi;
}
function deneme4(tarih) {
    console.log(tarih);
}
function deneme5(tarih) {
    console.log(tarih);
    return "deneme";
}
function deneme6(tarih) {
    console.log(tarih);
    return true;
}
function deneme7(tarih) {
    console.log(tarih);
    return 44;
}
//Math
console.log(Math.min(5, 6, 9, 8));
console.log(Math.max(5, 6, 9, 8));
console.log(Math.pow(2, 5));
console.log(Math.abs(-44));
console.log(Math.ceil(4.1));
console.log(Math.sqrt(16));
console.log(Math.floor(4.9));
console.log(Math.round(4.9));
console.log(Math.random() * 3 + 1);
//if else
var sayi8 = 8;
if (sayi8 === 8) {
    console.log("sayı 8");
}
else if (sayi8 === 9) {
    console.log("sayı 9");
}
else {
    document.writeln("farklı");
}
//switch case
switch (sayi8) {
    case 1:
        console.log("sayı 1");
        break;
    case 2:
        console.log("sayı 2");
        break;
    case 3:
        console.log("sayı 3");
        break;
    default:
        document.writeln("farklı");
        break;
}
