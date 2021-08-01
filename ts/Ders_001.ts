// let adi:string="Hamit";

// let dizi:string[]=["44" ,"Battalgazi","YeşilYurt","Hamit","Mızrak"];
// console.log(...dizi);

// let sayi:number=44;
// let sayi44:number=55;

//Hoisting ts izin vermez

//DataTypes
// var , let , const
//TS: number,string,boolean ,any:joker
var sayi: number = 44.55; //virgüllü sayılar
var sayi2: number = 66; //tam sayılar
const SABIT: number = 3.14555;
let isim: string = "Hamit";
let sonuc: boolean;
sonuc = true;

//Ternary
var sabit: number = 55;
let ternary = sabit === 55 ? "sayı 55" : "sayı 55 farklı";
console.log(ternary);
alert(ternary);

//sayısal sistemler
var ikilik: number = 0b0001;
var sekizlik: number = 0o745;
var onluk: number = 741;
let onaltilik: number = 0x125;

//fonksiyon
function deneme(adi, soyadi) {
  return adi + " " + soyadi;
}

function deneme2(adi: string, soyadi: string) {
  return adi + " " + soyadi;
}

function deneme3(adi: string, soyadi: any) {
  return adi + " " + soyadi;
}

function deneme4(tarih: Date): void {
  console.log(tarih);
}

function deneme5(tarih: Date): string {
  console.log(tarih);
  return "deneme";
}

function deneme6(tarih: Date): boolean {
  console.log(tarih);
  return true;
}

function deneme7(tarih: Date): number {
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
let sayi8: number = 8;
if (sayi8 === 8) {
  console.log("sayı 8");
} else if (sayi8 === 9) {
  console.log("sayı 9");
} else {
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

//for
for (let i = 1; i < 10; i++) {
  console.log("sayılar: " + i);
}

//while
var sayi44: number = 0;
while (sayi44 < 14) {
  console.log(sayi44);
  sayi44++;
}

//do-while
var sayiDo: number = 0;
do {
  console.log(sayiDo);
  sayiDo++;
} while (sayiDo < 12);

//for in

//for of

//continue break
for (let i = 0; i < 14; i++) {
  if (i == 10) {
    continue;
  }

  if ((i = 13)) break;
}

//normal diziler
var diziNormal = [];

var dizi: string[] = ["Html5 Css3 Js jQuery Bootstrap Ts Responsive"];
console.log(...dizi);

//for in
for (let temp in dizi) {
  console.log(dizi[temp]);
}
//çıktı: 1 2 3 4 5 6 7

//for of
for (let temp of dizi) {
  console.log(dizi[temp]);
}
//çıktı: Html5 Css3 Js jQuery Bootstrap Ts Responsive

//dizi.
