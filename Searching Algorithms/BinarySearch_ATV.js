function binarySearch(arr,me){
    var left = 0;
    var right = arr.length -1;
    var middle = Math.floor((left+right)/2);
    console.log(left,right,middle);
    while(arr[middle]!=me){
        if(left>=right){
            return -1;
        }
        if(me  < arr[middle]){
            right = middle-1;
        }
        else{
            left = middle+1;
        }
        middle = Math.floor((left+right)/2);
    }
    return middle;
}
const myarray = [1,2,3,4,5,6,7];
console.log(binarySearch(myarray,6));