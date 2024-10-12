document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("top-header");
  const rootHeader = document.querySelector(".bottom-header");
  const menuBtn = document.querySelector(".menu-icon");
  const overlay = document.querySelector(".overlay");
  const crossBtn = document.querySelector(".menu-close-btn");

  let lastScrollY = window.scrollY;
  const viewportHeight = window.innerHeight; // 100vh height in pixels

  menuBtn.addEventListener("click", () => {
    if (overlay.classList.contains("show-modal")) {
      overlay.classList.remove("show-modal");
    } else {
      overlay.classList.add("show-modal");
    }
  });

  crossBtn.addEventListener("click", () => {
    overlay.classList.remove("show-modal");
  });
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Hide header when scrolling down past 100vh
    if (currentScrollY > viewportHeight) {
      if (currentScrollY > lastScrollY) {
        // User is scrolling down, hide the header
        header.classList.add("hide-header");
        rootHeader.classList.add("dynamic");
      }
    }

    // Show header when scrolling up, but only when back to viewportHeight
    if (currentScrollY <= viewportHeight) {
      // User scrolled back to 100vh or above, show the header
      header.classList.remove("hide-header");
      rootHeader.classList.remove("dynamic");
    }

    // Update the last scroll position
    lastScrollY = currentScrollY;
  });
});
