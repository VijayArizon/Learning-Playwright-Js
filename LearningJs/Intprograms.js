// Reversing an integer

const a = 8675;
let num = a;

let rev = 0;
while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);  // floor division
}

console.log(rev); // Output: 5768


// reversing a string

const word = "hello world";
let reversedWord = "";
for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}

console.log(reversedWord); // Output: dlroW olleH

// vowels 

for (let i = 0; i < word.length; i++) {

    if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
        //clconsole.log(`Is a vowel: ${word[i]}`);
    } else {
        // console.log(`Is not a vowel: ${word[i]}`);
    }

}

// largest number in an array

let ar = [10, 2, 3, 4, 5, 6, 7, 8, 9];
let max = ar[0];

for (let i = 0; i < ar.length; i++) {
    if (ar[i] > max) {
        ar[i] = max;
    }
}

console.log("Largest in an array - " + max);

// sum of a number

let nums = a;

let sum = 0;

while (nums > 0) {
    let rem = nums % 10;
    sum = sum + rem;
    nums = Math.floor(nums / 10);
}

console.log("Sum of a number - " + sum);

// remove duplicates from an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5];

let result = [];

for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let j = 0; j < result.length; j++) {
        if (arr[i] === result[j]) {
            found = true;
            break;
        }
    }

    if (!found) {
        result[result.length] = arr[i];
    }
}

console.log(result);

const nondup = new Set();

//console.log("Remove duplicates from an array - "+[...nondup]);

for (let ar of arr) {
    if (!nondup.has(ar)) {
        nondup.add(ar);
    }
}

console.log("Remove duplicates from an array - " + [...nondup]);

// let map = new Map();
// for (let ar of arr){

//     if(map.has(ar)){
//         map.set(ar,map.get(ar)+1);
//     }
//     else{
//         map.set(ar,1);
//     }
// }
//     for (let [key,value] of map){
//         if(value>=1){

//  console.log(key);
//         }
//     }

//     console.log("Remove duplicates from an array - "+[...map.keys()]);

console.log("---------Left Half Pyramid ----------");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {

        row += "*";
    }

    console.log(row);

}

console.log("---------Right Half Pyramid----------");
// pyramid pattern

for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {

        row += "*";
    }

    console.log(row);

}

console.log("---------Triangle Half Pyramid----------");

let rows=  7;
for (let i = 1; i <= rows; i++) {

    let val = "";
    
    for (let j = i; j <rows; j++) {
        val += " ";
    }

    for (let k = 1; k <=(2*i-1); k++) {
       val += "*";
    }
console.log(val);
}

console.log("---------Right to Left Half Pyramid----------");

for (let i = 1; i <= 5; i++) {
    let st="";
for (let j = i; j <=5; j++) {

st+=" ";

}
for (let k = 1; k <=i; k++) {
    st+="*";
}

console.log(st);
}

console.log("--------- Inverted Right to Left Half Pyramid----------");


for (let i = rows; i >=1; i--) {
let sr="";
for (let j = 1; j <=i; j++) {
         sr+="*";
}

console.log(sr);
}
const wrd="Testing@123";
let upper=0;
let lower=0;
let number=0;
let special=0;

if(wrd.length<8){
console.log("Password should be minimum 8 characters");
}

for(let i=0;i<wrd.length;i++){

    if(wrd[i]>='A' && wrd[i]<='Z'){
        upper++;
    }
     else if(wrd[i]>='a' && wrd[i]<='z'){
        lower++;
    }
     else if(wrd[i]>='0' && wrd[i]<='9'){
        number++;
    } 

    else{
        special++;
    }  

}

 if(upper>0 && lower>0 && number>0 && special>0){
console.log("Strong Password");
}
else{
    console.log("Weak Password");
}

const regeXPasword= /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-!@#$%^&*()_+=]).{8,}$/;
if(regeXPasword.test(wrd)){
    console.log("Strong Password");
}else{
    console.log("Weak Password");
}


// print duplicates

const abc ="testing@123";
let dup={};

const map= new Map();

for (let i=0;i<abc.length;i++){

    if(map.has(abc[i])){
        map.set(abc[i],map.get(abc[i])+1);
    }else{
map.set(abc[i],1);
    }
}


for(const [key, value] of map){
    if(value>1){
        console.log(key, value);
    }
}


const sums =(a,b)=>{
   a+b;
}