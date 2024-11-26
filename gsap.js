//Countup Animation
$(".counterup").each(function (index) {
    // assign ID
    let thisId = "countup" + index;
    $(this).attr("id", thisId);
    // create variables
    let startNumber = +$(this).text();
    let endNumber = +$(this).attr("final-number");
    let decimals = 0;
    let duration = $(this).attr("count-duration");
    // animate number
    let myCounter = new CountUp(thisId, startNumber, endNumber, decimals, duration);

    
  //Scroll out of view trigger

/* 
  ScrollTrigger.create({
    trigger: $(this),
    start: "top bottom",
    end: "bottom top",
    onLeaveBack: () => {
      myCounter.reset();
    }
  });
*/

    // Scroll into view trigger
    ScrollTrigger.create({
      trigger: $(this),
      start: "top 80%",
      end: "bottom top",
      onEnter: () => {
        myCounter.start();
      }
    });
  });

//Orb Tracking Animation
  document.addEventListener('DOMContentLoaded', () => {
    const orb = document.querySelector('.gradient-orb');
    const wrap = document.querySelector('.gradient-wrap');

    document.addEventListener('mousemove', (e) => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const mouseX = e.clientX; // X coordinate relative to the viewport
      const mouseY = e.clientY; // Y coordinate relative to the viewport

      // Calculate the new position of the orb
      const orbX = (mouseX / viewportWidth) * 100;
      const orbY = (mouseY / viewportHeight) * 100;

      // Update orb position with smooth transition
      gsap.to(orb, {
        x: orbX - 50 + '%',
        y: orbY - 50 + '%',
        opacity: 100,
        duration: 0.5, // Adjust the duration for smoother/faster tracking
        ease: 'power2.out'
      });
    });
  });