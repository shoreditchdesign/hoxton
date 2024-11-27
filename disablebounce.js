window.addEventListener('touchmove', function(event) {
    // Prevent multi-touch gestures
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

// Optional: Prevent extreme overscroll
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop < 0) {
        window.scrollTo(0, 0);
    }
    if (scrollTop + clientHeight >= scrollHeight) {
        window.scrollTo(0, scrollHeight - clientHeight);
    }
});