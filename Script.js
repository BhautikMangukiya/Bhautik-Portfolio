document.addEventListener("DOMContentLoaded", function () {
  // CV Download Function
  function setupCvDownload() {
      const downloadButton = document.getElementById("downloadCv");
      downloadButton.addEventListener("click", function () {
          const link = document.createElement("a");
          link.href = "./Cv/Bhautik-Mangukiya-Cv.pdf";
          link.download = "Bhautik-Cv.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      });
  }

  // Typing Effect
  function setupTypingEffect() {
      const textElement = document.querySelector(".hero__typing");
      const text =
          "a passionate web developer skilled in HTML,\nCSS, and JavaScript, dedicated to building \nclean and efficient web applications.";
      let index = 0;
      const cursor = document.createElement("span");
      cursor.classList.add("cursor");
      textElement.appendChild(cursor);

      function typeText() {
          if (index < text.length) {
              const char =
                  text[index] === "\n"
                      ? document.createElement("br")
                      : document.createTextNode(text[index]);
              textElement.insertBefore(char, cursor);
              index++;
              setTimeout(typeText, 50);
          }
      }

      setTimeout(typeText, 500);
  }

  // Open GitHub Portfolio on Click
  document.querySelectorAll(".btn--primary").forEach(button => {
      button.addEventListener("click", function () {
          window.open("https://github.com/BhautikMangukiya", "_blank");
      });
  });


  // Smooth Scrolling for Navbar Links
  document.querySelectorAll('.navbar__menu a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (!targetId.startsWith("#")) return;
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              const navbarHeight = document.querySelector('.navbar').offsetHeight;
              const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
              window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          }
      });
  });

  // Reset Scroll Position on Load
  window.addEventListener('DOMContentLoaded', () => {
      if (!performance.navigation.type === 2) {
          window.scrollTo(0, 0);
      }
  });

  // Initialize Functions
  setupCvDownload();
  setupTypingEffect();
});
