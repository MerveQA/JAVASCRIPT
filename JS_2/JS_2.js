// type conversions
const para = "2000";
console.log(para+15);
console.log(Number(para)+15);

const dil = "English";
console.log(Number(dil)); // NaN

const sayi = 25;
console.log(String(sayi));
console.log(typeof String(sayi)); // Strine çevirme

const s1 = 5;
const s2 = -5;
const s3 = "John";

console.log(Boolean(s1));
console.log(Boolean(s2));
console.log(Boolean(s3));

const sifir = 0;
const degersiz = null;
const notAnumber = NaN;
const tanimsiz = undefined;
const bos = "";
console.log(Boolean(sifir));
console.log(Boolean(degersiz));
console.log(Boolean(notAnumber));
console.log(Boolean(tanimsiz));
console.log(Boolean(bos));

// Bu yukardeki 5 değer hariç tüm kullanımların boolean değeri true dur


// KARAR DEYİMLERİ 
// İF ELSE
const yas = 18;
if(yas<18) {
    console.log("cocuk");
} else {
    console.log("yetişkin");
}


let sonuc ; // undefined

if(yas<=3){
sonuc = "bebek";
} else if(yas<=14){
sonuc = "ergen"
} else if (yas<18){
sonuc = "genç";
} else {
sonuc = "sonuc yetişkin"
}
console.log(sonuc);

// consoldan veri alma
// let age = prompt("Please enter your age"); // Burdaki 10 default değer
// if(age<18) {
//    console.log("you are alive");
// }

// koşılu dışarıya alma advanced
const bireyYas = 21;
const cinsiyet = "erkek";
const saglikli = true;

// const kosul = bireyYas>=18 && cinsiyet=="erkek" && saglikli==true;
// if(kosul==true) {
// console.log("Askere gidebilir");
// } else {
// consolelog("Askere gidemez");
// }

// SWİTCH CASE
// promt tan gelen string olarak belirleniyor.
// bunun için 
// let gun =prompt("1-7 arasi bir sayi giriniz");

// if (isNaN(gun) || gun < 1 || gun > 7 ) {
//     alert("Gecersiz giris! Lutfen 1-7 arasi bir sayi giriniz.");
//   } else {
// switch(parseInt(gun)) {
//     case 1 :
//         gun = "pazartesi";
//         console.log(gun);
//         break;
//     case 2 :
//         gun = "sali"
//         console.log(gun);
//         break;
//     case 3 :
//         gun = "carsamba";
//         console.log(gun);
//         break;
//     case 4 :
//         gun = "perşembe";
//         console.log(gun);
//         break;
//     case 5 :
//         gun = "cuma";
//         console.log(gun);
//         break;
//     case 6 :
//         gun = "cumartesi";
//         console.log(gun);
//         break;
//     case 7 : 
//     gun = "pazar";
//     console.log(gun);
//     break;
// }}



// Ternary
const hiz = 90 ;
const mesaj = hiz>120?"hizli":"yavas";
console.log(mesaj);







    
