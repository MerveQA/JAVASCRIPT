// Diziyi Değiştiren methodlar
const meyveler = ["Elma","Armut","Muz","Kivi","Cilek"];
console.log(meyveler.sort()); // alfabetik sıralar
console.log(meyveler);
console.log(meyveler.splice(1,0,"Kiraz")); // 1. indexe kiraz yaz 0 dan bu elemanı ekle
console.log(meyveler);
console.log(meyveler.splice(3,1,"Şeftali")); // 3. indexdekinin yerine şeftali yaz ve hangisini değiştrdiysen onu döndür
console.log(meyveler);
// splice() methodunda 0 kullanıyorsak araya yaz , 1 kullanıyorsak yerine yaz 
// işk yazılan indexi gösterir

//DİZİYE ERİŞİM METHODLARI
const sayilar = [1,2,"3","dort"];
console.log(sayilar.includes(1)); // true 1 var dizide
console.log(sayilar.includes(3)); // false 3 yok "3"var dizide
console.log(sayilar.includes("dort")); // true çunku var dizide

const elementler = ["Ates","Su","Toprak","Hava"];
console.log(elementler.join());    // Ates,Su,Toprak,Hava
console.log(elementler.join(""));  // AtesSuToprakHava
console.log(elementler.join("-")); // Ates-Su-Toprak-Hava

const hayvanlar = ["fil","kus","kedi","köpek"];
console.log(hayvanlar.slice(2));   // ['kedi', 'köpek']
console.log(hayvanlar.slice(1,3)); // ['kus', 'kedi']
// javadaki substring gibi çalışıyor

console.log(sayilar.toString());  //1,2,3,dort

console.log(hayvanlar.indexOf("köpek")); // baştan 3. indexde 3 verir

const yeniDizi = hayvanlar.concat(elementler); // iki diziyi birleştrr
// ['fil', 'kus', 'kedi', 'köpek', 'Ates', 'Su', 'Toprak', 'Hava']
console.log(yeniDizi);

// DİZİLEDRDE İTERASYON
// For dizisiyle döngü-iterasyon oluşturma
const rakamlar = [-5,4,6,8,0,12];
let toplam = 0;
for(let i=0; i<rakamlar.length; i++){
toplam += rakamlar[i];
}
console.log("Toplam : "+ toplam);

// soru : dizideki tek ve çiftleri toplayan methodu yazalım
const rakamlar2 = [1,2,3,4,5,6,7,8,9,10];


const TekCiftTopla = (dizi) => {
let tekToplam = 0;
let ciftToplam = 0;

for(let i=0; i< dizi.length; i++){
if(dizi[i]%2==0){
 ciftToplam += dizi[i];
} else {
    tekToplam += dizi[i];
}
}
console.log(`Tek toplam : ${tekToplam}  Cift Toplam : ${ciftToplam}`);
};

 TekCiftTopla(rakamlar2);

// FOR IN DÖNGÜSÜ (DİZİ VE NESNELERDE ÇALIŞIR)
// rakamlar2 dizisinin toplamını bulalım for in ile

let sonuc = 0;
for(let i in rakamlar2) {
 sonuc += rakamlar2[i];
}
console.log(sonuc);

// fonksiyona çevirelim
const toplamYeni = (ydizi) => {
let sonuc = 0;
for(let i in ydizi) {
 sonuc += ydizi[i];
}
console.log(sonuc);
}

toplamYeni(rakamlar);
toplamYeni(rakamlar2);

// soru : iki ayrı dizideki eşlesen indez elemanları birleştrrel
// ayrı bir diziye saklayan uygulama
const ad = ["ahmet","mehmet","can"];
const soyad = ["koc","bot","canan"];


const conct = (d1,d2) => {
let birleşmiş = [];
for(let i in d2,d1){ // sadece d1 , sadece d2 yada ikisi beraber yazılabilir
birleşmiş[i] = `${d1[i]} ${d2[i]}`
}
console.log(birleşmiş);
};
conct(ad,soyad);

// FOR OF İLE DİZİLERDE İTERASYON (DİZİ,STRİNG,MAP BİRÇOK VERİ YAPISINDA KULLANILIR)
const arabalar = ["mercedes","BMW","TOFAS","FERRARİ","RENO"];

const StringEkleme = (x) => {
let yazi = "";
for(let arac of x ) {
yazi += arac + " ";
}
return yazi;
};

console.log(StringEkleme(arabalar));

// FOR EACH METHODU İLE DİZİ İTERASYONU
// --> Orjinal diziyi değiştirmez
// --> döngüyü kırmak veya atlatmak mumkun değil

// Soru : bir dizideki elemanları her birini ayrı ayrı yazıran uygıulamayı 
// for each ile yapın
let ogrenciler = ["ayse","fatma","hayriye"];
ogrenciler.forEach(yazdir);
function yazdir(v){
    console.log(v);
}

// ayni soruyu arrow function ile yapma
ogrenciler.forEach((v) => console.log(v));

// Bir dizideki elemanların toplamını bularak bunu h2 elemanı olarak 
// web sayfasına yazdıran uygulamayı FOR EACH methodu ile yazınız.
const dizi3 = [4,5,6,7,8,9];



let toplam3 = 0;
const toplamaFonk = (d3) =>{
toplam3 += d3;
document.querySelector(".toplam").innerHTML = toplam3;
}
dizi3.forEach(toplamaFonk);

// aynı soruyu arrow functiob kulllarak yapalım.
let t = 0;
dizi3.forEach((s) => (t+=s));
document.querySelector(".toplam").innerHTML = t;

// FOR EACH METHODUNDA İNDEX KULLANIMI