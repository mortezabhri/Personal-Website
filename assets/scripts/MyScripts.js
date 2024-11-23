$(document).ready(() => {

    // loader fade
    $("#loaderSec").fadeOut(300);

    // add height body
    let height = $(".smooth-content").height()
    $("body").css("height", height);

    // welcome box fade in
    gsap.to("#welcome .t1 , #welcome .t2 , #welcome .t3", {
        opacity: 1, duration: 1, stagger: .2, delay: .4
    })

    // scroll helper fade in/out
    gsap.to("#scroll-help", {
        opacity: 1, duration: 1, delay: 1.3
    })
    if (window.scrollY > 500) {
        $("#scroll-help").fadeOut(300)
    }

    //a value for showing sections
    const scrollShowButtons = 500;

    // for respansive welcome
    if (window.innerWidth > 580) {
        $("#welcome .t1").css({
            "transform": `translate(48px ,${-96 - (window.scrollY / 3)}px)`
        })
        $("#welcome .t2").css({
            "transform": `translate(0 ,${-(window.scrollY / 2)}px)`
        })
        $("#welcome .t3").css({
            "transform": `translate(-48px ,${96 - (window.scrollY / 1.5)}px)`
        })
    } else {
        $("#welcome .t1").css({
            "transform": `translate(12px ,${-96 - (window.scrollY / 3)}px)`
        })
        $("#welcome .t2").css({
            "transform": `translate(0 ,${-(window.scrollY / 2)}px)`
        })
        $("#welcome .t3").css({
            "transform": `translate(-12px ,${96 - (window.scrollY / 1.5)}px)`
        })
    }

    //profile
    $(".profileSection").click(() => {
        if ($(".bg-filter").css("display") == "none") {
            $(".bg-filter").fadeIn(500);
            $(".profileSection").css({
                "width": (window.innerWidth > 769) ? "500px" : "300px",
                "height": (window.innerWidth > 769) ? "400px" : "300px",
                "border-radius": "10px",
                "top": "40px",
                "right": "20px"
            })
            $(".imageContainer").css({
                "transform": "scale(1.5)"
            })
            $(".contentContainer").css("display", "block")
            setTimeout(() => {
                $(".contentContainer").css({
                    "opacity": 1,
                    "transform": "translateY(0)"
                })
            }, 500)
        }
    })
    $(".bg-filter").click(() => {
        if ($(".bg-filter").css("display") != "none" && $(".contentContainer").css("opacity") == 1) {
            $(".contentContainer").css({
                "opacity": 0,
                "transform": "translateY(50px)"
            })
            setTimeout(() => {
                $(".bg-filter").fadeOut(500)
                $(".profileSection").css({
                    "width": "100px",
                    "height": "100px",
                    "border-radius": "100px",
                    "top": "10px",
                    "right": "-100px"
                })
                $(".imageContainer").css({
                    "transform": "scale(1)"
                })
                $(".contentContainer").css({
                    "display": "none"
                })
            }, 200)
        }
    })
    $("#bio").click(() => {
        $(".profileSection").click()
    })

    /* ----- WINDOWS ACTIONS ----- */

    //scroll smoothing
    $(window).scroll((e) => {

        // body container
        $(".smooth-content").css({"transform": `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${-window.scrollY}, 0, 1)`})

        // for respansive welcome
        if (window.innerWidth > 580) {
            $("#welcome .t1").css({
                "transform": `translate(48px ,${-96 - (window.scrollY / 3)}px)`
            })
            $("#welcome .t2").css({
                "transform": `translate(0 ,${-(window.scrollY / 2)}px)`
            })
            $("#welcome .t3").css({
                "transform": `translate(-48px ,${96 - (window.scrollY / 1.5)}px)`
            })
        } else {
            $("#welcome .t1").css({
                "transform": `translate(12px ,${-96 - (window.scrollY / 3)}px)`
            })
            $("#welcome .t2").css({
                "transform": `translate(0 ,${-(window.scrollY / 2)}px)`
            })
            $("#welcome .t3").css({
                "transform": `translate(-12px ,${96 - (window.scrollY / 1.5)}px)`
            })
        }
        $("#welcome").css("opacity", -(window.scrollY / 600) + 1)

        // scroll helper
        if (window.scrollY > 500) {
            $("#scroll-help").fadeOut(300)
        }

        // indicator
        if (window.scrollY > scrollShowButtons) {
            $("#indicator").css("transform", "translateX(0)")
            $(".profileSection").css("transform", "translateX(0)")
        } else {
            $("#indicator").css("transform", "translateX(20px)")
            $(".profileSection").css("transform", "translateX(150px)")
        }
        const winScroll = window.scrollY - 1000;
        const height = document.documentElement.scrollHeight - window.innerHeight - 1000;
        const scrolled = (winScroll / height) * 100;
        $("#indicator div").css("height", scrolled + "%");


        //menu side
        if (window.innerWidth > 767) {
            if (window.scrollY > scrollShowButtons) {
                $(".button-container").css("transform", "rotate(90deg) translateY(120px)")
            } else {
                $(".button-container").css("transform", "rotate(90deg) translateY(210px)")
            }
        } else {
            if (window.scrollY > scrollShowButtons) {
                $(".button-container").css("transform", "translateX(0) translateY(0)")
            } else {
                $(".button-container").css("transform", "translateX(0) translateY(100px)")
            }
        }

    });

    $(window).resize(() => {
        // add height body
        height = $(".smooth-content").height();
        $("body").css("height", height);

        // for respansive welcome
        if (window.innerWidth > 580) {
            $("#welcome .t1").css({
                "transform": `translate(48px ,${-96 - (window.scrollY / 3)}px)`
            })
            $("#welcome .t2").css({
                "transform": `translate(0 ,${-(window.scrollY / 2)}px)`
            })
            $("#welcome .t3").css({
                "transform": `translate(-48px ,${96 - (window.scrollY / 1.5)}px)`
            })
        } else {
            $("#welcome .t1").css({
                "transform": `translate(12px ,${-96 - (window.scrollY / 3)}px)`
            })
            $("#welcome .t2").css({
                "transform": `translate(0 ,${-(window.scrollY / 2)}px)`
            })
            $("#welcome .t3").css({
                "transform": `translate(-12px ,${96 - (window.scrollY / 1.5)}px)`
            })
        }

        //menu side
        if (window.innerWidth > 767) {
            if (window.scrollY > scrollShowButtons) {
                $(".button-container").css("transform", "rotate(90deg) translateY(120px)")
            } else {
                $(".button-container").css("transform", "rotate(90deg) translateY(210px)")
            }
        } else {
            if (window.scrollY > scrollShowButtons) {
                $(".button-container").css("transform", "translateX(0) translateY(0)")
            } else {
                $(".button-container").css("transform", "translateX(0) translateY(100px)")
            }
        }

    })

    let cr = new SplitType("#cr-mb");
    gsap.to(".word:nth-child(3)", {
        scrollTrigger: {
            trigger: ".word:nth-child(3)",
            start: "top bottom",
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        duration: 1.2,
        delay: 1.5,
        transform: "rotateX(0)"
    })
    gsap.to(".char", {
        scrollTrigger: {
            trigger: ".char",
            start: "top bottom",
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        duration: .8,
        y: 0,
        x: 0,
        rotate: 0,
        stagger: .1,
        ease: "back.out(1.4)"
    })


    //GSAP Codes
    //animate up for all selectors
    const countAnimateUp = document.querySelectorAll(".animateUp");
    let status = {
        "status": false,
        "elementID": 0
    };
    for (let i = 0; i < countAnimateUp.length; i++) {
        gsap.fromTo(countAnimateUp[i],
            {//from
                scale: .9,
                opacity: 0,
                y: 80
            },
            {//to
                scrollTrigger: {
                    trigger: countAnimateUp[i],
                    start: "top bottom",
                    toggleActions: "play none none reverse"
                },
                ease: "back.in(1.7)",
                duration: .6,
                scale: 1,
                y: 0,
                opacity: 1,
                onReverseComplete: function () {
                    $(countAnimateUp[i]).css("transition", "none")
                },
                onComplete: function () {
                    $(countAnimateUp[i]).css("transition", "all 0.2s ease")
                }
            });
    }


})
