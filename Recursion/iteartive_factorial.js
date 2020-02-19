
function fact(n){
    let ans=1;
    for(let i=1;i<=n;i++){
        ans *= i;
    }
    return ans; 
}

console.log(fact(5));