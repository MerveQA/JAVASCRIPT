// practise 01 : Console dan girilen bir sayının pozifif, negatif veya 0 olduğunu tespit ederek yazdırınız
let x = prompt("Please enter a number");
if(x>0){
console.log("It is pozitive");
} else if(x<0){
    console.log("It is negative");
} else {
    console.log("It is zero");
}

// practice 02 : Consoledan 3 tamsayı alarak bunların en büyüğünü yazdırınız
let a = prompt("Please enter first number");
let b = prompt("Please enter second number");
let c = prompt("Please enter third number");
if(a>=b && a>=c) {
    console.log("The biggest number is a");
}   else if(b>=c && b>=a){
    console.log("The biggest number is b");
}   else if(c>=a && c>=b){
    console.log("The biggest number is c");
}  

// practice 03 : 2 adet sayi için 4 işlem yapan hesap makinası yazınız
let s1 = prompt("Enter first number");
let s2 = prompt("Enter second number");
let islem = prompt("Enter a transaction");

if(islem=="addition"){
    console.log(s1+s2);
} else if(islem=="subtraction"){
    console.log(s1-s2);
} else if(islem=="multiplication"){
    console.log(s1*s2);
} else if(islem=="division"){
    console.log(s1/s2);
} else {
    console.log("incorrect entry");
}



// practice 04 : Claruseay Ders Günleri
let lesson =prompt("Enter the day you want to learn the course schedule");


switch (lesson) {
    case "monday":    
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
    case "saturday":
    case "sunday":
        switch (lesson) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
                lesson = "inClass";
                break;            
            case "friday":
                lesson = "teamwork";
                break;
            case "saturday":
                lesson = "inclass + workshop";
                break;
            case "sunday":
                lesson = "self-study";
                break;
        }
        break;
    default:
        alert("Wrong day entered");
    
}
console.log(lesson);

// practice 05 : Girilen nota göre geçti veya kaldı yazıran programı yazınız.
// Geçme notunu 50 olark kabul edebilirsiniz
let note = prompt("enter note");

const result = note>50 ? "PASS" : "FAIL";
console.log(result);

// practice 06 : Girilen nota gör gecti, kaldı veya şartlı gecti yazdıran programı yazalım
// note < 40 kaldı
// 40 < note < 50 sartlı gecti
// note > 50 gecti

let not = prompt(" enter your note ");

const result2 = not >=50 ? "PASS" : (not < 40 ? "FAIL" : "conditional pass" );
console.log(result2);

// practice 07 :Consoldan kişinin maaşını alın
// eğer girilen maaş asgari ücretten az ise maaşa %50 zam
// Aksi taktirde %10 zam

let salary = prompt(" Please enter your salary");
const minimumWage = 17000;

const increasedSalary = salary<minimumWage ? salary*1.5 : salary*1.1;
console.log(increasedSalary);

 
// practice 08 : /Consoldan kişinin gelir ve giderini alınız
// eğer geliri giderinden en az asgari ücret kadar fazla ise kredi verilebilir değilse kredi verilemez

let income = prompt("Please enter your income");
let expense = prompt("Please enter your expense");
// const minimumWage = 17000;
const crediResult = income-expense >=minimumWage ? "creditable" : "notCreditable";
console.log(crediResult);


