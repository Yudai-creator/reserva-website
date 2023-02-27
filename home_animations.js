
gsap.registerPlugin(ScrollTrigger);

// to clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);

// clip-path: polygon(0 100%, 0 0, 100% 0, 100% 100%);


//Sequences

let tlMain = gsap.timeline({
    defaults: {
        ease: "power4.inOut",
        duration: 1.3
    }
})

tlMain.to('.web_hero_content h1', { "clip-path": "polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)", y: 0, opacity: 1 })
       .to('.web_hero_content p', { "clip-path": "polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)", y: 0, opacity: 1 }, "-=.9") 
       .to('.web_hero_actions', { y: 0, opacity: 1 }, "-=.9")
       .fromTo('#comb_particles path', {scale: 0, opacity: 0}, {scale: 1, opacity: 1, stagger: .2}, "-=1.2")
       .fromTo('#reserva_iso_graphic', {opacity: 0, x: 0}, { opacity: 1, x: 100}, "-=2")


//   .to('#comb_particles path', {x: 100, stagger: .5}) 
//   .to('#reserva_iso_graphic', { x: 100})


let tlProduce = gsap.timeline({
    defaults: {
        ease: "power4.inOut",
        duration: 1.3
    },
    scrollTrigger:{
        trigger: '.web_produce_industry',
        toggleActions: "restart pause resume pause",
        start: "top bottom",
    }
})

tlProduce.to('.produce_industry_tag', {"clip-path": "polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)", y: 0, opacity: 1})
         .to('.web_produce_industry_content h2', {"clip-path": "polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)", y: 0, opacity: 1}, "-=1.2")
         .to('.web_produce_industry_content h3', {"clip-path": "polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)", y: 0, opacity: 1}, "-=.9")
         .to('.web_produce_industry_content p', {"clip-path": "polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)", y: 0, opacity: 1}, "-=.8")
         .to('.web_produce_industry_actions', {y: 0, opacity: 1 }, "-=.8")
         .fromTo('#produce_industry_graphic', {scale: 0, opacity: 0}, {duration: .3, scale: 1, opacity: 1}, "-=1.4")
         .fromTo('.text_rects', { x: 200, opacity: 0, transformOrigin: "center"}, {duration: .2, stagger: .2, opacity: 1, x: 0})



//Scroll Animations 

// gsap.fromTo('#web_hub_spoke_comb_particle_left path', {scale: 0, opacity: 0}, {duration: 1, scale: 1, opacity: 1, stagger: .2})

hub_and_spoke_graphic

// gsap.fromTo('#hub_and_spoke_graphic', {scale: 0, opacity: 0}, {scrollTrigger:{
//     trigger: '#hub_and_spoke_graphic',
//     toggleActions: "restart pause resume pause",
//     start: "top bottom",
//   },duration: 1, y: 0, scale: 1, opacity: 1, stagger: .2, ease: "circ.out"})

gsap.fromTo('#web_hub_spoke_comb_particle_left path', {scale: 0, opacity: 0}, {scrollTrigger:{
    trigger: '#web_hub_spoke_comb_particle_left',
    toggleActions: "restart pause resume pause",
    start: "top bottom",
  },duration: 2, y: 0, scale: 1, opacity: 1, stagger: .2, ease: "circ.out"})

  gsap.fromTo('#web_hub_spoke_comb_particle_right path', {scale: 0, opacity: 0}, {scrollTrigger:{
    trigger: '#web_hub_spoke_comb_particle_right',
    toggleActions: "restart pause resume pause",
    start: "top bottom",
  },duration: 2, y: 0, scale: 1, opacity: 1, stagger: .2, ease: "circ.out"})


//Pinned animations 

gsap.fromTo('#hub_and_spoke_graphic .circles', {scale: 0, opacity: 0, transformOrigin: "center"}, {scrollTrigger:{
    trigger: '#hub_and_spoke_graphic',
    toggleActions: "restart pause resume pause",
    start: "top top",
    pin: ".web_hub_spoke_main_graphic",
    scrub: true
  },duration: 1, y: 0, scale: 1, opacity: 1, stagger: .5, ease: "circ.out"})

//loops 

// gsap.to('#comb_particles path', {duration: 1, toVars})