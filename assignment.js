// feetToMile
function feetToMile(feet) {
    const mile = feet*0.00018939;
    return mile;
}
let result = feetToMile(12);
console.log(result);

//woodCalculator
function woodCalculator(chair,table,bed){
    const chairCount = chair * 1;
    const tableCount = table * 2;
    const bedCount = bed * 3;
    const totalWood = chairCount + tableCount + bedCount;
    return totalWood;

}
let woodResult = woodCalculator(5,7,2);
console.log(woodResult);

//tinyFriend
function tinyFriend(numbers){
    var tiny =numbers[0];
    for(var i=0; i<numbers.length; i++){
    var friendList = numbers[i];
    if(friendList.length < tiny.length){
    tiny = friendList;
    }
     }
    return tiny;
}
var friendsList = ['karimullah','monirul','rayhan','hasanuzzaman','mehjabin'];
console.log(tinyFriend(friendsList));

