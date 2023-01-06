function nxtinline(arr,item){
    arr.push(item);
    return arr.shift();
}

var arr=[1,2,3,4,5];

console.log("before:"+JSON.stringify(arr));
console.log(nxtinline(arr,6));
console.log("after:"+JSON.stringify(arr));

