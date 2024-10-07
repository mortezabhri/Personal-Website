$(document).ready(() => {
    const scrollShowButtons = 700;
    $(".containerLoader").fadeOut(500);
    setTimeout(() => {
        $(".welcomeContainer").fadeIn(500)
    }, 200)
    setTimeout(() => {
        $(".scroll-help-box").fadeIn(500)
    }, 1000)
    //scroll smoothing
    if (window.scrollY > 500) {
        $(".scroll-help-box").fadeOut(300)
    }
    $(window).scroll((e) => {
        $(".smooth-content").css({"transform": `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${-window.scrollY}, 0, 1)`})
        // $(".welcome-box").css("transform", `translate(-50% , ${-50 - (window.scrollY / 6)}%)`)

        if (window.innerWidth > 580) {
            $(".welcome-box .t1").css({
                "transform": `translate(200px ,${-40 - (window.scrollY / 3)}px)`
            })
            $(".welcome-box .t2").css({
                "transform": `translate(0 ,${-(window.scrollY / 2)}px)`
            })
            $(".welcome-box .t3").css({
                "transform": `translate(-200px ,${40 - (window.scrollY / 1.5)}px)`
            })
        } else {
            $(".welcome-box .t1").css({
                "transform": `translate(90px ,${-40 - (window.scrollY / 3)}px)`
            })
            $(".welcome-box .t2").css({
                "transform": `translate(0 ,${-(window.scrollY / 2)}px)`
            })
            $(".welcome-box .t3").css({
                "transform": `translate(-90px ,${40 - (window.scrollY / 1.5)}px)`
            })
        }

        $(".welcome-box").css("opacity", -(window.scrollY / 700) + 1)
        if (window.scrollY > 500) {
            $(".scroll-help-box").fadeOut(300)
        }
        if (window.innerWidth > 769) {
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
        // indicator
        if (window.scrollY > scrollShowButtons) {
            $(".indicator").css("transform", "translateX(0)")
            $(".profileSection").css("transform", "translateX(0)")
        } else {
            $(".indicator").css("transform", "translateX(20px)")
            $(".profileSection").css("transform", "translateX(150px)")
        }
        const winScroll = window.scrollY - 1000;
        const height = document.documentElement.scrollHeight - window.innerHeight - 1000;
        const scrolled = (winScroll / height) * 100;
        $(".indicatorScrolling").css("height", scrolled + "%");

    });
    //responsive page
    if (window.innerWidth < 769) {
        $(".sideMenu .button-container").css({"width": window.innerWidth});
    }
    if (window.innerWidth < 426) {
        //welcome box
        $(".welcome-box .t1 , .welcome-box .t3").removeClass("fs-5")
        $(".welcome-box .t2").removeClass("fs-1")
        $(".welcome-box .t1 , .welcome-box .t3").addClass("fs-6")
        $(".welcome-box .t2").addClass("fs-2")
    } else {
        //welcome box
        $(".welcome-box .t1 , .welcome-box .t3").removeClass("fs-6")
        $(".welcome-box .t2").removeClass("fs-2")
        $(".welcome-box .t1 , .welcome-box .t3").addClass("fs-5")
        $(".welcome-box .t2").addClass("fs-1")
    }

    // add height body
    let height = $(".smooth-content").height()
    $("body").css("height", height);
    $(window).resize(() => {
        let height = $(".smooth-content").height();
        $("body").css("height", height);
        if (window.innerWidth < 769) {
            let css = {
                "width": window.innerWidth,
                "left": 0,
                "transform": "translateX(0) translateY(0px)"
            };
            if (window.scrollY > 1100) {
                css.transform = "translateX(0) translateY(0px)"
            } else {
                css.transform = "translateX(0) translateY(100px)"
            }
            $(".sideMenu .button-container").css(css);
        } else {
            let css = {
                "width": 350 + "px",
                "left": 0,
                "transform": "translateX(0) translateY(0px)"
            };
            if (window.scrollY > 1100) {
                css.transform = "rotate(90deg) translateY(120px)"
            } else {
                css.transform = "rotate(90deg) translateY(210px)"
            }
            $(".sideMenu .button-container").css(css);
        }
        if (window.innerWidth < 426) {
            //welcome box
            $(".welcome-box .t1 , .welcome-box .t3").removeClass("fs-5")
            $(".welcome-box .t2").removeClass("fs-1")
            $(".welcome-box .t1 , .welcome-box .t3").addClass("fs-6")
            $(".welcome-box .t2").addClass("fs-2")
        } else {
            //welcome box
            $(".welcome-box .t1 , .welcome-box .t3").removeClass("fs-6")
            $(".welcome-box .t2").removeClass("fs-2")
            $(".welcome-box .t1 , .welcome-box .t3").addClass("fs-5")
            $(".welcome-box .t2").addClass("fs-1")
        }
        if (window.innerWidth > 580) {
            $(".welcome-box .t1").css({
                "transform": `translate(200px ,${-40 - (window.scrollY / 3)}px)`
            })
            $(".welcome-box .t3").css({
                "transform": `translate(-200px ,${40 - (window.scrollY / 1.5)}px)`
            })
        } else {
            $(".welcome-box .t1").css({
                "transform": `translate(90px ,${-40 - (window.scrollY / 3)}px)`
            })
            $(".welcome-box .t3").css({
                "transform": `translate(-90px ,${40 - (window.scrollY / 1.5)}px)`
            })
        }
    })

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
                    "right": "10px"
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

    //Bio
    $("#bio").click(() => {
        $(".profileSection").click()
    })

    //GSAP
    //animate up for all selectors
    const countAnimateUp = document.querySelectorAll(".animateUp");
    for (let i = 0; i < countAnimateUp.length; i++) {
        gsap.fromTo(countAnimateUp[i],
            {//from
                scale: .9,
                opacity: 0
            },
            {//to
                scrollTrigger: {
                    trigger: countAnimateUp[i],
                    start: "top bottom",
                    toggleActions: "play none none reverse"
                },
                stagger: .1,
                ease: "back.in(1.7)",
                duration: .6,
                scale: 1,
                y: -50,
                opacity: 1
            });
    }


})