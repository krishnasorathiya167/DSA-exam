let arr = [11, 22, 33, 44, 55,66];

let search = (arr, element, start, end) => {
    let mid = (start + end) / 2;
    if (arr[mid] === element){
        return mid;
    } 
    else if (arr[mid] > element){
        return search(arr, element, start, mid - 1);
    } 
    else{
        return search(arr, element, mid + 1, end);
    }
}

let data = console.log(search(arr,44,0,arr.length));

