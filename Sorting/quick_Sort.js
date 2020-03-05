function pivot(arr,start,end){
    let pointer = start;
    const toSwap = arr[start];
    for(let i=start;i<=end;i++){
        if(toSwap>arr[i]){
            temp = arr[i];
            arr[i] = arr[pointer];
            arr[pointer] = temp;
            pointer = pointer+1;
        }
    }
    console.log(arr);
    return pointer;
}


function quickSort(arr, start = 0, end = arr.length - 1){
    if(start<end){
        breakPoint = pivot(arr, start, end);
        console.log(breakPoint);
        quickSort(arr, start, breakPoint - 1);
        quickSort(arr, breakPoint + 1, end);
    }
    return arr;
}


const my  = [5,4,2,1,3];
quickSort(my,0,my.length-1);