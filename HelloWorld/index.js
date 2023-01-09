// HoverEffect Text HelloWorld
document.getElementById("hello").addEventListener("mouseover", function () {
  document.getElementById("HelloWorld").classList.add("hover:rotate-2");

  this.addEventListener("mouseout", function () {
    document.getElementById("HelloWorld").classList.remove("hover:rotate-2");
  });
});
document.getElementById("world").addEventListener("mouseover", function () {
  document.getElementById("HelloWorld").classList.add("hover:-rotate-2");
  document.getElementById("warn").classList.add("text-red-600");
  this.addEventListener("mouseout", function () {
    document.getElementById("warn").classList.remove("text-red-600");
    document.getElementById("HelloWorld").classList.remove("hover:-rotate-2");
  });
});

// Ubah Background Click HelloWorld
document.getElementById("HelloWorld").addEventListener("click", function (e) {
  const SearchBgHero = document
    .querySelector("#sectionMain")
    .classList.contains("bg-hero");
  if (!SearchBgHero) {
    document.querySelector("#sectionMain").classList.add("bg-hero", "bg-cover");
  } else {
    document
      .querySelector("#sectionMain")
      .classList.remove("bg-hero", "bg-cover");
  }
});
setTimeout(mouseOver, 1000);

function mouseOver() {
  document
    .getElementById("HelloWorld")
    .addEventListener("mouseover", function (e) {
      e.target.style.cursor = "pointer";
    });
}

// Effect Onload Window Text HelloWorld
window.onload = () => {
  document.getElementById("HelloWorld").classList.add("scale-100");
  document.getElementById("HelloWorld").classList.remove("scale-0");
};

// Menu Navigasi
document.querySelector("#menu").addEventListener("click", function () {
  const listmenu = document.querySelector("#listmenu");

  listmenu.classList.toggle("-right-0");
  listmenu.classList.toggle("-right-[100vw]");
});

window.addEventListener("scroll", async function () {
  const a = document.body.getBoundingClientRect().top;
  if (a <= -283) {
  } else {
    listmenu.classList.remove("-right-0");
    listmenu.classList.add("-right-[100vw]");
  }
});


// Jam
setInterval(() => {
  const Time = new Date();
  const DivDate = (document.querySelector(
    "#date"
  ).textContent = `${Time.getHours()} : ${Time.getMinutes()} : ${Time.getSeconds()}`);
}, 1000);


// SetBg 
const body = document.querySelector('body')

function setBg (event) {
  const color = event.target.value
  body.style.backgroundColor = color
}
function setBgRange(event) {
  console.log(event.target.value)

  let getColor = event.target.value
  body.style.backgroundColor = `rgba(${getColor},${getColor},${getColor})`

  

  getColor == 116 ? alert('tengah cuy') : ""
  
}