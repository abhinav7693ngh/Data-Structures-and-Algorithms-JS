function collectOdd(arr){
    let myarr = [];
    if(arr.length === 0){
        return;
    }
    if(arr[0]%2 != 0){
        myarr.push(arr[0]);
    }
    myarr = myarr.concat(collectOdd(arr.slice(1)));
    return myarr;
}

console.log(collectOdd([1,2,3,4,5,6,7]));