// // ----------------------------- About Us Page Starts -----------------------------

// window.addEventListener("load", (event) => {
//   gsap.registerPlugin(ScrollTrigger);
//   // gsap code here!
//   // gsap code here!

//   const revealWithOpacity = gsap.utils.toArray(".reveal-with-opacity");
//   gsap.set(revealWithOpacity, {
//     opacity: 0,
//   });
//   revealWithOpacity.forEach((box) => {
//     gsap.to(box, {
//       opacity: 1,
//       duration: 1.5,
//     });
//   });

//   // loop animation for challenge panda
//   const challengePandaLeft = gsap.utils.toArray(".challenge-panda-left");

//   gsap.to(challengePandaLeft, {
//     x: "-5%",
//     duration: 3,
//     ease: "linear",
//     repeat: -1,
//     yoyo: true,
//     scrub: 1,
//   });

//   const challengePandaRight = gsap.utils.toArray(".challenge-panda-right");

//   gsap.to(challengePandaRight, {
//     x: "5%",
//     duration: 3,
//     ease: "linear",
//     repeat: -1,
//     yoyo: true,
//   });

//   const pillarlarge = gsap.utils.toArray(".pillarlarge");
//   gsap.set(pillarlarge, {
//     y: 150,
//     scale: 1,
//   });
//   pillarlarge.forEach((box) => {
//     gsap.to(box, {
//       y: 0,
//       scale: 1.2,
//       scrollTrigger: {
//         trigger: box,
//         scrub: 3,
//         start: "top 100%",
//         end: "bottom",
//         // markers: false,
//       },
//     });
//   });
//   const pillarmedium = gsap.utils.toArray(".pillarmedium");
//   gsap.set(pillarmedium, {
//     y: 200,
//     scale: 1,
//   });
//   pillarmedium.forEach((box) => {
//     gsap.to(box, {
//       y: 0,
//       scale: 1.1,
//       scrollTrigger: {
//         trigger: box,
//         scrub: 1,
//         start: "top 100%",
//         end: "bottom",
//         // markers: false,
//       },
//     });
//   });
//   const pillarsmall = gsap.utils.toArray(".pillarsmall");
//   gsap.set(pillarsmall, {
//     y: 50,
//   });
//   pillarsmall.forEach((box) => {
//     gsap.to(box, {
//       y: 0,
//       scrollTrigger: {
//         trigger: box,
//         scrub: 5,
//         start: "top 100%",
//         end: "bottom",
//       },
//     });
//   });

//   const cloudbig = gsap.utils.toArray(".cloudbig");
//   gsap.set(cloudbig, {
//     y: 0,
//   });
//   cloudbig.forEach((box) => {
//     gsap.to(box, {
//       y: 90,
//       scrollTrigger: {
//         trigger: box,
//         scrub: 5,
//         start: "top 100%",
//         end: "bottom",
//       },
//     });
//   });
//   const cloudleft = gsap.utils.toArray(".cloudleft");
//   gsap.set(cloudleft, {
//     y: 0,
//   });
//   cloudleft.forEach((box) => {
//     gsap.to(box, {
//       left: -50,
//       scrollTrigger: {
//         trigger: box,
//         scrub: 3,
//         start: "top 100%",
//         end: "bottom",
//       },
//     });
//   });
//   const cloudright = gsap.utils.toArray(".cloudright");
//   gsap.set(cloudright, {
//     y: 0,
//   });
//   cloudright.forEach((box) => {
//     gsap.to(box, {
//       right: -50,
//       scrollTrigger: {
//         trigger: box,
//         scrub: 1,
//         start: "top 100%",
//         end: "bottom",
//       },
//     });
//   });

//   gsap.utils.toArray(".our-approach").forEach((section) => {
//     const elems = section.querySelectorAll(".common-card");
//     gsap.set(elems, {
//       y: 50,
//       opacity: 0,
//     });
//     elems.forEach((box, index) => {
//       gsap.to(box, {
//         scrollTrigger: {
//           trigger: box,
//           start: "top 80%",
//           end: "bottom 20%",
//           stagger: 2,
//           scrub: 1,

