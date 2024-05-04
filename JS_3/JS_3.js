// DO-WHİLE DONGUSU
// dışarıdan 1-100 dısında bir değer girilmesini engelleyen bir kod giriniz
let not ;
do {
    not = prompt("Bir not giriniz"); 
} while (not>1 && not<100) {
    console.log("Lütfen 1-100 arası bir sayi giriniz");
}

//FONKSİYONLAR
function yasYazdir(){
    console.log(`Ben Merve ${2024-1986} yaşındayım`);
}
yasYazdir();

// parametreli fonksiyon
let dogumYili = prompt("Dogum yilinizi giriniz");
function yasHesapla (x){
    return  2024-x;
} 
console.log(yasHesapla(dogumYili));

// 3 kişinin yaslarını hesaplamak ve bu yasların ortalamasını almak için fonksiyon yazalim
let y1 = prompt("DT 1 giriniz");
let y2 = prompt("DT 2 giriniz");
let y3 = prompt("DT 3 giriniz");

y1 = yasHesapla(y1);
y2 = yasHesapla(y2);
y3 = yasHesapla(y3);

function ortHesapla(yy1 , yy2 , yy3 ){
 return (yy1+yy2+yy3)/3;
}

let ort = ortHesapla(y1,y2,y3);
console.log("yaslarin ortalamasi : " + ort);

// 4 işlem hesap makinasını foksiyonları kullanarak yapalım
function hesapMakinesi( girdi1 , girdi2 , islem){
    if(islem=="+"){
 return girdi1+girdi2;
    } else if(islem=="-"){
 return girdi1-girdi2;
    } else if(islem=="*"){
 return girdi1*girdi12;
    } else if(islem=="/"){
 return girdi1/girdi2;
    } else {
 return "Hatali islem girdiniz";       
    }
}

const sonuc = hesapMakinesi(5,15,"+");
console.log(sonuc);

// sayının tek cift oldugunu dönduren fonksiyonu yazalım
let s4 = prompt("tek mi çift mi sayısı giriniz ");

function tekMiCiftMi(x) {
 const rslt = x%2==0 ? "ÇİFT" : "TEK";
 return rslt;
}
const nedir = tekMiCiftMi(s4);
console.log(nedir);

// FONKSİYON TANIMLAMA 2. YÖNTEM (EXPRESSONS)
const tekMi = function(x){
 return x%2 ? "TEK" : "ÇİFT";
}

console.log(tekMi(8));

//FONKSİYON TANIMLAMA 3. YONTEM (ARROW)
const topla = (a,b) => {
    return a+b;
};
console.log(topla(7,8));

// örnek arrow
const selamVer = () => {
    alert("MERHABA");
};
selamVer();