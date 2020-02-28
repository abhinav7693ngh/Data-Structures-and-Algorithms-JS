function merge(arr1, arr2){
    let my = new Array();
    let final;
    while(arr1.length!=0 || arr2.length!=0){
        if(arr1[0]<=arr2[0]){
            my.push(arr1[0]);
            arr1.shift();
        }
        else if(arr2[0]<=arr1[0]){
            my.push(arr2[0]);
            arr2.shift();
        }
        else if(arr1.length==0){
            final = my.concat(arr2);
            break;
        }
        else if(arr2.length==0){
            final = my.concat(arr1);
            break;
        }
    }
    return final;
}

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    if(arr.length > 1){
        let point = Math.floor(arr.length / 2);
        let first = arr.slice(0,point);
        let second = arr.slice(point,arr.length);
        first = mergeSort(first);
        second = mergeSort(second);
        return merge(first,second);
    }
}





const myarr = [2,6,1,7,3,10,5];
console.log(mergeSort(myarr))


