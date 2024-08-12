/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*==================== sticky navbar ====================*/

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};





//Dark Mode/ Light Mode Toogle
const toggleCheckbox = document.querySelector('.mode-toggle');
const body = document.body;

// Set the initial state based on user's preference
if (localStorage.getItem('mode') === 'light') {
    body.classList.add('light-mode');
    toggleCheckbox.checked = false;
} else {
    toggleCheckbox.checked = true;
}

toggleCheckbox.addEventListener('change', () => {
    if (toggleCheckbox.checked) {
        body.classList.remove('light-mode');
        localStorage.setItem('mode', 'dark');
    } else {
        body.classList.add('light-mode');
        localStorage.setItem('mode', 'light');
    }
});






/*==================== scroll reveal ====================*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-image, .services-container, .portfolio-box, .contact form, .serviceRequestForm",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-image", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });



document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.getElementById('home-image').classList.add('animate');
    }, 2000); // Delay of 2 seconds
  });


/*==================== typed js ====================*/

// const typed = new Typed(".multiple-text", {
//   strings: [
//     "HTML Aficionado",
//     "CSS Stylist",
//     "JavaScript Enthusiast",
//     "React Specialist",
//     "PHP Maestro",
//     "Laravel Architect",
//     "MySQL Guru"
//   ],
//   typeSpeed: 100,
//   backSpeed: 100,
//   delay: 1000,
//   loop: true,
// });

function changeText_1() {
  let typed = new Typed(".multiple-text", {
    strings: [
      "HTML Aficionado",
      "CSS Stylist",
      "JavaScript Enthusiast",
      "Node.js Expert",
      "React Specialist",
      "PHP Maestro",
      "Laravel Architect",
      "MySQL Guru"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    delay: 1000,
    loop: false, // Set to false to not loop the initial keywords
    onComplete: function (self) {
        
      setTimeout(function () {
        self.cursor.style.display = "none";
        document.querySelector(".multiple-text-outer").innerHTML =
          '<span class="multiple-text"></span>';
        changeText_2();
      }, 2000);
    },
  });
}

changeText_1();

function changeText_2() {
  // Create a new Typed instance with different text
  let typed = new Typed(".multiple-text", {
    strings: ["In Short.........."],
    typeSpeed: 100,
    backSpeed: 100,
    delay: 1000,
    loop: false, // Set to false to stop after finishing the new set of strings
    onComplete: function (self) {
      setTimeout(function () {
        self.cursor.style.display = "none";
        document.querySelector(".multiple-text-outer").innerHTML =
          'I am a <span class="multiple-text"></span>';
        changeText_3();
      }, 2000); // 2000 milliseconds = 2 seconds
    },
  });
}

function changeText_3() {
  // Create a new Typed instance with different text
  let typed = new Typed(".multiple-text", {
    strings: ["Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    delay: 1000,
    loop: false, // Set to false to stop after finishing the new set of strings
    onComplete: function (self) {
      setTimeout(function () {
        self.cursor.style.display = "none";
        document.querySelector(".multiple-text-outer").innerHTML =
          'I am a <span class="multiple-text"></span>';
        changeText_1();
      }, 2000); // 2000 milliseconds = 2 seconds
    },
  });
}






