// practise 09 : Bireyler dizisindeki kişilerden
// adı "Belirtilen harf" ile başlayanları secerek 
// ayrı bir diziye saklayan fonk yazın

const bireyler = ["alice", "Bob", "Tiff", "Bruce", "Ahmet", "Mehmet", "Veli"];

let harf = prompt("Bir harf giriniz : ");

// küçük büyük harf duyarlı
const belirtlenHarfFilter = bireyler.
filter((x)=>x.startsWith(harf)).
forEach((y)=>(console.log(y)));

// kücük büyük harf duyarsız
let harf2= prompt("Bir harf giriniz : "); 

const duyarsiz = bireyler.
filter((y)=>(y.toLowerCase()).
startsWith(harf.toLowerCase()))
.forEach((t)=>(console.log(t)))
;
