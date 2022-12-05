var button = document.getElementById("submit");
var leftnumber = 232;
var topnumber = 10;
var login = "dan";
var mdp = "Neta";
var openEye = document.getElementById("open");
var closeEye = document.getElementById("close");
var inputPassword = document.getElementById("password");

function animationSubmit() {
  var inputLogin = document.getElementById("username").value;
  var inputPassword = document.getElementById("password").value;
  if (inputLogin == "dan" && inputPassword == "Neta") {
    console.log("test");
  } else {
    var leftnumber = entierAleatoire(-35, 35);
    var topnumber = entierAleatoire(0, 55);
    button.style.left = leftnumber + "%";
    button.style.top = topnumber + "%";
  }
}

button.addEventListener("mouseover", animationSubmit);

function entierAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function show() {
  openEye.style.display = "none";
  closeEye.style.display = "initial";
  inputPassword.type = "password";
}

function hide() {
  closeEye.style.display = "none";
  openEye.style.display = "initial";
  inputPassword.type = "text";
}

function verif() {
  var True = "bienvenue";
  var inputLogin = document.getElementById("username").value;
  var inputPassword = document.getElementById("password").value;
  if (inputLogin == "dan" && inputPassword == "Neta") {
    console.log("true");
  } else {
    console.log("false");
  }
  alert("WEEEEE LA ZONEEEE T BIEN ARRIVE");
}

particlesJS("particles-js", {
  particles: {
    number: { value: 70, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.3,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 260, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 300, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
count_particles = document.querySelector(".js-count-particles");
update = function () {
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array)
    requestAnimationFrame(update);
};
requestAnimationFrame(update);

// fonction position souris  dans le console log
var spider = document.getElementById("spider");
document.onmousemove = mouseCoordinates;
function mouseCoordinates(event) {
  var xPos = event.clientX;
  var yPos = event.clientY;
  spider.style.left = xPos + "px";
  spider.style.top = yPos + "px";
}
