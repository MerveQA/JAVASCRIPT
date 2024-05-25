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

// aynı soruyu arrow function kulllarak yapalım.
let t = 0;
dizi3.forEach((s) => (t+=s));
document.querySelector(".toplam").innerHTML = t;

// FOR EACH METHODUNDA İNDEX KULLANIMI
// Örnek : Belirtilen dizinin her bir elemanının 5 katını alarak ayrı bir 
// dizide saklayan uygulamayı foreach methodu ile yazınız.
const dizi2 = [5,3,8,9,0];
const yenDizi = [];
dizi2.forEach(katAl);

function katAl (değer , indis , dizi2) {
    yenDizi[indis] = değer*5;
}
console.log(yenDizi);

// arrow function ile yapalım
dizi2.forEach((d,i)=> yenDizi[i]=d*5);
console.log(yenDizi);

// ARRAY MAP() METHODU
// Array.map() methodu , bir fonction ı parametre olarak alır.
// diziyi değiştirir ve yeni diziyi dmndürür.
// ilk dizi değişmez . yeni dizi döner
const yeniRakamlar = [4,6,7,8,9];
const carpilmisRakamlar = yeniRakamlar.map((x) => x*5);

// Örnek : Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
let isimler = ["ayse","fatma","hayriye"];
isimler = isimler.map((x)=> x.toUpperCase());
console.log(isimler);

// örnek : fiyatlar dizisindeki fiyatların euro ve dolar
// karşılıklarını hesaplatarak yeni dizilere kaydedin
const euro = 33.4;
const dolar = 32.3;
const tl = [100,150,50,20];
const dolartl = tl.map((x)=>x*dolar);
const eurotl = tl.map((x)=> x*euro);
console.log(dolartl);
console.log(eurotl);

// MAP() METHODU
// Örnek : tl dizisindeki urünlere zam yapılmak isteniyor. fiyatı 100 tlden fazla olanara 
// %10 zam , 100tl den az olanlara ise %15 zam yapılamk isteniyor. 
// Ayrıca zamlı olan yeni değerleri diziye saklamak istyrz.???

// filter methodu : diziden filtreleme saglar
// örnek : koordinatların sadece negatif olanlarını 
// yazdıralım
const koordinat = [12,-56,100,-78];
const negatifKoor = koordinat.filter((x)=>(x<0));
console.log(negatifKoor);

//PIPELINE (HAT)
//örnek : koordinatlar dizisindeki negatif koordinatları sec
// bunları pozitife cevir
// alt alta konsola yazdır
const pozitfeCevir = koordinat.
filter((x)=>x<0).
map((t)=>(t*-1)).
forEach((y)=>(console.log(y)));
