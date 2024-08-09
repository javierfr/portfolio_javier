// Animaciones con ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.from("#figure1", {
    scrollTrigger: {
        trigger: "#figure1",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 100,
    duration: 1
});

gsap.from("#figure2", {
    scrollTrigger: {
        trigger: "#figure2",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 100,
    duration: 1
});

gsap.from("#figure3", {
    scrollTrigger: {
        trigger: "#figure3",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 100,
    duration: 1
});

gsap.from("#figure4", {
    scrollTrigger: {
        trigger: "#figure4",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 100,
    duration: 1
});