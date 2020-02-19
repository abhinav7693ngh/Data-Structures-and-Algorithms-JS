function myFind(arr,my){
    let count = 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]==my){
            count++;
            return i;
        }
    }
    if(count != 1){
        return -1;
    }
}

const myarr = [3,4,5,1,2,21,34,5,6,89,90];
console.log(myFind(myarr,91));
