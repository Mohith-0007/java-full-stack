//write code for the give sides are valid triangle or not?
// let a=10;
// let b=4;
// let c=5;
// if(a+b>c && b+c>a &&c+a>b){
//     console.log("valid");
// } else {
//     console.log("Not valid");
// }
//------------------------------------------------------------------------------
//write fizzBuzz 
//1.multiplt of 3->fizz. multtiple of 5->buzz. multiple of both(15)->Fizzbuzz.
// let num=15;
// if(num%15==0){
//     console.log("fizzbuzz");
// } else if(num%3==0){
//     console.log("fizz");
// } else if(num%5==0){
//     console.log("Buzz");
// } else {
//     console.log(num);
// }
//-----------------------------------------------------------------------------
//write program using a for loop to check whether a number is prime.
// let num=7;
// let isprime=true;
// for(let i=2;i<num;i++){
//     if(num%i==0){
//         isprime=false;
//         break;
//     }
// }
// if(isprime){
//     console.log("prime");
// } else{
//     console.log("not prime");
// }
//write a program using a while loop to reverse a number.
let num=123;
let rev=0;
while(num>0){
    let rem=num%10;
    rev=rev*10+rem;
    num=Math.floor(num/10);
} 
console.log(rev);