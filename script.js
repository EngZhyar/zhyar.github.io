// Initialize Typed.js for typing animation when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  var typedOptions = {
    strings: ["", "Web Developer", "Web Designer", "Graphic Designer"], // Strings to be typed
    typeSpeed: 50, // Typing speed in milliseconds
    backSpeed: 50, // Deletion speed in milliseconds
    loop: true, // Loop the typing animation
  };

  // Create a new Typed instance targeting elements with class "typing"
  var t = new Typed(".typing", typedOptions);
  var t = new Typed(".typing2", typedOptions);
});

document.getElementById('callButton').addEventListener('click', function() {
  window.location.href = 'tel:+9647501238780';
var whatsappLink="https://wa.me/+9647501238780?text="+ encodeURIComponent("Hi");
});



// Navigation handling
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"), // Select all navigation items
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"), // Select all sections
  totalSection = allSection.length;

// Add click event listeners to navigation items
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection(); // Remove back-section class from all sections
    // Add back-section class to previously active section
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active"); // Remove active class from all navigation items
    }
    this.classList.add("active"); // Add active class to clicked navigation item
    showSection(this); // Show corresponding section
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn(); // Toggle aside if window width is less than 1200px
    }
  });
}

// Function to add back-section class to sections except the home section
function addBackSection(num) {
  for (let i = 0; i < totalSection; i++) {
    allSection[num].classList.add("back-section");
  }
}

// Function to remove back-section class from all sections
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

// Function to show corresponding section based on clicked navigation item
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    const sectionId = allSection[i].getAttribute("id");

    // Hide all sections except the home section
    allSection[i].classList.remove("active");
  }

  const target = element.getAttribute("href").split("#")[1];
  document.getElementById("home").classList.remove("active");
  document.getElementById(target).classList.add("active");

  // Hide the home section
}

// Function to update navigation based on clicked item
function upadateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

// Event listener for hire-me button
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");

  showSection(this); // Show corresponding section
  upadateNav(this); // Update navigation
  removeBackSection(); // Remove back-section class from all sections
  addBackSection(sectionIndex); // Add back-section class to specified section
});

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
if (navTogglerBtn) {
  // Check if navTogglerBtn is not null (i.e., if it exists)
  navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
  });
}

// Function to toggle aside and sections
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  if (navTogglerBtn) {
    // Check if navTogglerBtn is not null (i.e., if it exists)
    navTogglerBtn.classList.toggle("open");
  }
}

document.getElementById("SendEmail").addEventListener("click", () => {
  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=zhyar.abubakr17@gmail.com`,
    "GmailComposeWindow",
    "width=600,height=400,top=100,left=100"
  );
});
