// Maximum sum of n consecutive  elements in an array // 

// ==== Naive approach ==== //


// const maxSubArraySum = (arr,n) => {
//     console.log('I am here');
//     let mymax = -Infinity;
//     let sum = 0;
//     let j=0;
//     for (let i=0;i<arr.length-n+1;i++){
//         j=0;
//         while(j<n){
//             sum += arr[i+j];
//             j++;
//         }
//         console.log(sum);
//         if(sum >= mymax){
//             mymax = sum;
//         }
//         sum = 0;
//     }
//     console.log("Maximum sum : ",mymax);
// }

// const myarr = [1,2,3,4];
// maxSubArraySum(myarr,2);




// === Below is Sliding Window approach === //


const maxSubArraySum = (arr,n) => {
    let maxSum = -Infinity;
    let sum = 0;

    for(let i=0;i<arr.length-n+1;i++){
        if(i===0){
            for(let j=0;j<n;j++){
                sum += arr[i+j];
            }
        }
        else{
            sum = sum - arr[i-1] + arr[i+n-1];
        }
        if(sum>=maxSum){
            maxSum = sum;
        }
        console.log(maxSum);
    }
}

const myarr = [1,2,3,4];
maxSubArraySum(myarr,2);





