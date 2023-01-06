/*
var obj={
    hat:"ballcap",
    shirt:"jersey",
    1:"male",
    "shoes in":"cleats"
};

var hatvalue=obj.hat;
var shirtvalue=obj.shirt;
var shoesvalue=obj['shoes in'];
var genderno=1;
var gender=obj[genderno];
console.log(hatvalue);
console.log(shirtvalue);
console.log(shoesvalue);
console.log(gender);

//obj.bark="bowbow";
delete obj.hat;
console.log(obj);
*/

//usings objects for lookups
function look(target){
    var lookup={
        omega:"Superior legend",
        alpha:"Legend",
        beta:"Army",
        gamma:"Navy",
        delta:"Airforce"
    };
    if(lookup.hasOwnProperty(target)){
        var result=lookup[target];
        console.log("\n"+result+"\n");
    }
    else{
        console.log("\nProperty Not Found!!\n");
    }
    
}
look("omega");