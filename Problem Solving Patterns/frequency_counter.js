// === My solution === //

// O(n^2)

// function same(first,second){
//     if(first.length != second.length){
//         return false;
//     }
//     else {
//         let count=0;
//         temp = [];
//         for (let i of first){
//             temp.push(i*i);
//         }
//         for (let sq of temp){
//             if(second.find((ele)=>ele===sq)){
//                 count = count +1;
//             }
//         }
//         if(count == second.length){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
// }

// console.log(same([1,2,3],[1,4,4]));


// ============================= //


// ===== Below is O(n) approach ==== //

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    else{
        let frequencyCounter1 = {};
        let frequencyCounter2 = {};
        for (let val of arr1){
            frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        }
        for (let val of arr2){
            frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
        }
        console.log(frequencyCounter1,frequencyCounter2);
        for (let key in frequencyCounter1){
            if(! key in frequencyCounter1){
                return false;
            }
            if(!(frequencyCounter2[key**2] === frequencyCounter1[key])){
                return false;
            }
        }
        return true;
    }
}

console.log(same([1,2,3],[1,9,9]));