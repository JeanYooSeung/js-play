function lifeInWeeks(age) {
    var yearsRenaining = 90 - age;
    var days = yearsRenaining * 365;
    var weeks = yearsRenaining * 52;
    var months = yearsRenaining * 12;
    console.log(" you have " + days + " days, " + weeks + " weeks, and " + months + "months left.");
}
lifeInWeeks(30)      //------90세까지 산다고 했을때 남은 달,주,일 수