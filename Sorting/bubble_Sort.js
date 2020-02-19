
function bubble_sort(arr){
    let temp;
    let count=0;
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<arr.length;j++){
            if(arr[j-1]>arr[j]){
                temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
                count++;
            }
        }
        if (count != 0) {
            count = 0;
        }
        else {
            break;
        }
        console.log(arr);
    }
    return arr;
}


const myarr = [8,7,6,5,1,2,3,5];
console.log(bubble_sort(myarr));