//           onEnter: () =>
//             gsap.to(box, {
//               y: 0,
//               opacity: 1,
//               duration: 1,
//             }),
//           onLeave: () =>
//             gsap.to(box, {
//               y: -50,
//               opacity: 0,
//             }),
//           onEnterBack: () =>
//             gsap.to(box, {
//               y: 0,
//               opacity: 1,
//             }),
//           onLeaveBack: () =>
//             gsap.to(box, {
//               y: 50,
//               opacity: 0,
//             }),
//         },
//       });
//     });
//   });

//   // ----------------------------- About Us Page Ends -----------------------------

//   // ----------------------------- Challenges Page Starts -----------------------------

//   const buttons = document.querySelectorAll(".challenge-btn");
//   const activeStatus = document.querySelector(".active-status");

//   buttons.forEach((button) => {
//     button.addEventListener("click", handleClick);
//   });

//   function handleClick(e) {
//     const clickedBtn = e.currentTarget;
//     const isLeft = clickedBtn.classList.contains("left");
//     const activeBtn = document.querySelector(".challenge-btn.active");
//     const activeItem = document.querySelector(".challenge-item.active");
//     const activeDescription = document.querySelector(
//       ".challenges-description.active"
//     );

//     // Update the active-status background color
//     const newColor = clickedBtn.getAttribute("data-color");
//     activeStatus.style.backgroundColor = newColor;

//     if (activeBtn === clickedBtn) return;

//     // Description change logic
//     const newDescription = document.querySelector(
//       `.challenges-description[data-challenge="${clickedBtn.getAttribute(
//         "data-challenge"
//       )}"]`
//     );
//     if (activeDescription !== newDescription) {
//       activeDescription.classList.remove("active");
//       newDescription.classList.add("active");
//     }

//     // Update z-index for challenges
//     activeItem.style.zIndex = "1"; // Decrease z-index of previous active item
//     const newItem = document.querySelector(
//       `.challenge-item[data-challenge="${clickedBtn.getAttribute(
//         "data-challenge"
//       )}"]`
//     );
//     newItem.style.zIndex = "2"; // Increase z-index of new active item

//     if (isLeft) {
//       switchClasses(activeBtn, clickedBtn, "left");
//       switchClasses(
//         activeItem,
//         document.querySelector(".challenge-item.left"),
//         "left"
//       );
//     } else {
//       switchClasses(activeBtn, clickedBtn, "right");
//       switchClasses(
//         activeItem,
//         document.querySelector(".challenge-item.right"),
//         "right"
//       );
//     }
//   }

//   function switchClasses(activeElement, newActiveElement, className) {
//     activeElement.classList.remove("active");
//     activeElement.classList.add(className);
//     newActiveElement.classList.remove(className);
//     newActiveElement.classList.add("active");
//   }

//   gsap.to(".boat-dragon-head", {
//     rotation: 6,
//     duration: 3,
//     repeat: -1,
//     yoyo: true,
//     ease: "power1.inOut",
//   });
// });

// // ----------------------------- Challenges Page -----------------------------

// // ----------------------------- Landing Page Starts -----------------------------

// window.addEventListener("load", (event) => {
//   gsap.registerPlugin(ScrollTrigger);

//   // Select all span elements inside the section title
//   const spans = document.querySelectorAll(".section-title h1 span");
//   const paragraph = document.querySelector(".section-body p");
//   const button = document.querySelector(".section-link a");

//   // Create a GSAP timeline
//   const gamesBeginTimeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".games-begin",
//       start: "top 75%",
//       toggleActions: "play none none none",
//     },
//   });

//   // Loop through each span and add animations to the timeline
//   spans.forEach((span, index) => {
//     gamesBeginTimeline.fromTo(
//       span,
//       {
//         scale: 2.5,
//         opacity: 0,
//       },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 0.2,
//         ease: "linear",
//       },
//       index * 0.2
//     );
//   });

