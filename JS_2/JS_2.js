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
