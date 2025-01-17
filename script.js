
(function () {
    var scroll = new LocomotiveScroll();
})();

gsap.set('.marqueeText', {
    scale: 5,
    rotate : '16deg'
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.home',
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
        pin: true
    },
})

tl
.to(".videoContainer", {
    '--clip'  : "0%",
    ease: Power2
}, 'a')
.to(".marqueeText", {
    scale: 1,
    ease: Power2,
    rotate: 0
}, 'a')
.to('.left1', {
    xPercent : -10,
}, 'b')
.to('.left2', {
    xPercent : -15
}, 'b')
.to('.right1', {
    xPercent : 12
}, 'b')
.to('.right2', {
    xPercent : 9
}, 'b')
.to('.headingTxt', {
    opacity: 1
}, 'b')



gsap.to('.slide', {
    scrollTrigger: {
        trigger: '.real',
        start: 'top top',
        stop: 'bottom bottom',
        scrub: 2
    },
    xPercent: -200,
    ease: "linear"
})



var clutter= "";

document.querySelector('.testimonialCon')
.textContent.split("").forEach(function(e){
    if (e === " ")clutter += "<span>&nbsp;</span>";
    clutter += `<span>${e}</span>`
});

document.querySelector('.testimonialCon').innerHTML = clutter;

gsap.set('.testimonialCon span', {
    opacity: 0.1
})

gsap.to('.testimonialCon span', {
    scrollTrigger: {
        trigger: '.testimonials',
        start: 'top 40%',
        end: 'bottom 100%',
        scrub : 1
    },
    opacity: 1,
    stagger: 1,
})


document.querySelectorAll('.section').forEach(function(e){
    ScrollTrigger.create({
        trigger: e,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: function(){
            document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function(){
            document.body.setAttribute("theme", e.dataset.color);
        }

    })
})
