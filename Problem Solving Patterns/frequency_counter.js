function same(first,second){
    if(first.length != second.length){
        return false;
    }
    else {
        let count=0;
        temp = [];
        for (let i of first){
            temp.push(i*i);
        }
        for (let sq of temp){
            if(second.find((ele)=>ele==sq)){
                count = count +1;
            }
        }
        if(count == second.length){
            return true;
        }
        else{
            return false;
        }
    }
}

console.log(same([1,2,3],[1,4,4]));