//without rest parameter 
/*
const sum = (function() {
        return function sum(x,y,z){
            const args=[x,y,z];
            return args.reduce((a,b) => a+b,0);
        };
    })();
console.log(sum(1,2,3));
*/


//with rest
const sum = (function() {
    return function sum(...args){    
        return args.reduce((a,b) => a+b,0);
    };
})();
console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5));
console.log(sum(1,2,3,4,5,6,7,8,9));

