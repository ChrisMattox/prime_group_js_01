var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

function bonus(employee) {
  var bonusArray = [];
  bonusArray[0] = employee[0];

  if(employee[3] <= 2){
    bonusArray[1] = 0;

  } else if(employee[3] == 3){
    bonusArray[1] = 0.04;

  } else if(employee[3] == 4){
    bonusArray[1] = 0.06;

  } else if(employee[3] == 5){
    bonusArray[1] = 0.10;
  }
  if (employee[1].length == 4) {
    bonusArray[1] += .05;
  }
  if (parseInt(employee[2]) > 65000) {
    bonusArray[1] -= .01;
  }
  if (bonusArray[1] > .13) {
      bonusArray[1] = .13;
  } else if (bonusArray[1] < 0) {
      bonusArray[1] = 0;
  }

  bonusArray[2] = parseInt(employee[2]) * (1 + bonusArray[1]);

  bonusArray[3] = Math.round(bonusArray[2]-employee[2]);

  return bonusArray;

}

for (var i = 0; i < employees.length; i++) {
  console.log(bonus(employees[i]));
}
