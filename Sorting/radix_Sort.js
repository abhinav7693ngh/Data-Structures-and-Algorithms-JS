console.log('This is Radix Sort for base 10 numbers !!');
function count(num){
    let counting = 0;
    while(num!=0){
        num = parseInt(num/10);
        counting = counting + 1;
    }
    return counting;
}
function radixSort(){
    let myans = []
    for(let k=0;k<10;k++){
        myans[k] = [];
    }
    let myarr = [43,156,60,35,1];
    let maxDigit = -Infinity;
    for(let i=0;i<myarr.length;i++){
        let current = count(myarr[i]);
        if(current>=maxDigit){
            maxDigit = current;
        }
    }
    for(let j=1;j<=maxDigit;j++){
        if (j === 1) {
            for (let j = 0; j < myarr.length; j++) {
                let myindex = parseInt(myarr[j] % 10);
                myans[myindex].push(myarr[j]);
            }
        }
        else {
            let mydivisor = 10 ** (j - 1);
            for (let z = 0; z < 10; z++) {
                myans[z] = [];
            }
            for (let j = 0; j < myarr.length; j++) {
                let helper = parseInt(myarr[j] / mydivisor);
                let myindex = parseInt(helper%10);
                myans[myindex].push(myarr[j]);
            }
            myarr = [];
            for(let y=0;y<10;y++){
                for(let c=0;c<myans[y].length;c++){
                    myarr.push(myans[y][c]);
                }
            }
        }
    }
    console.log(myans);
    console.log(myarr);
}
radixSort();
