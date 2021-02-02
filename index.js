var myVar = setInterval(myTimer, 1000);

function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

function myTimer() {
    let d = new Date();
    let x = document.querySelector(".time");
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    x.innerHTML = h + ":" + m;
}