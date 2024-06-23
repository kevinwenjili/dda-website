document.addEventListener("DOMContentLoaded", function () {
    let bannerElement = document.getElementById("banner");
    let logoElement = document.getElementById("logo");
    let logoComponents = document.querySelectorAll(".logo-container");
    let animations = [
      "move-left",
      "move-right",
      "move-up",
      "move-down",
      "move-diagonal",
      "transition-in",
    ];

    var bannerScrollState = function () {
      var scrollPos = 280;
      var y = window.scrollY;
      if (
        y >= scrollPos &&
        bannerElement.classList.contains("banner-bg-transparent")
      ) {
        bannerElement.classList.remove("banner-bg-transparent");
        bannerElement.classList.add("banner-bg-dark");
      } else if (
        y < scrollPos &&
        bannerElement.classList.contains("banner-bg-dark")
      ) {
        bannerElement.classList.remove("banner-bg-dark");
        bannerElement.classList.add("banner-bg-transparent");
      }

      if (
        y >= scrollPos &&
        logoElement.classList.contains("assemble-logo")
      ) {
        logoElement.classList.remove("assemble-logo");
        logoComponents.forEach(function (element) {
          animations.forEach(function (animation) {
            if (element.classList.contains(animation)) {
              element.classList.remove(animation);
              element.offsetWidth;
              element.classList.add(animation);
            }
          });
        });
        logoElement.classList.add("disassemble-logo");
      } else if (
        y < scrollPos &&
        logoElement.classList.contains("disassemble-logo")
      ) {
        setTimeout(function () {
          logoElement.classList.remove("disassemble-logo");
          logoComponents.forEach(function (element) {
            animations.forEach(function (animation) {
              if (element.classList.contains(animation)) {
                element.classList.remove(animation);
                element.offsetWidth;
                element.classList.add(animation);
              }
            });
          });
          logoElement.classList.add("assemble-logo");
        }, 250);
      }
    };

    document.addEventListener("scroll", bannerScrollState);
  });