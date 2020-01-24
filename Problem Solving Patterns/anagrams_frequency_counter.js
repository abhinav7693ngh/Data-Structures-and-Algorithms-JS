function isAnagram(str1, str2){
    arr1 = [];
    arr2 = [];
    for (let val of str1){
        arr1.push(val);
    }
    for (let val of str2){
        arr2.push(val);
    }
    if(arr1.length != arr2.length){
        return false;
    }
    else{
        frequencyCounter1 = {};
        frequencyCounter2 = {};
        for (let val of arr1){
            frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        }
        for (let val of arr2){
            frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
        }
        console.log(frequencyCounter1,frequencyCounter2);
        if(Object.keys(frequencyCounter1).length!=Object.keys(frequencyCounter2).length){
            return false;
        }
        for (let key in arr1){
            if(! key in frequencyCounter2 ){
                return false;
            }
            if(! (frequencyCounter2[key] === frequencyCounter1[key])){
                console.log('iii');
                return false;
            }
        }
        return true;
    }
}

console.log(isAnagram('abbccrt','bbacctr'));