//   // Animate the paragraph
//   gamesBeginTimeline.fromTo(
//     paragraph,
//     {
//       opacity: 0,
//       y: 30,
//     },
//     {
//       opacity: 1,
//       y: 0,
//       duration: 0.5,
//       ease: "power2.out",
//     }
//   );

//   // Animate the button
//   gamesBeginTimeline.fromTo(
//     button,
//     {
//       opacity: 0,
//     },
//     {
//       opacity: 1,
//       duration: 0.2,
//       ease: "power2.out",
//     }
//   );

//   const playBtn = document.getElementById("play-btn");
//   const video = document.getElementById("video");

//   playBtn.addEventListener("click", () => {
//     video.play();
//     playBtn.style.display = "none"; // Hide play button once the video starts
//   });

//   video.addEventListener("click", () => {
//     if (!video.paused) {
//       video.pause();
//       playBtn.style.display = "block";
//     }
//   });

//   video.addEventListener("ended", () => {
//     playBtn.style.display = "block";
//   });

//   gsap.fromTo(
//     ".left-scroll-handle",
//     { x: "0" },
//     {
//       x: "-56%",
//       scrollTrigger: {
//         trigger: ".ninja-scroll",
//         start: "top 75%",
//         end: "bottom bottom",
//         // scrub: 1.5,
//         // stagger: 2,
//         scrub: 2,
//       },
//     }
//   );

//   gsap.fromTo(
//     ".right-scroll-handle",
//     { x: "0" },
//     {
//       x: "59%",
//       scrollTrigger: {
//         trigger: ".ninja-scroll",
//         start: "top 75%",
//         end: "bottom bottom",
//         // scrub: 1.5,
//         // stagger: 2,
//         scrub: 2,
//       },
//     }
//   );

//   gsap.fromTo(
//     ".scroll-desc",
//     { opacity: 0 },
//     {
//       opacity: 1,
//       scrollTrigger: {
//         trigger: ".ninja-scroll",
//         start: "top 75%",
//         end: "bottom center",
//         scrub: 1.5,
//         stagger: 2,
//       },
//     }
//   );

//   // gsap.fromTo(
//   //   ".ninja-scroll-container .top-cloud",
//   //   { y: "0" },
//   //   {
//   //     y: "0%",
//   //     scrollTrigger: {
//   //       trigger: ".ninja-scroll-container",
//   //       start: "top 100%",
//   //       end: "bottom 100%",
//   //       scrub: 1.5,
//   //       stagger: 2,
//   //       yoyo: true,
//   //     },
//   //   }
//   // );

//   gsap.fromTo(
//     ".ninja-scroll-container .bottom-cloud",
//     { y: "0" },
//     {
//       y: "-20%",
//       scrollTrigger: {
//         trigger: ".bottom-cloud",
//         start: "top 70%",
//         end: "bottom 90%",
//         scrub: 4,
//         yoyo: true,
//       },
//     }
//   );

//   gsap.to(".dragon-house", {
//     duration: 2.5,
//     rotation: 5,
//     ease: "power1.inOut",
//     repeat: -1,
//     yoyo: true,
//   });

//   // Swiper
//   var kungfuModesSwiper = new Swiper(".kungfu-modes-swiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     coverflowEffect: {
//       rotate: 10,
//       stretch: 10,
//       depth: 100,
//       modifier: 3,
//       slideShadows: true,
//     },
//     loop: true,
//     slidesPerView: 2,
//     effect: "coverflow",
//     fadeEffect: {
//       crossFade: true,
//     },
//     speed: 700,
//   });

//   document.querySelectorAll(".swiper-slide").forEach((slide) => {
//     slide.addEventListener("click", () => {
//       const clickedIndex = parseInt(
//         slide.getAttribute("data-swiper-slide-index")
//       );
//       kungfuModesSwiper.slideToLoop(clickedIndex);
//       updateDescription(clickedIndex);
//     });
//   });

//   const initialIndex = kungfuModesSwiper.realIndex;
//   updateDescription(initialIndex);

