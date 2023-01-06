function wordblank(mynoun,myadjective,myverb,myadverb){
    var result="";
    result += "The "+myadjective+" "+mynoun+" "+myverb+" "+"to the store "+myadverb+".";
    return result;
}
console.log(wordblank("dog","big","ran","quickly"));