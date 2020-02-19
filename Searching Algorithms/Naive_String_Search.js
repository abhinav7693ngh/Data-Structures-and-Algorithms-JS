function stringSearch(mystr,me){
    const searchLength = me.length;
    const totalLength = mystr.length;
    let count= 0;
    let finalCount = 0;
    let j=0;
    if(searchLength>totalLength){
        return -1;
    }
    for(let i=0;i<=totalLength-searchLength;i++){
        while(j<searchLength){
            if(mystr[i+j]!=me[j]){
                break;
            }
            else{
                count++;
            }
            j++;
        }
        if (count == searchLength) {
            count = 0;
            finalCount = finalCount +1;
            j=0;
        }
    }
    return finalCount;
}

const mystring = 'Abhinavbhibhu';
console.log(stringSearch(mystring,'bh'));
