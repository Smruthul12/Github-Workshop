function switchcase(val){
    ans="";
    switch(val){
        case 1:
            ans="alpha";
            break;
        case 2:
            ans="beta";
            break;
        case 3:
            ans="gamma";
            break;
        case 4:
            ans="charlie";
            break;
        default:
            ans="omega"
    }
    return ans;
}
console.log(switchcase(-4));