const timeline = document.getElementById("timeline");

var container = document.createElement("div");
var loading = document.getElementById("loading");
const result = document.getElementById("result");
container.id = "content";
container.className = "hidden";

timeline.appendChild(container);

var random = document.getElementById("random");
container.appendChild(random);
var quotes = [
  "If You Expect Disappointment, <br> Then You Can Never Really Get Disappointed.",
  "You Can't Change The Past, <br> So Make Your Future Better.",
  "Do something you want, <br> just know your limitation.",
  "Huwag kang puro salita, patunayan mo sa gawa. ",
  "Keep going. <br> Your story is not yet over.",
  "If it's meant to be, It will be.",
  "I DONT'T BLAME YOU, BUT SOMETIMES I WISH WE NEVER MET",
  "Healing is about accepting not forgetting.",
  "ANG MGA BIDA AY PALAGING TALO SA UMPISA.",
  "Better days are coming. Stay positive.",
  "Become The Best Version Of Your Self.",
  "Wag mong ikumpara ang sarili mo sa iba,<br> dahil tulad ng isang LIBRO may sarili kang PAKSA",
  "Ang bawal na salita ay mga salitang 'Hindi ko na kaya'.",
  "Pwede naman umiyak,<br> pwedeng masaktan.. <br>pero bawal sumuko.",
  "Small steps makes progress.",
  "Stay busy, <br>so you don't have time to be sad.",
  "Crying is not defined weakness.",
];
var blank = [];

random.addEventListener("click", function () {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var quote = quotes[randomIndex];
  blank.push(quote);
  result.innerHTML = `“ ${quote} ”`;
  container.appendChild(result);
});

window.onload = function () {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var quote = quotes[randomIndex];
  blank.push(quote);
  result.innerHTML = `“ ${quote} ”`;
  container.appendChild(result);
};

// function delayAndRun() {
//   setTimeout(function () {
//     loading.style.display = "none";
//     container.className = "container";
//   }, 2000);
// }

// window.addEventListener("load", delayAndRun);
