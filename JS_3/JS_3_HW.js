// SORU : Bir dairenin alanını hesaplayan fonksiyonu arrow 
// fonksiyon olarak yazınız. Yarıçap prompt ile girilmeli ve sonuç ana programda yazdırılmalıdır.


let radius = prompt("Enter the radius of the circle whose area you want to calculate : ");

const area = (r) => {
    const pi = 3.14;
    let area = pi*(r**2);
    console.log("The area is : "+area);
};
area(radius);

// HW 1: Taban ve yükseklik değerlerini parametre olarak alan ve 
// bir üçgenin alanını hesaplayarak ana programa döndüren fonksiyonu 
// yazınız.

let sole = prompt("please enter insole length");
let height = prompt("please enter the height");

const areaTr = (s,h) => {
 let areaTriangle = (s*h)/2;
 return areaTriangle
}
let triangleArea = areaTr(sole,height);
console.log("The area is : "+ triangleArea);

// HW 2: kareAl, küpAl, ÜsAl şeklinde üç adet farklı arrow fonksiyonu
// tanımlayın. Bu fonksiyonların ana programdan gereken parametreleri
// alarak sonuçları ana programa döndürmeli.

const square = (x) => {
    return x*x;
};
const cube = (y) => {
    return y**3
};
const expnt = (number,exp) => {
    return number**exp;
};

let sq = square(5);  // 25
let cb = cube(3);    // 27
let ex =expnt(2,4); // 16

console.log(sq);
console.log(cb);
console.log(ex);

// HW 3 : //Yıl değerini parametre alan ve bu yılın artık yıl olup olmadıgını 
// hesaplayan sonucu ana programa dmndüren foncsiyonu funcsion-expression
// kullanarak yazın ..
const tekMi = function(x){
    return x%2 ? "TEK" : "ÇİFT";
   }

   const artikYilMi = function(yil) {
    if( yil % 4 === 0 && yil % 100 !== 0 || (yil % 400 === 0)) {
         return "Artik yil";
    } else {
        return "Artik yil değil";
    }
   };
   console.log(artikYilMi(2024));
