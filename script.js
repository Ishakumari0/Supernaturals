function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

loco();


var tl = gsap.timeline()

tl.to("nav",{
    y:"-7vw",
    duration:3,
    scrollTrigger:{
        trigger:"nav",
        scroller:"#main",
        start:"-10% 3%",
        end:"bottom 3%",
        // markers: true,
        scrub:true,
    }
})

tl.to("#page2",{
    y:"-27vw",
    duration:3,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"-70% 30%",
        end:"20% 30%",
        // markers: true,
        scrub:true,
    }
})

tl.to("#content3",{
    y:"-9vw",
    duration:3,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        start:"25% 30%",
        end:"60% 30%",
        // markers: true,
        scrub:true,
    }
})