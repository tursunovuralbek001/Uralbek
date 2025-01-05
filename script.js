function ochish() {
  document.getElementById("mySidebar").style.display = "block";
}

function yopish() {
  document.getElementById("mySidebar").style.display = "none";
}

//Clock
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  
document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10 margin-top:50px;
  return i;
}