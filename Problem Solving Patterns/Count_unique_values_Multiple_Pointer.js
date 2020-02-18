let myarray = [1, 1, 1, 2, 3, 3, 4, 5, 6, 6, 7, 7, 7, 9];
let i = 0;
let j = 1;
while (j < myarray.length) {
    if (myarray[i] == myarray[j]) {
        j++;
    }
    else {
        i++;
        myarray[i] = myarray[j];
        j++;
    }
}
console.log(i + 1);