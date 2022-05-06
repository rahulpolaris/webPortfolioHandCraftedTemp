let tl = gsap.timeline({
    delay:0.2,
    repeat:0,
    onComplete: ()=>{
        console.log("gsap executed")
    },
    defaults:{
        duration:1.2,
        ease:"bounce"
    },


})
gsap.registerPlugin(ScrollTrigger)
export default function gsapAnimations(){
    tl.fromTo(".nav-container",{scaleY:0,transformOrigin:"center top"},{scaleY:1,transformOrigin:"center top"},)
    .fromTo(".about-content h1",{x:"-60%",transformOrigin:"center center",opacity:0},{x:0,transformOrigin:"center center",opacity:1,duration:0.8,ease:"none"})
    .fromTo(".about-picture",{x:"20%",transformOrigin:"center center",opacity:0},{x:0,transformOrigin:"center center",opacity:1,duration:0.7,ease:"none"},"<0.3")
    .fromTo(".about-button-link",{y:"100%",transformOrigin:"center center",opacity:0},{y:0,transformOrigin:"center center",opacity:1,duration:0.8,ease:"none"},"<0.3")

    gsap.fromTo(".skill-card-1",{scale:0.5,opacity:0},{
        scrollTrigger:{
            trigger:".skill-card-1",
            start:"top center",
            end:"top 80px",
            toggleActions:"play resume resume resume"
            // end:"20px 80%"
        },scale:1,opacity:1,duration:0.75,repeat:0,ease:"bounce"

    })
    gsap.fromTo(".skill-card-2",{scale:0.5,opacity:0},{
        scrollTrigger:{
            trigger:".skill-card-2",
            start:"top center",
            end:"top 80px",
            toggleActions:"play resume resume resume"
            // end:"20px 80%"
        },scale:1,opacity:1,duration:0.75,repeat:0,ease:"bounce"

    })
    gsap.fromTo(".skill-card-3",{scale:0.5,opacity:0},{
        scrollTrigger:{
            trigger:".skill-card-3",
            start:"top center",
            end:"top 80px",
            toggleActions:"play resume resume resume"
            // end:"20px 80%"
        },scale:1,opacity:1,duration:0.75,repeat:0,ease:"bounce"

    })
    gsap.fromTo(".skill-card-4",{scale:0.5,opacity:0},{
        scrollTrigger:{
            trigger:".skill-card-4",
            start:"top center",
            end:"top 80px",
            toggleActions:"play resume resume resume"
            // end:"20px 80%"
        },scale:1,opacity:1,duration:0.75,repeat:0,ease:"bounce"

    })
}