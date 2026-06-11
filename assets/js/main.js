// main.js — small progressive enhancements. No framework, no dependencies.
(function () {
  "use strict";

  // ---- Mobile navigation toggle ----------------------------------------
  var toggle = document.querySelector(".nav__toggle");
  var links = document.getElementById("nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the menu after following a link (mobile).
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ---- Mark the current page in the nav --------------------------------
  // Normalise paths so "/things-to-do/" and "/things-to-do/index.html" match.
  function normalise(path) {
    return path.replace(/index\.html$/, "").replace(/\/$/, "") || "/";
  }
  var here = normalise(window.location.pathname);
  document.querySelectorAll(".nav__links a").forEach(function (a) {
    if (normalise(new URL(a.href).pathname) === here) {
      a.setAttribute("aria-current", "page");
    }
  });

  // ---- Footer year -----------------------------------------------------
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
