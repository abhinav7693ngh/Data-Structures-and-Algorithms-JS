console.log('This is insertion sort!!');

function insertion(arr){
    let pointer = 0;
    let place;
    let toBeInserted;
    let temp;
    for(let i=1;i<arr.length;i++){
        for(let j=0;j<=pointer;j++){
            if (arr[i]<=arr[j]){
                place = j;
                toBeInserted = arr[i];
                break;
            }
            if(j==pointer){
                place = -1;
            }
        }
        if(place!=-1){
            for (let z = i; z > place; z--) {
                temp = arr[z];
                arr[z] = arr[z - 1];
                arr[z - 1] = temp;
            }
        }
        
        pointer++;
    }
    return arr;
}

const myarr = [5,1,2,6,3,9,4];
console.log(insertion(myarr));