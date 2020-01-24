// function addUpto(n){
//     let total = 0;
//     for(let i=1;i<=n;i++){
//         total = total + i;
//     }
//     return total;
// }


// function addUptoN(n){
//     const myans = (n * (n+1))/2;
//     return myans;
// }

// console.log(addUptoN(100));


// let myObject = {
//     firstName : 'Abhinav',
//     lastName : 'Singh',
//     college : 'IIIT'
// }

// console.log(myObject['firstName']);
// console.log(myObject.firstName);
// console.log(Object.hasOwnProperty("firstName"));

// for (let i in myObject){
//     console.log(myObject[i]);
// }

let names = ['Abhinav','Singh','IIIT'];
names[names.length] = 'new';
console.log(names);