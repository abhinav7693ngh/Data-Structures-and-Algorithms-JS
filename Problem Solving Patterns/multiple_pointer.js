// ===== Naive Approach ==== //

// const myarray = [1, 2, 3, -4, -3, -2];
// const myNew = myarray.sort();
// console.log(myNew);


// const myfunc = (myn) => {
//     for (let i in myn) {
//         for (let j of myn) {
//             if (myn[i] + j == 0) {
//                 const arr = new Array();
//                 arr.push(myn[i]);
//                 arr.push(j);
//                 console.log(arr);
//                 break;
//             }
//         }
//         break;
//     }
// }

// myfunc(myNew);

// ==== End ==== //

const array = [-4,-3,-2,-1,1,3,5];

let left = 0;
let right = array.length - 1;

while (left < right){
    let sum = array[left] + array[right];
    if (sum == 0 ){
        console.log(array[left],array[right]);
        break;
    }
    else if(sum>0){
        right--;
    }
    else{
        left++;
    }
}