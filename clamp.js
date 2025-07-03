document.addEventListener("DOMContentLoaded", function () {
  const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const baseWidth = 1440;
  const minSize = 1.125;
  const breakpoint = 992;

  let wasDesktop = window.innerWidth >= breakpoint;

  function updateClamps() {
    const vw = window.innerWidth;
    const isDesktop = vw >= breakpoint;

    // Skip if staying in mobile/tablet range
    if (!wasDesktop && !isDesktop) return;

    wasDesktop = isDesktop;

    headings.forEach((tag) => {
      const computedStyle = getComputedStyle(document.documentElement);
      const fontSize = parseFloat(
        computedStyle.getPropertyValue(`--${tag}--font-size`),
      );
      const lineHeight = parseFloat(
        computedStyle.getPropertyValue(`--${tag}--line-height`),
      );

      document.querySelectorAll(`${tag}, .u-hs-${tag}`).forEach((el) => {
        if (isDesktop) {
          const responsiveSize = Math.max(
            minSize,
            Math.min(fontSize, (fontSize * vw) / baseWidth),
          );
          const responsiveLH = Math.max(
            minSize,
            Math.min(lineHeight, (lineHeight * vw) / baseWidth),
          );
          el.style.fontSize = `${responsiveSize}rem`;
          el.style.lineHeight = `${responsiveLH}rem`;
        } else {
          el.style.fontSize = "";
          el.style.lineHeight = "";
        }
      });
    });
  }

  updateClamps();
  window.addEventListener("resize", updateClamps);
});
