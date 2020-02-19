// const my = (num) => {
//     if(num<=0){
//         return;
//     }
//     console.log(num);
//     my(num-1);
// }

// my(5);

// function sumRange(n){
//     if(n===1){
//         return 1;
//     }
//     return n + sumRange(n-1);
// }

// const ans = sumRange(5);
// console.log(ans);


function fact(n){
    if(n==1){
        return 1;
    }
    return n*fact(n-1);
}

console.log(fact(5));