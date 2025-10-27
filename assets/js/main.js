! function(e) {
    "use strict";

    function t(t) {
        e(t).length > 0 && e(t).each((function() {
            var t = e(this).find("a");
            e(this).find(t).each((function() {
                e(this).on("click", (function() {
                    var t = e(this.getAttribute("href"));
                    t.length && (event.preventDefault(), e("html, body").stop().animate({
                        scrollTop: t.offset().top - 10
                    }, 1e3))
                }))
            }))
        }))
    }
    if (e(window).on("load", (function() {
            e(".preloader").fadeOut()
        })), e(".preloader").length > 0 && e(".preloaderCls").each((function() {
            e(this).on("click", (function(t) {
                t.preventDefault(), e(".preloader").css("display", "none")
            }))
        })), e(document).ready((function() {
            setTimeout((function() {
                e("#loader").addClass("loaded"), e("#loader").hasClass("loaded") && e("#preloader").delay(9e3).queue((function() {
                    e(this).remove()
                }))
            }), 3e3)
        })), e(".nice-select").length && e(".nice-select").niceSelect(), e.fn.thmobilemenu = function(t) {
            var a = e.extend({
                menuToggleBtn: ".th-menu-toggle",
                bodyToggleClass: "th-body-visible",
                subMenuClass: "th-submenu",
                subMenuParent: "th-item-has-children",
                subMenuParentToggle: "th-active",
                meanExpandClass: "th-mean-expand",
                appendElement: '<span class="th-mean-expand"></span>',
                subMenuToggleClass: "th-open",
                toggleSpeed: 400
            }, t);
            return this.each((function() {
                var t = e(this);

                function i() {
                    t.toggleClass(a.bodyToggleClass);
                    var i = "." + a.subMenuClass;
                    e(i).each((function() {
                        e(this).hasClass(a.subMenuToggleClass) && (e(this).removeClass(a.subMenuToggleClass), e(this).css("display", "none"), e(this).parent().removeClass(a.subMenuParentToggle))
                    }))
                }
                t.find("li").each((function() {
                    var t = e(this).find("ul");
                    t.addClass(a.subMenuClass), t.css("display", "none"), t.parent().addClass(a.subMenuParent), t.prev("a").append(a.appendElement), t.next("a").append(a.appendElement)
                }));
                var n = "." + a.meanExpandClass;
                e(n).each((function() {
                    e(this).on("click", (function(t) {
                        var i;
                        t.preventDefault(), i = e(this).parent(), e(i).next("ul").length > 0 ? (e(i).parent().toggleClass(a.subMenuParentToggle), e(i).next("ul").slideToggle(a.toggleSpeed), e(i).next("ul").toggleClass(a.subMenuToggleClass)) : e(i).prev("ul").length > 0 && (e(i).parent().toggleClass(a.subMenuParentToggle), e(i).prev("ul").slideToggle(a.toggleSpeed), e(i).prev("ul").toggleClass(a.subMenuToggleClass))
                    }))
                })), e(a.menuToggleBtn).each((function() {
                    e(this).on("click", (function() {
                        i()
                    }))
                })), t.on("click", (function(e) {
                    e.stopPropagation(), i()
                })), t.find("div").on("click", (function(e) {
                    e.stopPropagation()
                }))
            }))
        }, e(".th-menu-wrapper").thmobilemenu(), e(window).scroll((function() {
            e(this).scrollTop() > 500 ? e(".sticky-wrapper").addClass("sticky") : e(".sticky-wrapper").removeClass("sticky")
        })), t(".onepage-nav"), t(".scroll-down"), e(".scroll-top")) {
        var a = document.querySelector(".scroll-top"),
            i = document.querySelector(".scroll-top path"),
            n = i.getTotalLength();
        i.style.transition = i.style.WebkitTransition = "none", i.style.strokeDasharray = n + " " + n, i.style.strokeDashoffset = n, i.getBoundingClientRect(), i.style.transition = i.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        var s = function() {
            var t = e(window).scrollTop(),
                a = e(document).height() - e(window).height(),
                s = n - t * n / a;
            i.style.strokeDashoffset = s
        };
        s(), e(window).scroll(s);
        jQuery(window).on("scroll", (function() {
            jQuery(this).scrollTop() > 50 ? jQuery(a).addClass("show") : jQuery(a).removeClass("show")
        })), jQuery(a).on("click", (function(e) {
            return e.preventDefault(), jQuery("html, body").animate({
                scrollTop: 0
            }, 750), !1
        }))
    }
    e("[data-bg-src]").length > 0 && e("[data-bg-src]").each((function() {
        var t = e(this).attr("data-bg-src");
        e(this).css("background-image", "url(" + t + ")"), e(this).removeAttr("data-bg-src").addClass("background-image")
    })), e("[data-bg-color]").length > 0 && e("[data-bg-color]").each((function() {
        var t = e(this).attr("data-bg-color");
        e(this).css("background-color", t), e(this).removeAttr("data-bg-color")
    })), e("[data-border]").each((function() {
        var t = e(this).data("border");
        e(this).css("--th-border-color", t)
    })), e("[data-mask-src]").length > 0 && e("[data-mask-src]").each((function() {
        var t = e(this).attr("data-mask-src");
        e(this).css({
            "mask-image": "url(" + t + ")",
            "-webkit-mask-image": "url(" + t + ")"
        }), e(this).addClass("bg-mask"), e(this).removeAttr("data-mask-src")
    })), e(".th-slider").each((function() {
        var t = e(this),
            a = e(this).data("slider-options"),
            i = t.find(".slider-prev"),
            n = t.find(".slider-next"),
            s = t.find(".slider-pagination"),
            o = a.autoplay,
            r = {
                slidesPerView: 1,
                spaceBetween: a.spaceBetween ? a.spaceBetween : 24,
                loop: 0 != a.loop,
                speed: a.speed ? a.speed : 1e3,
                autoplay: o || {
                    delay: 6e3,
                    disableOnInteraction: !1
                },
                navigation: {
                    nextEl: n.get(0),
                    prevEl: i.get(0)
                },
                pagination: {
                    el: s.get(0),
                    clickable: !0,
                    renderBullet: function(e, t) {
                        return '<span class="' + t + '" aria-label="Go to Slide ' + (e + 1) + '"></span>'
                    }
                }
            },
            c = JSON.parse(t.attr("data-slider-options"));
        c = e.extend({}, r, c);
        new Swiper(t.get(0), c);
        e(".slider-area").length > 0 && e(".slider-area").closest(".container").parent().addClass("arrow-wrap")
    })), e("[data-ani]").each((function() {
        var t = e(this).data("ani");
        e(this).addClass(t)
    })), e("[data-ani-delay]").each((function() {
        var t = e(this).data("ani-delay");
        e(this).css("animation-delay", t)
    })), e("[data-slider-prev], [data-slider-next]").on("click", (function() {
        var t = e(this).data("slider-prev") || e(this).data("slider-next"),
            a = e(t);
        if (a.length) {
            var i = a[0].swiper;
            i && (e(this).data("slider-prev") ? i.slidePrev() : i.slideNext())
        }
    })), e.fn.activateSliderThumbs = function(t) {
        var a = e.extend({
            sliderTab: !1,
            tabButton: ".tab-btn"
        }, t);
        return this.each((function() {
            var t = e(this),
                i = t.find(a.tabButton),
                n = e('<span class="indicator"></span>').appendTo(t),
                s = t.data("slider-tab"),
                o = e(s)[0].swiper;
            if (i.on("click", (function(t) {
                    t.preventDefault();
                    var i = e(this);
                    if (i.addClass("active").siblings().removeClass("active"), l(i), a.sliderTab) {
                        var n = i.index();
                        o.slideTo(n)
                    }
                })), a.sliderTab) {
                o.on("slideChange", (function() {
                    var e = o.realIndex,
                        t = i.eq(e);
                    t.addClass("active").siblings().removeClass("active"), l(t)
                }));
                var r = o.activeIndex,
                    c = i.eq(r);
                c.addClass("active").siblings().removeClass("active"), l(c)
            }

            function l(e) {
                var t = e.position(),
                    a = parseInt(e.css("margin-top")) || 0,
                    i = parseInt(e.css("margin-left")) || 0;
                n.css("--height-set", e.outerHeight() + "px"), n.css("--width-set", e.outerWidth() + "px"), n.css("--pos-y", t.top + a + "px"), n.css("--pos-x", t.left + i + "px")
            }
        }))
    }, e(".testi-thumb").length && e(".testi-thumb").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn"
    }), e(".feature-thumb").length && e(".feature-thumb").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn"
    });
    var o, r, c, l = ".ajax-contact",
        d = '[name="email"]',
        p = e(".form-messages");

    function u() {
        var t = e(l).serialize();
        (function() {
            var t, a = !0;

            function i(i) {
                i = i.split(",");
                for (var n = 0; n < i.length; n++) t = l + " " + i[n], e(t).val() ? (e(t).removeClass("is-invalid"), a = !0) : (e(t).addClass("is-invalid"), a = !1)
            }
            i('[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'), e(d).val() && e(d).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (e(d).removeClass("is-invalid"), a = !0) : (e(d).addClass("is-invalid"), a = !1);
            return a
        })() && jQuery.ajax({
            url: e(l).attr("action"),
            data: t,
            type: "POST"
        }).done((function(t) {
            p.removeClass("error"), p.addClass("success"), p.text(t), e(l + ' input:not([type="submit"]),' + l + " textarea").val("")
        })).fail((function(e) {
            p.removeClass("success"), p.addClass("error"), "" !== e.responseText ? p.html(e.responseText) : p.html("Oops! An error occured and your message could not be sent.")
        }))
    }

    function h(t, a, i, n) {
        var s = t.text().split(a),
            o = "";
        s.length && (e(s).each((function(e, t) {
            o += '<span class="' + i + (e + 1) + '">' + t + "</span>" + n
        })), t.empty().append(o))
    }
    e(l).on("submit", (function(e) {
            e.preventDefault(), u()
        })), o = ".popup-search-box", r = ".searchClose", c = "show", e(".searchBoxToggler").on("click", (function(t) {
            t.preventDefault(), e(o).addClass(c)
        })), e(o).on("click", (function(t) {
            t.stopPropagation(), e(o).removeClass(c)
        })), e(o).find("form").on("click", (function(t) {
            t.stopPropagation(), e(o).addClass(c)
        })), e(r).on("click", (function(t) {
            t.preventDefault(), t.stopPropagation(), e(o).removeClass(c)
        })),
        function(t, a, i, n) {
            e(a).on("click", (function(a) {
                a.preventDefault(), e(t).addClass(n)
            })), e(t).on("click", (function(a) {
                a.stopPropagation(), e(t).removeClass(n)
            })), e(t + " > div").on("click", (function(a) {
                a.stopPropagation(), e(t).addClass(n)
            })), e(i).on("click", (function(a) {
                a.preventDefault(), a.stopPropagation(), e(t).removeClass(n)
            }))
        }(".sidemenu-wrapper", ".sideMenuToggler", ".sideMenuCls", "show"), e(".popup-image").magnificPopup({
            type: "image",
            mainClass: "mfp-zoom-in",
            removalDelay: 260,
            gallery: {
                enabled: !0
            }
        }), e(".popup-video").magnificPopup({
            type: "iframe",
            mainClass: "mfp-zoom-in",
            removalDelay: 260
        }), e(".popup-content").magnificPopup({
            type: "inline",
            midClick: !0
        });
    var m = {
        init: function() {
            return this.each((function() {
                h(e(this), "", "char", "")
            }))
        },
        words: function() {
            return this.each((function() {
                h(e(this), " ", "word", " ")
            }))
        },
        lines: function() {
            return this.each((function() {
                var t = "eefec303079ad17405c889e092e105b0";
                h(e(this).children("br").replaceWith(t).end(), t, "line", "")
            }))
        }
    };

    function g(e) {
        return parseInt(e, 10)
    }
    e.fn.lettering = function(t) {
        return t && m[t] ? m[t].apply(this, [].slice.call(arguments, 1)) : "letters" !== t && t ? (e.error("Method " + t + " does not exist on jQuery.lettering"), this) : m.init.apply(this, [].slice.call(arguments, 0))
    }, e(".hero-title-anime").lettering(), e.fn.sectionPosition = function(t, a) {
        e(this).each((function() {
            var i, n, s, o, r, c = e(this);
            i = Math.floor(c.height() / 2), n = c.attr(t), s = c.attr(a), o = g(e(s).css("padding-top")), r = g(e(s).css("padding-bottom")), "top-half" === n ? (e(s).css("padding-bottom", r + i + "px"), c.css("margin-top", "-" + i + "px")) : "bottom-half" === n && (e(s).css("padding-top", o + i + "px"), c.css("margin-bottom", "-" + i + "px"))
        }))
    };

    function f() {
        e(".feature-circle .progressbar").each((function() {
            var t = e(this).attr("data-path-color"),
                a = e(this).offset().top,
                i = e(window).scrollTop(),
                n = e(this).find(".circle").attr("data-percent"),
                s = (parseInt(n, 10), parseInt(100, 10), e(this).data("animate"));
            a < i + e(window).height() - 30 && !s && (e(this).data("animate", !0), e(this).find(".circle").circleProgress({
                startAngle: -Math.PI / 2,
                value: n / 100,
                size: 100,
                thickness: 6,
                emptyFill: "#33425A",
                lineCap: "round",
                fill: {
                    color: t
                }
            }).on("circle-animation-progress", (function(t, a, i) {
                e(this).find(".circle-num").text((100 * i).toFixed(0) + "%")
            })).stop())
        })), e(".skill-circle .progressbar").each((function() {
            var t = e(this).attr("data-path-color"),
                a = e(this).offset().top,
                i = e(window).scrollTop(),
                n = e(this).find(".circle").attr("data-percent"),
                s = (parseInt(n, 10), parseInt(100, 10), e(this).data("animate"));
            a < i + e(window).height() - 30 && !s && (e(this).data("animate", !0), e(this).find(".circle").circleProgress({
                startAngle: -Math.PI / 2,
                value: n / 100,
                size: 176,
                thickness: 8,
                emptyFill: "#EFF1F9",
                lineCap: "round",
                fill: {
                    color: t
                }
            }).on("circle-animation-progress", (function(t, a, i) {
                e(this).find(".circle-num").text((100 * i).toFixed(0) + "%")
            })).stop())
        }))
    }
    e("[data-sec-pos]").length && e("[data-sec-pos]").imagesLoaded((function() {
        e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for")
    })), e("#serviceAccordion").on("show.bs.collapse", (function(t) {
        var a = e(t.target).closest(".accordion-item").index();
        e(".th-accordion_images img").removeClass("active"), e(".th-accordion_images img").eq(a).addClass("active")
    })), e(".accordion-item-wrapp li:first-child").addClass("active"), e(".according-img-tab").hide(), e(".according-img-tab:first").show(), e(".accordion-item-wrapp .accordion-item-content").mouseenter((function() {
        e(".accordion-item-wrapp .accordion-item-content").removeClass("active"), e(".according-img-tab").hide();
        var t = e(this).find(".accordion-tab-item").attr("data-bs-target");
        return e(t).fadeIn(), !1
    })), e(".filter-active").imagesLoaded((function() {
        if (e(".filter-active").length > 0) {
            var t = e(".filter-active").isotope({
                itemSelector: ".filter-item",
                filter: "*",
                masonry: {
                    columnWidth: 1
                }
            });
            e(".filter-menu-active").on("click", "button", (function() {
                var a = e(this).attr("data-filter");
                t.isotope({
                    filter: a
                })
            })), e(".filter-menu-active").on("click", "button", (function(t) {
                t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active")
            }))
        }
    })), e(".masonary-active").imagesLoaded((function() {
        e(".masonary-active").length > 0 && e(".masonary-active").isotope({
            itemSelector: ".filter-item",
            filter: "*",
            masonry: {
                columnWidth: 1
            }
        })
    })), e(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded((function() {
        var t = ".masonary-active, .woocommerce-Reviews .comment-list";
        e(t).length > 0 && e(t).isotope({
            itemSelector: ".filter-item, .woocommerce-Reviews .comment-list li",
            filter: "*",
            masonry: {
                columnWidth: 1
            }
        }), e('[data-bs-toggle="tab"]').on("shown.bs.tab", (function(a) {
            e(t).isotope({
                filter: "*"
            })
        }))
    })), e(".counter-number").counterUp({
        delay: 10,
        time: 1e3
    }), e.fn.shapeMockup = function() {
        e(this).each((function() {
            var t = e(this),
                a = t.data("top"),
                i = t.data("right"),
                n = t.data("bottom"),
                s = t.data("left");
            t.css({
                top: a,
                right: i,
                bottom: n,
                left: s
            }).removeAttr("data-top").removeAttr("data-right").removeAttr("data-bottom").removeAttr("data-left").parent().addClass("shape-mockup-wrap")
        }))
    }, e(".shape-mockup") && e(".shape-mockup").shapeMockup(), e(".progress-bar").waypoint((function() {
        e(".progress-bar").css({
            animation: "animate-positive 1.8s",
            opacity: "1"
        })
    }), {
        offset: "75%"
    }), e(".price_slider").slider({
        range: !0,
        min: 10,
        max: 100,
        values: [10, 75],
        slide: function(t, a) {
            e(".from").text("$" + a.values[0]), e(".to").text("$" + a.values[1])
        }
    }), e(".from").text("$" + e(".price_slider").slider("values", 0)), e(".to").text("$" + e(".price_slider").slider("values", 1)), e(".tilt-active").tilt({
        maxTilt: 7,
        perspective: 1e3
    }), f(), e(window).scroll(f), e(".th-screen").length && e(window).on("scroll", (function() {
        ! function(t, a = 0) {
            var i = e(window).scrollTop(),
                n = i + e(window).height(),
                s = e(t).offset().top;
            return s + e(t).height() - parseInt(a) <= n && s >= i
        }(".th-screen", 200) ? e(".th-screen").removeClass("th-visible"): e(".th-screen").addClass("th-visible")
    })), e("#ship-to-different-address-checkbox").on("change", (function() {
        e(this).is(":checked") ? e("#ship-to-different-address").next(".shipping_address").slideDown() : e("#ship-to-different-address").next(".shipping_address").slideUp()
    })), e(".woocommerce-form-login-toggle a").on("click", (function(t) {
        t.preventDefault(), e(".woocommerce-form-login").slideToggle()
    })), e(".woocommerce-form-coupon-toggle a").on("click", (function(t) {
        t.preventDefault(), e(".woocommerce-form-coupon").slideToggle()
    })), e(".shipping-calculator-button").on("click", (function(t) {
        t.preventDefault(), e(this).next(".shipping-calculator-form").slideToggle()
    })), e('.wc_payment_methods input[type="radio"]:checked').siblings(".payment_box").show(), e('.wc_payment_methods input[type="radio"]').each((function() {
        e(this).on("change", (function() {
            e(".payment_box").slideUp(), e(this).siblings(".payment_box").slideDown()
        }))
    })), e(".rating-select .stars a").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault(), e(this).siblings().removeClass("active"), e(this).parent().parent().addClass("selected"), e(this).addClass("active")
        }))
    })), e(".quantity-plus").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault();
            var a = e(this).siblings(".qty-input"),
                i = parseInt(a.val(), 10);
            isNaN(i) || a.val(i + 1)
        }))
    })), e(".quantity-minus").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault();
            var a = e(this).siblings(".qty-input"),
                i = parseInt(a.val(), 10);
            !isNaN(i) && i > 1 && a.val(i - 1)
        }))
    })), e(".color-switch-btns button").each((function() {
        const t = e(this),
            a = t.data("color");
        t.css("--theme-color", a), t.on("click", (function() {
            const t = e(this).data("color");
            e("body").css("--theme-color", t)
        }))
    })), e("[theme-color]").length > 0 && e("[theme-color]").each((function() {
        var t = e(this).attr("theme-color");
        e(this).get(0).style.setProperty("--theme-color", t), e(this).removeAttr("theme-color")
    })), e("[title-color]").length > 0 && e("[title-color]").each((function() {
        var t = e(this).attr("title-color");
        e(this).get(0).style.setProperty("--title-color", t), e(this).removeAttr("title-color")
    })), e(document).on("click", ".switchIcon", (function() {
        e(".color-scheme-wrap").toggleClass("active")
    }));
    var v = document.getElementById("filt-monthly"),
        b = document.getElementById("filt-yearly"),
        w = document.getElementById("switcher"),
        y = document.getElementById("monthly"),
        C = document.getElementById("yearly");
    e(".pricing-tabs").length && (v.addEventListener("click", (function() {
        w.checked = !1, v.classList.add("toggler--is-active"), b.classList.remove("toggler--is-active"), y.classList.remove("hide"), C.classList.add("hide")
    })), b.addEventListener("click", (function() {
        w.checked = !0, b.classList.add("toggler--is-active"), v.classList.remove("toggler--is-active"), y.classList.add("hide"), C.classList.remove("hide")
    })), w.addEventListener("click", (function() {
        b.classList.toggle("toggler--is-active"), v.classList.toggle("toggler--is-active"), y.classList.toggle("hide"), C.classList.toggle("hide")
    }))), e(document).ready((function() {
        var t = new Swiper(".featureSlide", {
            autoplay: {
                delay: 5e3,
                disableOnInteraction: !1
            },
            speed: 500,
            direction: "horizontal",
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar"
            },
            loop: !1,
            effect: "slide",
            spaceBetween: 30,
            on: {
                init: function() {
                    e(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active"), e(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active")
                },
                slideChangeTransitionStart: function() {
                    e(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active"), e(".swiper-pagination-custom .swiper-pagination-switch").eq(t.realIndex).addClass("active")
                }
            }
        });
        e(".swiper-pagination-custom .swiper-pagination-switch").click((function() {
            t.slideTo(e(this).index()), e(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active"), e(this).addClass("active")
        }))
    }));
    new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0
    });
    // (new WOW).init(), window.addEventListener("contextmenu", (function(e) {
    //     e.preventDefault()
    // }), !1), document.onkeydown = function(e) {
    //     return 123 != event.keyCode && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) && ((!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) && void 0))))
    // }
}(jQuery);