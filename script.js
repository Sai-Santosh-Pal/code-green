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
        pin: ".gallery",
        scrub: 1, 
        invalidateOnRefresh: true
    }
 })
});
