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

//brickCalculator
function brickCalculator(storied){
    if(storied<=10){
        var feet1 = storied * 15;
        var brick = feet1 * 1000;
    }
    else if(storied<=20){
        var feet2 = storied * 12;
        var brick = feet2 * 1000;
    }
    else{
        var feet3 = storied * 10;
        var brick = feet3 * 1000;
    }
    return brick;


}
var final = brickCalculator(12);
console.log(final);