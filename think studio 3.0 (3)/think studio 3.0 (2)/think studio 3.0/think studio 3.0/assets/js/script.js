'use strict';

// 




/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}


// 

const originalText = ["G", "R", "O", "W", "T", "H"];
const newText = ["B", "U", "S", "I", "N", "E", "S", "S"];

// Function to change text automatically
function autoChangeText() {
  const changeableSpans = document.querySelectorAll(".change");

  // Start by showing "Growth"
  let showingGrowth = true;
  
  setInterval(() => {
    if (showingGrowth) {
      // Change to "Business"
      for (let i = 0; i < changeableSpans.length; i++) {
        changeableSpans[i].textContent = newText[i];
      }
    } else {
      // Revert to "Growth"
      for (let i = 0; i < changeableSpans.length; i++) {
        changeableSpans[i].textContent = originalText[i];
      }
    }
    showingGrowth = !showingGrowth; // Toggle between Growth and Business
  }, 3000); // Change every 4 seconds (half the animation cycle)
}

// Run the function when the page loads
window.onload = autoChangeText;


/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);


// vedio on hero page 
document.getElementById("show-image-btn").addEventListener("click", function() {
  document.getElementById("image-overlay").style.display = "flex"; // Show overlay
});

document.getElementById("close-btn").addEventListener("click", function() {
  document.getElementById("image-overlay").style.display = "none"; // Hide overlay
});


document.addEventListener('DOMContentLoaded', () => {
  // Select the cursor elements
  const $bigBall = document.querySelector('.cursor__ball--big');
  const $smallBall = document.querySelector('.cursor__ball--small');

  // Function to move the cursor
  function onMouseMove(e) {
    console.log(`Mouse moving at: ${e.pageX}, ${e.pageY}`); // Debugging line
    gsap.to($bigBall, {
      x: e.pageX - 15,
      y: e.pageY - 15,
      duration: 0.4,
      ease: 'power2.out'
    });
    gsap.to($smallBall, {
      x: e.pageX - 5,
      y: e.pageY - 5,
      duration: 0.1,
      ease: 'power2.out'
    });
  }

  // Attach the mousemove event listener
  document.body.addEventListener('mousemove', onMouseMove);});



  // <!-- feature show more -->
function showMore() {
  const moreFeatures = document.getElementById('more-features');
  const readMoreBtn = document.querySelector('.read-more-btn');

  if (moreFeatures.classList.contains('hidden')) {
    moreFeatures.classList.remove('hidden');
    readMoreBtn.textContent = 'Show Less'; // Optionally change button text
  } else {
    moreFeatures.classList.add('hidden');
    readMoreBtn.textContent = 'Read More';
  }
}


function toggleText() {
  var moreText = document.querySelector('.more-text');
  var readMoreLink = document.querySelector('.read-more');

  if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      readMoreLink.textContent = "Read Less";
  } else {
      moreText.style.display = "none";
      readMoreLink.textContent = "Read More";
  }
}



document.addEventListener('DOMContentLoaded', function() {
  const botLogo = document.querySelector('.bot-logo');
  const botContainer = document.querySelector('.bot-container');

  botLogo.addEventListener('click', function() {
    // Toggle the visibility of the message bar
    if (botContainer.style.display === 'block') {
      botContainer.style.display = 'none';
    } else {
      botContainer.style.display = 'block';
    }
  });
});


// Array of random messages
const messages = [
  "Hi! Need help with something?",
  "How can I assist you today?",
  "Got questions? I’m here to help!",
  "Looking for something? Ask me!"
];

// Function to show a random message
function showRandomMessage() {
  const botPopup = document.getElementById('botPopup');
  const popupText = document.getElementById('popupText');

  // Select a random message from the array
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  // Set the message text
  popupText.textContent = randomMessage;

  // Show the message
  botPopup.classList.add('active');

  // Hide the message after 5 seconds automatically
  setTimeout(() => {
    const botContainer = document.getElementById('botContainer');
    if (!botContainer.classList.contains('active')) {
      botPopup.classList.remove('active'); // Only hide if the bot is NOT open
    }
  }, 5000);
}

// Function to toggle the bot and hide the pop-up
function toggleBot() {
  const botContainer = document.getElementById('botContainer');
  const botPopup = document.getElementById('botPopup');

  // Toggle the bot message container
  botContainer.classList.toggle('active');

  // Hide the pop-up message when the bot is opened
  if (botContainer.classList.contains('active')) {
    botPopup.classList.remove('active'); // Hide the pop-up immediately when the bot is opened
  }
}

// Function to close the pop-up manually
function closePopup() {
  const botPopup = document.getElementById('botPopup');
  botPopup.classList.remove('active');
}

// Ensure the random message displays after the page loads
document.addEventListener("DOMContentLoaded", function() {
  showRandomMessage(); // Show the first random message immediately
  const messageInterval = setInterval(() => {
    const botContainer = document.getElementById('botContainer');
    if (!botContainer.classList.contains('active')) {
      showRandomMessage(); // Show random message only if the bot is NOT open
    }
  }, 3000); // Show random message every 3 seconds
});
