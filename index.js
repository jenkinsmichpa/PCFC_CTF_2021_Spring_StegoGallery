  "use strict";
  document.addEventListener("DOMContentLoaded", function(event) {
    var navbarTransition = function() {
      if (window.pageYOffset >= navbar.offsetHeight) {
        navbar.classList.remove("navbar-dark", "bg-transparent");
        navbar.classList.add("navbar-light", "bg-light");
        navbarContainer.classList.remove("pt-2");
        navbarContainer.classList.add("pt-1");
      } else {
        navbar.classList.remove("navbar-light", "bg-light");
        navbar.classList.add("navbar-dark", "bg-transparent");
        navbarContainer.classList.remove("pt-1");
        navbarContainer.classList.add("pt-2");
      }
    }
    var parallax = function() {
      var scrollHeight = window.pageYOffset;
      parallaxes.forEach(function(element) {
        element.style.backgroundPositionY = (scrollHeight - element.offsetTop) / 3 + "px";
      });
    }
    /* Initial navbar transition */
    var navbar = document.getElementById("navbar");
    var navbarContainer = document.getElementById("navbarContainer");
    navbarTransition();
    /* Initial parallax */
    var parallaxes = document.querySelectorAll(".parallax");
    parallax();
    window.addEventListener("scroll", function() {
      /* Reoccuring navbar transition */
      navbarTransition();
      /* Reoccuring parallax */
      parallax();
    });
    $('#lightBox').on('show.bs.modal', function(event) {
      document.getElementById("lightBoxImage").src = event.relatedTarget.src;
    });
  });
