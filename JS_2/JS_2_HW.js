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


switch (lesson.toLowerCase()) {
    case "monday":    
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
    case "saturday":
    case "sunday":
        switch (lesson.toLowerCase()) {
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

// practice 05 :

// practice 06 :

// practice 07 :
 
// practice 08 :


