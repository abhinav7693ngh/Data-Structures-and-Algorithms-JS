function collectOdd(arr){
    let myvalues = [];
    function helper(arr){
        if(arr.length === 0){
            return;
        }
        if(arr[0]%2!=0){
            myvalues.push(arr[0]);
        }
        helper(arr.slice(1));
    }
    helper(arr)
    console.log(myvalues);
}

collectOdd([1,2,3,4,5,6,7]);