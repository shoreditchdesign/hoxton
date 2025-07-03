document
  .querySelector('[data-nav-element="menu"]')
  .addEventListener("click", () => {
    const navbar = document.querySelector('[data-nav-element="navbar"]');
    const currentState = navbar.getAttribute("data-nav-state");
    navbar.setAttribute(
      "data-nav-state",
      currentState === "open" ? "closed" : "open",
    );
  });

window.addEventListener(
  "touchmove",
  function (event) {
    // Prevent multi-touch gestures
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  },
  { passive: false },
);

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop < 0) {
    window.scrollTo(0, 0);
  }
  if (scrollTop + clientHeight >= scrollHeight) {
    window.scrollTo(0, scrollHeight - clientHeight);
  }
});
