function getMilk(money) {           //------>함수 getMilk라는이름을 부여하고 (money) 값이 나올수있게 이름을 붙여줌
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var numberOfBottles = Math.floor(money / 1.5);   //--------------->변수 이름을 numberOfBottles로 주고 이것의 값은 
    // 입력하는 머니값의 나누기 1.5된 값을 항상 도출
    // Math.floor는 소수점으로 나오는값 뒤를 반내림해줌

    console.log("buy" + numberOfBottles + "bottles of milk"); //--------------->나오는 alert는 money값 5에서 1.5를 나눈값
    //3.33에서 반내림값을 하고 3이 나옴.
    //결국 우유를 $5 머니를 들고가서 3병(병당$1.5)을 사옴

    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}
getMilk(5);  //------->MiLK를 사는데 5$를 부여해줌.

//------------------------------------------------------------------------------
function getMilk(money, costPerBottle) {    // 10$로 1.5$짜리를 사러감        
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    console.log(" buy " + calcBottles(money, costPerBottle) + " bottles of milk"); //10$로 1.5$짜리 6병을삼


    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return calcChange(money, 1.5); //===== 0원의 거스름돈

}
function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;                //=====(10$ / 1.5$= 반내림 하고 6)
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;                                //거스름돈 반환 (10 % 2.5 == 0 )
}
console.log("Hello master, here is your " + getMilk(10, 1.5) + "change.");           
