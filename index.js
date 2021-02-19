// import LocomotiveScroll from "https://cdn.skypack.dev/locomotive-scroll";
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".banner", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".banner").style.transform
    ? "transform"
    : "fixed",
});

// Loading Screen
gsap.from(".logo-screen", {
  paddingTop: 300,
  duration: 1,
  opacity: 0.3,
  // scale: 0.1,
});

gsap.to(
  ".loading-screen",
  {
    // x: window.innerWidth,
    duration: 1,
    autoAlpha: 0,
    scale: 1.3,
  },
  2
);

gsap.fromTo(
  ".hero-image",
  {
    y: -100,
    scale: 0.9,
    opacity: 0.5,
  },
  {
    y: 0,
    scale: 1,
    duration: 3.5,
    delay: 1,
    opacity: 1,
  }
);

// Headline Tags
var tlTwo = gsap.timeline({
  delay: 2.4,
  // ease: Power1.easeIn,
  // duration: 1,
});
tlTwo
  .from(".ht-one", {
    paddingTop: 180,
    opacity: 0,
    ease: Power1.easeInOut,
    duration: 1.2,
  })
  .from(
    ".ht-two",
    { paddingTop: 180, opacity: 0, ease: Power1.easeInOut, duration: 1.2 },
    "-=1"
  );

// gsap.to(".color-change, .color-change h1", {
//   backgroundColor: "#EFBEAC",
//   color: "#C44319",
//   overwrite: "all",
//   duration: 1,
//   scrollTrigger: {
//     markers: true,
//     start: "top 90%",
//     end: "+=10",
//     ease: "Power1",
//     scroller: ".banner",
//     trigger: ".textone",
//     scrub: true,
//   },
// });
// Shadow box
gsap.to(".shadow", {
  height: 600,
  scrollTrigger: {
    // markers: true,
    start: "top 80%",
    end: "+=130",
    ease: "Power1",
    scroller: ".banner",
    trigger: ".box-expand",
    scrub: true,
  },
});

//  Box Expansion on scroll
gsap.to(".box-expand", {
  width: 1600,
  duration: 2,
  backgroundColor: "#D0503F",
  scrollTrigger: {
    // markers: true,
    start: "top 50%",
    end: "+=80",
    ease: "Power1",
    scroller: ".banner",
    trigger: ".box-expand",
    // scrub: true,
  },
});

// Mathematics Header
ScrollTrigger.create({
  trigger: ".math-tag",
  start: "top 40%",
  endTrigger: ".presenter-tag",
  end: "bottom bottom-=160",
  pin: true,
  pinSpacing: false,
  // markers: true,
  scroller: ".banner",
});

gsap.to(".math-tag", {
  color: "#dfd3c2",
  opacity: 0,
  scrollTrigger: {
    start: "top 40%",
    // endTrigger: ".presenter-tag",
    end: "+=900",
    // markers: true,
    trigger: ".math-tag",
    scroller: ".banner",
    scrub: true,
  },
});

// gsap.fromTo(
//   ".math-tag",
//   {
//     opacity: 1,
//     scrollTrigger: {
//       start: "top 40%",
//       // endTrigger: ".presenter-tag",
//       end: "bottom 20%",
//       markers: true,
//       trigger: ".hf-blue",
//       scroller: ".banner",
//       scrub: true,
//     },
//   },
//   {
//     opacity: 0,
//     scrollTrigger: {
//       start: "top 40%",
//       // endTrigger: ".presenter-tag",
//       end: "bottom 20%",
//       markers: true,
//       trigger: ".hf-blue",
//       scroller: ".banner",
//       scrub: true,
//     },
//   }
// );

gsap.from(".hf-pink", {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".hf-pink",
    scroller: ".banner",
    start: "top 60%",
    end: "bottom 40%",
    // markers: true,
  },
});

var mathsTextTl = gsap.timeline({
  defaults: {
    paddingTop: 60,
    scrollTrigger: {
      trigger: ".mt-one",
      scroller: ".banner",
      // markers: true,
      start: "top 70%",
      end: "top 40%",
      scrub: true,
    },
  },
});

mathsTextTl
  .from(".mt-one", { duration: 3 })
  .from(".mt-two", {})
  .from(".mt-three", {})
  .from(".mt-four", {});

// Presenter Header
ScrollTrigger.create({
  trigger: ".presenter-tag",
  start: "top 60%",
  // endTrigger: ".badass-tag",
  end: "+=1200",
  pin: true,
  pinSpacing: false,
  // markers: true,
  scroller: ".banner",
});

gsap.to(".box-expand", {
  backgroundColor: "#133A74",
  scrollTrigger: {
    trigger: ".presenter-tag",
    scroller: ".banner",
    start: "top 60%",
    // scrub: true,
    // markers: true,
  },
});

gsap.to(".presenter-tag", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".presenter-tag",
    start: "top 60%",
    // endTrigger: ".presenter-tag",
    end: "+=900",
    markers: true,

    scroller: ".banner",
    scrub: true,
  },
});

var presenterTextTl = gsap.timeline({
  defaults: {
    paddingTop: 60,
    scrollTrigger: {
      trigger: ".pt-one",
      scroller: ".banner",
      // markers: true,
      start: "top 70%",
      end: "top 20%",
      scrub: true,
    },
  },
});

presenterTextTl
  .from(".pt-one", {})
  .from(".pt-two", {})
  .from(".pt-three", {})
  .from(".pt-four", {})
  .from(".pt-five", {})
  .from(".pt-six", {});

// Badass Header
// ScrollTrigger.create({
//   trigger: ".badass-tag",
//   start: "top 30%",
//   endTrigger: ".end-hlt",
//   end: "bottom bottom-=50",
//   pin: true,
//   pinSpacing: false,
//   // markers: true,
//   scroller: ".banner",
// });

// gsap.to(".bad-icon", {
//   width: 100,
//   x: 350,
//   rotate: 20,
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".bad-icon",
//     start: "top 50%",
//     end: "top 70%",
//     // markers: true,
//     scroller: ".banner",
//   },
// });

// gsap.to(".box-expand", {
//   backgroundColor: "#269B69",
//   scrollTrigger: {
//     trigger: ".badass-tag",
//     scroller: ".banner",
//     start: "top 40%",
//     // scrub: true,
//     // markers: true,
//   },
// });

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

//watch the free video on how this demo was made
// https://www.snorkl.tv/scrolltrigger-smooth-scroll/
