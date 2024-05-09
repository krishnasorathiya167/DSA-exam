let arr = [-1,2,5,-3,6,-2,7];

let max = 0;
let element = arr[0];

for(i=0;i<arr.length;i++){
    element = arr[i]+element;
    if(element<0){
        element = 0;
    }
    if(max < element){
        max = element;
    }
}
console.log(max);