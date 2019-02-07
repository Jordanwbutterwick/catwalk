var button = document.getElementById("startbutton");

function sayHi() {
  alert("STARTED");
}

button.addEventListener("click", startAll);

var cat = document.getElementById("cat");
var walkForward = true;

function startAll() {
  startAll.disabled = true;
  function catWalk() {
    if (cat.offsetLeft >= document.body.offsetWidth - cat.offsetWidth) {
      walkForward = false;
    }

    if (cat.offsetLeft <= 0) {
      walkForward = true;
    }
    if (walkForward) {
      cat.style.transform = "scaleX(1)";
      cat.style.left = cat.offsetLeft + 1 + "px";
    } else {
      cat.style.transform = "scaleX(-1)";
      cat.style.left = cat.offsetLeft - 1 + "px";
    }
  }
  var catTimer = setInterval(catWalk, 5);

  var cattreats = document.getElementById("cattreats");
  var shake = true;

  function treatshake() {
    if (
      cattreats.offsetLeft >=
      document.body.offsetWidth - cattreats.offsetWidth
    ) {
      shake = false;
    }

    if (cattreats.offsetLeft <= 0) {
      shake = true;
    }
    if (shake) {
      cattreats.style.transform = "scaleX(1)";
      cattreats.style.left = cattreats.offsetLeft + 2 + "px";
    } else {
      cattreats.style.transform = "scaleX(-1)";
      cattreats.style.left = cattreats.offsetLeft - 2 + "px";
    }
  }
  var shakeTimer = setInterval(treatshake, 5);

  var cat2 = document.getElementById("cat2");
  var walkForward2 = true;

  function catWalk2() {
    if (cat2.offsetLeft >= document.body.offsetWidth - cat2.offsetWidth) {
      walkForward2 = false;
    }

    if (cat2.offsetLeft <= 0) {
      walkForward2 = true;
    }
    if (walkForward2) {
      cat2.style.transform = "scaleX(1)";
      cat2.style.left = cat2.offsetLeft + 20 + "px";
    } else {
      cat2.style.transform = "scaleX(-1)";
      cat2.style.left = cat2.offsetLeft - 20 + "px";
    }
  }
  var catTimer2 = setInterval(catWalk2, 1);

  function touchedCat() {
    alert("DON'T TOUCH MY FUCKING CAT");
  }

  cat.addEventListener("click", touchedCat);
}
