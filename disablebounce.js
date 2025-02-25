// This code listens for touch movement events on the window
// When user performs a touch gesture with multiple fingers (more than 1 touch point)
// It prevents the default multi-touch behavior like pinch-to-zoom
window.addEventListener(
  "touchmove",
  function (event) {
    // Prevent multi-touch gestures
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  },
  { passive: false },
); // passive: false allows preventDefault() to work

// Optional: Prevent extreme overscroll
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
