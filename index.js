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

gsap;

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
    duration: 1,
  })
  .from(
    ".ht-two",
    { paddingTop: 180, opacity: 0, ease: Power1.easeInOut, duration: 1 },
    "-=0.8"
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

gsap.to(".box-expand", {
  width: 1400,
  duration: 2,
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

// Today header handling
// keep at bottom
ScrollTrigger.create({
  trigger: ".math-tag",
  start: "top 40%",
  endTrigger: ".presenter-tag",
  end: "bottom bottom-=230",
  pin: true,
  pinSpacing: false,
  // markers: true,
  scroller: ".banner",
});

// Tomorrow header handling
// keep at bottom
ScrollTrigger.create({
  trigger: ".presenter-tag",
  start: "top 40%",
  endTrigger: ".badass-tag",
  end: "bottom bottom-=75",
  pin: true,
  pinSpacing: false,
  // markers: true,
  scroller: ".banner",
});

ScrollTrigger.create({
  trigger: ".badass-tag",
  start: "top 40%",
  endTrigger: ".end-hlt",
  end: "bottom bottom-=50",
  pin: true,
  pinSpacing: false,
  markers: true,
  scroller: ".banner",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

//watch the free video on how this demo was made
// https://www.snorkl.tv/scrolltrigger-smooth-scroll/
