console.log("Merhaba JS");
console.error("Bu bir hata");
console.warn("Bu bir uyaridir");
//alert("Bu bir alert");
//alert("neden gelmiyor");
const sayi1 = 5;
// Hatalı let 1sayi = 8;    
let versionNo = 5;
// Hatalı let version No = 6;
// sayi != Sayi;
 const isim = "Clarusway";
 const yazi = "hayat";
 console.log(isim);
 console.log(typeof isim);
 console.log(yazi);
 console.log(typeof yazi);

 const pi = 3.14;
 console.log(pi);  
 console.log(typeof pi);

 console.log("isim değişkeninin değeri", isim);
 console.log("pi değişkeninin değeri", pi);
 console.log("pi değişkeninin tipi", typeof pi);

 const dogruMu = true;
 console.log("dogruMu değişkeninin değeri", dogruMu);
 console.log("dogruMu değişkeninin tipi", typeof dogruMu);

 const bos = null;
 console.log("bos değişkeninin değeri", bos);
 console.log("bos değişkeninin tipi", typeof bos);

//  const adim ;  // hata başlangıç değeri atanmalı

let dil = "Java";
dil = "javaScript" ;
console.log("değişkebib degeri = ",dil);
console.log("değişkenin tipi = ", typeof dil);
dil = 5; // type da değişebilir


 kalanBorc = 15.5;
 console.log("bos değişkeninin değeri", kalanBorc);
 console.log("bos değişkeninin tipi", typeof kalanBorc);

 var fiyat ;
 fiyat = 23;
 console.log("değişken değeri",fiyat);

 fiyat = 45;
 console.log("değişken değeri",fiyat);

 var fiyat = 67;
 console.log("değişkenin değeri", fiyat);

 // Aritmetik operatorler
 const ekmek = 2;
 const yumurta = 40;
 const peynir = 55;
 const toplamHarcama = ekmek+peynir+yumurta;
 console.log("Harcama = "+(ekmek+yumurta+peynir));
 console.log(`Harcama = ${toplamHarcama}`); 

 const name = "merve";
 const nameID = 5;
 console.log(name+nameID);
 console.log(typeof (name+nameID));

 const yil = 2024;
 const dgmTrh = 1994;
 const yas = yil-dgmTrh;
 console.log(yas);


 //Toplamada string baskın ama çıkartmada number baskın 
 const q = 3;
 const q2 ="2";
 console.log(q-q2); // 1
 console.log(q2-q); // -1
 console.log("final result = "+q-q2);  // Not A Number NaN
  // String ile direk minus işlemi yapınca NaN cıkıyor

 // pi yukarıda tanımlı 
 const r = 3;
 const alan = pi*r**2;
 const cevre = 2*pi*r;
 console.log("alan = "+ alan);
 console.log("cevre = "+ cevre);

 let a = 5;
 let b = ++a;
 let c = --a;
 console.log(a , b, c);

 a = 5;
 console.log("a : "+ a); //5
 b = ++a; 
 console.log("b : "+ b); //6
 c = a++;
 console.log("c : "+ c); //6
 console.log("a : "+ a); //7

 let numara = 75;
 console.log("numara mod 2 :"+ numara%2);

 const s1 = 5;
 const s2 = 5;
 const s3 = "5";
 console.log(s1==s3);  // true
 console.log(s1===s3); // false

 // Mantıksal opr.
 let s4 = true;
 let s5 = false;
console.log(s4&&s5); // false
console.log(s4||s5); // true

s5 = null; // null : degersz değişken 
console.log(s4&&s5); // null
console.log(s4||s5); // true

// 0 , false , null , undefined ,"" , NaN dışındaki bütün durumlar
// true kabul edilir

let kus = "kus"; // degeri true
let kedi = "kedi" ; // degeri true
console.log(kus||kedi); //ilk true yu aradığı için ilk degeri verir yani kus
console.log(kus&&kedi); //ilk bastan sona kadar false arıyor. false bulamayınca son true olan kediyi yazdırıyor.











 






 






