console.log('This is insertion sort');

function insertion(arr){
    let min = 0;
    let count =0;
    let temp;
    for (let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]>=arr[j]){
                min = j;
                count++;
            }
        }
        if(count > 0){
            temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
            count = 0;
        }
        min=i+1;
    }
    return arr;
}

const myarr = [2,1,9,9,7,4,5,6];
console.log(insertion(myarr));