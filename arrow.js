// function doubleIt(num){
//     return num * 2;
// }
//another way 
// const doubleIt = function myFun(num){
//     return num * 2;
// }
const doubleIt = (num)=>num * 2; //() is not important
const add = (x,y)=>x + y;
const give5 =()=>5;//For empty peremeter
const doMath =(x,y)=>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = add(50,20);
const result2 = give5();
const result3 = doMath(40,10);
console.log(result3);
