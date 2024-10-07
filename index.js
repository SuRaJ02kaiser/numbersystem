let arr=[1,2,3,4,5]
let even = ""
let odd = ""
 
for(let i=0;i<arr.length;i++){
    if(arr[i]%2 == 0)
        even = even + arr[i]
if(arr[i]%2 == 1){
    odd = odd + arr[i]
}
console.log("Even",even)
console.log("Odd",odd)
}