(function ($) {
    'use strict';
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 150) {
            $('.navbar-area').addClass("is-sticky");
        } else {
            $('.navbar-area').removeClass("is-sticky");
        }
    });
    // $('.popup-youtube').magnificPopup({
    //     disableOn: 320,
    //     type: 'iframe',
    //     mainClass: 'mfp-fade',
    //     removalDelay: 160,
    //     preloader: false,
    //     fixedContentPos: false
    // });
    $('.banner-slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        navText: ["<i class='icofont-rounded-double-left'></i>", "<i class='icofont-rounded-double-right'></i>"],
        autoplay: false,
        items: 1,
        mouseDrag: false,
        autoplayHoverPause: true,
        autoplayTimeout: 4000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });
    $('.feedback-slider').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<i class='icofont-rounded-double-left'></i>", "<i class='icofont-rounded-double-right'></i>"],
        autoplay: true,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });
    $('.feedback-slider-area').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<i class='icofont-rounded-double-left'></i>", "<i class='icofont-rounded-double-right'></i>"],
        autoplay: true,
        smartSpeed: 1500,
        items: 1
    });
    $('.company-slider').owlCarousel({
        loop: true,
        margin: 80,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 2000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $(".accordion-title").click(function (e) {
        var accordionitem = $(this).attr("data-tab");
        $("#" + accordionitem).slideToggle().parent().siblings().find(".accordion-content").slideUp();
        $(this).toggleClass("active-title");
        $("#" + accordionitem).parent().siblings().find(".accordion-title").removeClass("active-title");
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('.top-btn').fadeIn();
        } else {
            $('.top-btn').fadeOut();
        }
    });
    $('.top-btn').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            event.preventDefault();
        }
    });
    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        } else {
            formErrorSub();
        }
    }
    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function () {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub() {
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function () {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }
    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    $(".newsletter-form").ajaxChimp({
        url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
        callback: callbackFunction
    });
    new WOW().init();
    $(window).on('load', function () {
        $('.top-btn').fadeOut();
    });
    $(window).on('load', function () {
        $(".loader-content").fadeOut(1000);
    })

}
)(jQuery);
function setTheme(themeName) {
    localStorage.setItem('fixa_theme', themeName);
    document.documentElement.className = themeName;
}
function toggleTheme() {
    if (localStorage.getItem('fixa_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}




const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}



const button_step1El = document.querySelector('.quiz_step1 button')
const render_container = document.querySelector('.quiz_render')
var step = 1
function nextStep () {
    console.log(step);
    if (step < 7) {
        const next_form = document.querySelector('.quiz_step' + step)
        console.log(render_container);
        render_container.innerHTML = ''
        render_container.appendChild(next_form)
    } else {
        alert('Успех')
        onModal()
        onSucces()
    }

}
function validateCountry(name, event) {
    event.preventDefault()
    let checkboxes = document.querySelectorAll(`input[name="${name}"]`);
    let isChecked = false;
    console.log(checkboxes);
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            isChecked = true;
            break;
        }
    }
    if (!isChecked) {
        const inp = document.querySelector('.you_country')
        if (inp.value.trim() == '') {
            alert('Выберите хотя бы одну опцию!');
            return false;
        } else {
            step++
            nextStep()
        }

    }
    step++


    nextStep()

    return true;
}
function validateFormCheckbox(name, event) {
    event.preventDefault()
    let checkboxes = document.querySelectorAll(`input[name="${name}"]`);
    let isChecked = false;
    console.log(checkboxes);
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            isChecked = true;
            break;
        }
    }

    if (!isChecked) {
        alert('Выберите хотя бы одну опцию!');
        return false;
    }
    step++


    nextStep()

    return true;
}
function oneInputValid(event, class_name) {
    event.preventDefault()
    const inp = document.querySelector('.' + class_name)
    console.log(inp.value);
    if (inp.value.trim() !== '') {
        step++
        nextStep()
        return true
    }
    alert('Поле не должен быть пустым!');

    return false
}
function onModal() {
    const modal = document.querySelector('.quiz')
    modal.classList.toggle('close_modal')
}

function onSucces() {
    const modal = document.querySelector('.succesModal_overlay')
    const modal2 = document.querySelector('.succesModal')
    modal2.classList.toggle('close_succes')
    modal.classList.toggle('close_succes')
}