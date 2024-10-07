let arr = [ 19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,];

let primeArray = [];
let primenumber="";
for (let i=0;i<arr.length;i++){
    let factor = 0;
    for  (let j=1;j<=arr[i];j++){
        if(arr[i] % j == 0)
            factor += 1;
    }
    if(factor == 2){
        primenumber = primenumber + arr[i] + ",";
        primeArray =  [primenumber]
     }
}
console.log(primeArray)

for(let k=0;k<primeArray.length;k++){
    let sum=0;
    sum += primeArray[k]
    console.log(sum)
}
