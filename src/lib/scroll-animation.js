import gsap from "gsap";

export const scrollAnimation = ( position, target, onUpdate ) => {
    const tl = gsap.timeline();

    tl.to(position, {

        
        x:-0.8017775833,
        y:12,
        z:16.7435332958,

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

        x:3,
        y:-.42,
        z:.80,

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

        
        x:-3,
        y:4,
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

        x:-2,
        y:-.15,
        z:.80,

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
    })

}