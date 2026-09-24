const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
console.log("check")
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    let horizontalSection = document.querySelector(".line")
    gsap.to(".line", {
        x: () => -(horizontalSection.scrollWidth - window.innerWidth),
        scrollTrigger: {
            trigger: ".line",
            start: "center center",
            end: () => "+=" + (horizontalSection.scrollWidth),
            pin: ".carousel-wrapper",
            scrub: 1,
            invalidateOnRefresh: true
        }
    })
     gsap.set(".line2", {
        autoAlpha:0, 
        y: "100%"
    })
    gsap.to(".line2", {
        autoAlpha: 1,
        y: () => "+=" + "105%",
        scrollTrigger: {
            trigger: ".line",
            start: "center center",
            end: (horizontalSection.scrollWidth),
            scrub: 1,
            invalidateOnRefresh: true
        },
    })
    gsap.to(".line2", {
        x: () => (horizontalSection.scrollWidth - window.innerWidth) / 10,
        scrollTrigger: {
            trigger: ".line",
            start: "center center",
            end: () => "+=" + (horizontalSection.scrollWidth),
            scrub: 1,
            invalidateOnRefresh: true
        },
        delay:10
    })

     gsap.set(".line3", {
        autoAlpha:0, 
        y: "-100%"
    })
    gsap.to(".line3", {
        autoAlpha: () => "+=" + "105%",
        y: () => "-=" + "105%",
        scrollTrigger: {
            trigger: ".line",
            start: "center center",
            end: (horizontalSection.scrollWidth),
            scrub: 1,
            invalidateOnRefresh: true
        },
    })
    gsap.to(".line3", {
        x: () => (horizontalSection.scrollWidth - window.innerWidth) / 10,
        scrollTrigger: {
            trigger: ".line",
            start: "center center",
            end: () => "+=" + (horizontalSection.scrollWidth),
            scrub: 1,
            invalidateOnRefresh: true
        },
        delay:10
    })
});