//   function updateDescription(index) {
//     const activeSlide = document.querySelector(
//       `.swiper-slide[data-swiper-slide-index="${index}"]`
//     );
//     const newDescription = activeSlide
//       ? activeSlide.getAttribute("data-description")
//       : "";

//     const descriptionElement = document.querySelector(".swiper-description");

//     descriptionElement.style.opacity = 0;

//     setTimeout(() => {
//       descriptionElement.textContent = newDescription;
//       descriptionElement.style.opacity = 1;
//     }, 300);
//   }

//   gsap.fromTo(
//     ".top-cloud-left",
//     { x: "-50%", opacity: 0 },
//     {
//       x: "-3%",
//       opacity: 1,
//       duration: 1,
//       ease: "power2.out",
//     }
//   );

//   gsap.fromTo(
//     ".top-cloud-right",
//     { x: "50%", opacity: 0 },
//     {
//       x: "0%",
//       opacity: 1,
//       duration: 1,
//       ease: "power2.out",
//     }
//   );

//   gsap.fromTo(
//     ".bottom-cloud-left",
//     { x: "-50%", opacity: 0 },
//     {
//       x: "0%",
//       opacity: 1,
//       duration: 1,
//       ease: "power2.out",
//     }
//   );

//   gsap.fromTo(
//     ".bottom-cloud-right",
//     { x: "40%", opacity: 0 },
//     {
//       x: "0%",
//       opacity: 1,
//       duration: 1,
//       ease: "power2.out",
//     }
//   );

//   gsap.to(".rays", {
//     duration: 0.6,
//     y: "-100%",
//     ease: "power2.out",
//   });

//   gsap.to(".rays", {
//     duration: 0.5,
//     opacity: 1,
//     ease: "power2.out",
//     delay: 0.2,
//   });

//   gsap.from(".house-center", {
//     duration: 1,
//     y: "100%",
//     ease: "power2.out",
//   });

//   gsap.from(".house-left, .house-right", {
//     duration: 1,
//     y: "100%",
//     ease: "power2.out",
//     delay: 0.2,
//   });

//   gsap.to(".house-container", {
//     y: 150,
//     scrollTrigger: {
//       trigger: ".house-container-main",
//       start: "top 50%",
//       end: "bottom top",
//       scrub: 4,
//       // markers: false,
//     },
//   });

//   gsap.from(".top-cloud-white, .top-cloud-blue", {
//     duration: 1,
//     y: "100%",
//     ease: "power2.out",
//     stagger: 0.1,
//   });

//   gsap.fromTo(
//     ".top-cloud-white",
//     { y: "0" },
//     {
//       y: "-5%",
//       scrollTrigger: {
//         trigger: ".house-container",
//         start: "top 45%",
//         end: "bottom 90%",
//         scrub: 4,
//         yoyo: true,
//       },
//     }
//   );

//   gsap.fromTo(
//     ".top-cloud-blue",
//     { y: "0" },
//     {
//       y: "-15%",
//       scrollTrigger: {
//         trigger: ".house-container",
//         start: "top 45%",
//         end: "bottom 90%",
//         scrub: 4,
//         yoyo: true,
//         // markers: false,
//       },
//     }
//   );
// });

// window.addEventListener("load", function () {
//   const dojoContainer = document.querySelector(".dojo-container");
//   const dojoImage = dojoContainer.querySelector("img");

//   function setDojoContainerHeight() {
//     const imageHeight = dojoImage.clientHeight;
//     dojoContainer.style.height = `${imageHeight}px`;
//   }

//   // Set height initially after image loads
//   dojoImage.addEventListener("load", setDojoContainerHeight);

//   // If the image is already cached and loaded
//   if (dojoImage.complete) {
//     setDojoContainerHeight();
//   }

//   // Adjust the height on window resize
//   window.addEventListener("resize", setDojoContainerHeight);
// });

// // ----------------------------- Landing Page Ends -----------------------------

// // Contact Page Phone Input
