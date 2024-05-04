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

// TEKRARLANAN DURUMLAR (ITERATOR)
for(let i=0; i<10; i++) {
    console.log("Hello world");
}

// 1 den 10 a ladar sayıların toplamını yazırınız
let toplam = 0;
for(let t =1 ; t<=10;t++){
toplam+=t;
}
console.log(toplam);

// 1 den n e kadar olan sayıların toplamı
let n = prompt("pozitif bir sayi giriniz");
toplam = 0;
for(let k = 0 ; k<n; k++){
    toplam+=k;
}
console.log(toplam);

// sayının asal olup olmadıgnı bulan kod yazınız.
const sayi2 = prompt("Bir sayi giriniz ");
const asalMi = (sayi2) => {
    let asal = true;
    for(let i=2; i<sayi2 ; i++){
        if(sayi2%i==0) {
            asal = false;
            break;
        }
    }
   return asal ? "ASAL" : "ASAL DEĞİL"; 
};
console.log(`Bu ${sayi2} asal mi? : ${asalMi(sayi2)}`);


// WHİLE
// 1 den 10 a kadar olan sayıların toplamını yazıdırn
let i = 1;
let toplam2 = 0;
while(i<=10){
   toplam2+=i;
   i++; 
}
console.log("toplam : "+toplam2);


