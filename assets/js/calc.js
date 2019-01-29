var inputLabel = document.getElementById("inputLabel");
inputLabel.value = "0";

function calculate(event) {
  var number = event.innerHTML;
  console.log(number);

  if (number == "=") {
    inputLabel.value = eval(inputLabel.value);
  } else if (number == "AC") {
    inputLabel.value = "0";
  } else if (inputLabel.value == "0") {
    inputLabel.value = number;
  } else {
    inputLabel.value += number;
  }
}
document.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    inputLabel.value = "0";
  }
});

/* Number Increment */
var i = 0;
function numIncrement() {
  var incrementnum = document.getElementById("number").value;
  i += 1;
  console.log(incrementnum);
  document.getElementById("number").value = i;
  if (incrementnum == "14") {
    document.getElementById("btnDisabled").disabled = true;
    document.getElementById("text").innerHTML = "Number Stopped";
  }
}
