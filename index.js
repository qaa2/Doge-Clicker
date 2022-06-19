let score = 0
let spc = 1;
let cps = 0
function got_clicked() {
  console.log("Got Clicked")
  score += spc;
  document.getElementById('score').innerHTML = "Doges: " + score;
}
function upgrade() {
  if (score >= 10) {
    spc += 0.5
    score -= 10;
    document.getElementById('score').innerHTML = "Doges: " + score;
  }
}
function upgrade_cps() {
  if (score >= 25) {
    cps += 0.5
    score -= 25;
    document.getElementById('score').innerHTML = 'Doges: ' + score;
  }
}
function upgradeone() {
  if (score >= 50) {
    spc += 1
    score -= 50;
    document.getElementById('score').innerHTML = "Doges: " + score;
  }
}
function upgrade_cpsone() {
  if (score >= 100) {
    cps += 1
    score -= 100;
    document.getElementById('score').innerHTML = 'Doges: ' + score;
  }
}
function upgradetwo() {
  if (score >= 200) {
    spc += 2.5
    score -= 200;
    document.getElementById('score').innerHTML = "Doges: " + score;
  }
}
function upgrade_cpstwo() {
  if (score >= 250) {
    cps += 2.5
    score -= 250;
    document.getElementById('score').innerHTML = 'Doges: ' + score;
  }
}
function upgradethree() {
  if (score >= 500) {
    spc += 5
    score -= 500;
    document.getElementById('score').innerHTML = "Doges: " + score;
  }
}
function upgrade_cpsthree() {
  if (score >= 750) {
    cps += 5
    score -= 750;
    document.getElementById('score').innerHTML = 'Doges: ' + score;
  }
}
setInterval(function() {
  score += cps;
  document.getElementById('score').innerHTML = "Doges: " + score;
}, 1000)
