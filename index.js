let score = 0;
let spc = 1;
let cps = 0
if (localStorage.getItem("score") == null) {
  console.log("User has not played before! Score is null!")
  localStorage.setItem("score", "0")
} else {
  console.log("score")
  score = localStorage.getItem("score")
  console.log(typeof score)
  score = parseInt(score)
}

if (localStorage.getItem("powerups_spc") == null) {
  console.log("User has not played before! Spc is null!")
  localStorage.setItem("powerups_spc", "1")
} else {
  spc = localStorage.getItem("powerups_spc")
  spc = parseInt(spc)
}

if (localStorage.getItem("powerups_cps") == null) {
  console.log("User has not played before! Cps is null!")
  localStorage.setItem("powerups_cps", "0")
} else {
  cps = localStorage.getItem("powerups_cps")
  cps = parseInt(cps)
}

function saveState() {
  localStorage.setItem("powerups_cps", cps)
  localStorage.setItem("powerups_spc", spc)
  localStorage.setItem("score", score)
}

function got_clicked() {
  console.log("Got Clicked")
  score += spc;
  saveState();
  document.getElementById('score').innerHTML = "Doges: " + score;
}

function upgrade() {
  if (score >= 10) {
    spc += 0.5
    score -= 10;
    saveState();    
    document.getElementById('score').innerHTML = "Doges: " + score;
  }
}
function upgrade_cps() {
  if (score >= 25) {
    cps += 0.5
    score -= 25;
    saveState();
    document.getElementById('score').innerHTML = 'Doges: ' + score;
  }
}
function upgradeone() {
  if (score >= 50) {
    spc += 1
    score -= 50;
    saveState();
    document.getElementById('score').innerHTML = "Doges: " + score;
  }
}
function upgrade_cpsone() {
  if (score >= 100) {
    cps += 1
    score -= 100;
    saveState();
    document.getElementById('score').innerHTML = 'Doges: ' + score;
  }
}
function upgradetwo() {
  if (score >= 200) {
    spc += 2.5
    score -= 200;
    saveState();
    document.getElementById('score').innerHTML = "Doges: " + score;
  }
}
function upgrade_cpstwo() {
  if (score >= 250) {
    cps += 2.5
    score -= 250;
    saveState();
    document.getElementById('score').innerHTML = 'Doges: ' + score;
  }
}
function upgradethree() {
  if (score >= 500) {
    spc += 5
    score -= 500;
    saveState();
    document.getElementById('score').innerHTML = "Doges: " + score;
  }
}
function upgrade_cpsthree() {
  if (score >= 750) {
    cps += 5
    score -= 750
    saveState();
    document.getElementById('score').innerHTML = 'Doges: ' + score;
  }
}
setInterval(function() {
  score += cps;
  saveState();
  document.getElementById('score').innerHTML = "Doges: " + score;
}, 1000)
