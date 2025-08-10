(function ($) {
    'use strict';

    // Sticky Menu
    $(window).scroll(function () {
        if ($('header').offset().top > 10) {
            $('.top-header').addClass('hide');
            $('.navigation').addClass('nav-bg');
        } else {
            $('.top-header').removeClass('hide');
            $('.navigation').removeClass('nav-bg');
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    //Hero Slider
    $('.hero-slider').slick({
        autoplay: true,
        autoplaySpeed: 7500,
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        arrows: true,
        fade: true,
        prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
        nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>',
        dots: true
    });
    $('.hero-slider').slickAnimation();

    // venobox popup
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });

    
    // mixitup filter
    var containerEl = document.querySelector('[data-ref~="mixitup-container"]');
    var mixer;
    if (containerEl) {
        mixer = mixitup(containerEl, {
            selectors: {
                target: '[data-ref~="mixitup-target"]'
            }
        });
    }

    //  Count Up
    function counter() {
        var oTop;
        if ($('.count').length !== 0) {
            oTop = $('.count').offset().top - window.innerHeight;
        }
        if ($(window).scrollTop() > oTop) {
            $('.count').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
            });
        }
    }
    $(window).on('scroll', function () {
        counter();
    });

    // Login form validation
    $('#loginForm').on('submit', function (e) {
        e.preventDefault();

        var isValid = true;

        // Clear previous errors
        $('#loginPhoneError').hide().text('');
        $('#loginNameError').hide().text('');
        $('#loginPasswordError').hide().text('');

        var phone = $('#loginPhone').val().trim();
        var name = $('#loginName').val().trim();
        var password = $('#loginPassword').val();

        // Phone validation: required and basic phone format (digits only, length 10-15)
        var phoneRegex = /^[0-9]{10,15}$/;
        if (!phone) {
            $('#loginPhoneError').show().text('Phone is required.');
            isValid = false;
        } else if (!phoneRegex.test(phone)) {
            $('#loginPhoneError').show().text('Enter a valid phone number (10-15 digits).');
            isValid = false;
        }

        // Name validation: required
        if (!name) {
            $('#loginNameError').show().text('Name is required.');
            isValid = false;
        }

        // Password validation: required and minimum length 6
        if (!password) {
            $('#loginPasswordError').show().text('Password is required.');
            isValid = false;
        } else if (password.length < 6) {
            $('#loginPasswordError').show().text('Password must be at least 6 characters.');
            isValid = false;
        }

        if (isValid) {
            // If valid, submit the form or perform login action
            // For now, just alert success and reset form
            alert('Login form is valid and ready to be submitted.');
            this.reset();
            $('#loginModal').modal('hide');
        }
    });

})(jQuery);
