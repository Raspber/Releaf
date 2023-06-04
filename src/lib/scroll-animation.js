import gsap from "gsap";

export const scrollAnimation = ( position, target, onUpdate ) => {
    const tl = gsap.timeline();
    
    tl.to(position, {

        
        x:.25,
        y:12,
        z:11.5,

        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 1,
            immediateRender: false,

        },
        onUpdate
    }),

    tl.to(target, {

        x:3.5,
        y:-.8,
        z:0,

        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 1,
            immediateRender: false,

        }
    }),
    
    tl.to('.jumbotron-section', {

        opacity: 0,
        scrollTrigger: {
            trigger: '.sound-section',
            start: "top bottom",
            end: ".display-section",
            scrub: 2,
            immediateRender: false,

        }
    }),

    tl.to(position, {

        
        x:3,
        y:2,
        z:12,

        scrollTrigger: {
            trigger: '.display-section',
            start: "top bottom",
            end: "top top",
            scrub: 1,
            immediateRender: false,

        },
    }),

    tl.to(target, {

        x: -1.5,
        y:-.025,
        z:-.05,

        scrollTrigger: {
            trigger: '.display-section',
            start: "top bottom",
            end: "top top",
            scrub: 1,
            immediateRender: false,


        }
    }),

    tl.to('.sound-section', {

        opacity: 0,
        scrollTrigger: {
            trigger: '.display-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,

        }, onUpdate
    }),
    
    tl.to('.display-section', {

        opacity: 0,
        scrollTrigger: {
            trigger: '.buynow-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,

        }, onUpdate
    }),

    tl.to(position, {

        
        x: 25,
        y:-.85,
        z:-.95,

        scrollTrigger: {
            trigger: '.buynow-section',
            start: "top bottom",
            end: "top top",
            scrub: 1,
            immediateRender: false,
            duration: 1,

        },
    }),

    tl.to(target, {

        x: -6,
        y:-1.5,
        z:-5,

        scrollTrigger: {
            trigger: '.buynow-section',
            start: "top bottom",
            end: "top top",
            scrub: 1,
            immediateRender: false,


        }, onUpdate
    });
}