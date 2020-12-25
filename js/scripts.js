jQuery(window).ready(function ($) {


     "use strict";

    /*
     * Superfish menu for #main-nav
     */
  /* neu can bo ra
  $('#main-nav').superfish({
        pathClass: 'current',
        delay: 800,
        speed: 'normal',
        animation: {
            height: "show",
            opacity: "show"
        },
        animationOut: {
            height: "hide",
            opacity: "hide"
        },
    });
  */
    // Superfish Menu as a Mobile Menu
    $('.mobile-menu-controll').click(function () { // Capture responsive menu button click
        $('.sf-menu').slideToggle();

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });

    /*
     * Pie Chart for Skills
     */
    $('.percentage').easyPieChart({
        lineCap: "square",
        barColor: "#00c2e7",
        scaleColor: false,
        lineWidth: 5,
        size: 150
    });

    
    /*
     * Fraction Slider for Home page.
     */
    $('.slider').fractionSlider({
        'fullWidth':            true,
        'controls':             true, 
        'pager':                false,
        'responsive':           true,
        'dimensions':           "1200,500",
        'increase':             false,
        'pauseOnHover':         false,
        'slideTransitionSpeed' : 300,
        'slideEasing':          'swing',
        'timeout':              6000
    });

    /*
     * Parallax Effect
     */
    $('.parallax').parallax("50%", 0.25);
    
    /*
     * Owl Carousel for Portfolio
     */
    $(".portfolio-carousel").owlCarousel({
        items: 4,
        navigation: true,
        pagination: false,
        navigationText: ['<i class="ct-etp etp-arrow-left7"></i>', '<i class="ct-etp etp-arrow-right8"></i>'],
    });

    /*
     * Owl Carousel for Clients
     */
    $("#client-carousel").owlCarousel({
        items: 5,
        navigation: true,
        pagination: false,
        navigationText: ['<i class="ct-etp etp-arrow-left7"></i>', '<i class="ct-etp etp-arrow-right8"></i>'],
    });

    /*
	 /*
     * Owl Carousel for hinh lien ket
     */
    $("#client-carousel1").owlCarousel({
        items: 5,
        navigation: true,
        pagination: false,
        navigationText: ['<i class="ct-etp etp-arrow-left7"></i>', '<i class="ct-etp etp-arrow-right8"></i>'],
    });

    /*
     * Owl Carousel for Products
     */
    $(".product-carousel").owlCarousel({
        items: 4,
        navigation: true,
        pagination: false,
        navigationText: ['<i class="ct-etp etp-arrow-left7"></i>', '<i class="ct-etp etp-arrow-right8"></i>'],
    });

    /*
     * Owl Carousel for Testimonials
     */
    $(".client-testimonial ul").owlCarousel({
        items: 1,
        navigation: false,
        pagination: true,
        singleItem:true,
        autoPlay: true,
        /*navigationText: ['<i class="ct-etp etp-arrow-left7"></i>', '<i class="ct-etp etp-arrow-right8"></i>'],
        transitionStyle: "backSlide"*/
    });

    /*
     * Owl Carousel for Twitter
     */
    $(".twitter-slider").owlCarousel({
        items: 1,
        navigation: false,
        autoPlay: true,
        pagination: false,
        singleItem:true,
       /* navigationText: ['<i class="ct-etp etp-arrow-left7"></i>', '<i class="ct-etp etp-arrow-right8"></i>'],
        transitionStyle: "goDown"*/
    });

    /*
     * Owl Carousel for Testimonials (#testimonial-carousel)
     */
    $("#testimonial-carousel").owlCarousel({
        items: 1,
        navigation: true,
        pagination: false,
        singleItem:true,
        navigationText: ['<i class="ct-etp etp-arrow-left7"></i>', '<i class="ct-etp etp-arrow-right8"></i>'],
        transitionStyle: "backSlide"
    });

    /*
     * Owl Carousel with goDown Effect
     */
    $(".img-carousel-godown").owlCarousel({
        items: 1,
        navigation: true,
        pagination: false,
        singleItem:true,
        navigationText: ['<i class="ct-etp etp-arrow-left7"></i>', '<i class="ct-etp etp-arrow-right8"></i>'],
        transitionStyle: "goDown"
    });

    /*
     * Owl Carousel with FedUp Effect
     */
    $(".img-carousel-fadeup").owlCarousel({
        items: 1,
        navigation: true,
        pagination: false,
        singleItem:true,
        navigationText: ['<i class="ct-etp etp-arrow-left7"></i>', '<i class="ct-etp etp-arrow-right8"></i>'],
        transitionStyle: "fadeUp"
    });

    /*
     * Owl Carousel with BackSlide Effect
     */
    $(".img-carousel-backslide").owlCarousel({
        items: 1,
        navigation: true,
        pagination: false,
        singleItem:true,
        navigationText: ['<i class="ct-etp etp-arrow-left7"></i>', '<i class="ct-etp etp-arrow-right8"></i>'],
        transitionStyle: "backSlide"
    });

    /*
     * Owl Carousel with Fade Effect
     */
    $(".img-carousel-fade").owlCarousel({
        items: 1,
        navigation: true,
        pagination: false,
        singleItem:true,
        navigationText: ['<i class="ct-etp etp-arrow-left7"></i>', '<i class="ct-etp etp-arrow-right8"></i>'],
        transitionStyle: "fade"
    });

    /*
     * Owl Carousel with Normal Effect
     */
    $(".img-carousel-normal").owlCarousel({
        items: 1,
        navigation: true,
        pagination: false,
        singleItem:true,
        navigationText: ['<i class="ct-etp etp-arrow-left7"></i>', '<i class="ct-etp etp-arrow-right8"></i>'],
    });

    /*
     * Owl Carousel for Blog Thumb
     */
    $(".thumb-carousel").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: false,
        navigationText: ['<i class="ct-etp etp-arrow-left7"></i>', '<i class="ct-etp etp-arrow-right8"></i>'],
        transitionStyle: "goDown"
    });

    /*
     * Google Map for Contact Page
     */
    $('.google-map').gmap3({
        marker: {
            address: "Envato, Level 13, 2 Elizabeth St, Melbourne, Victoria 3000 Australia"
        },
        map: {
            options: {
                zoom: 14
            }
        }
    });

    /*
     * Nivo Lightbox
     */
    $('a.zoom').nivoLightbox({
        effect: 'fadeScale'
    });

    /*
     * Fun Fact with Count Animation
     */
    $('.ct-ff-count').appear();
    $(document.body).on('appear', '.ct-ff-count', function(e, $affected) {
        $affected.each(function(i) {
            if (parseInt($(this).data('runit'))) {
                $(this).countTo({
                    speed: 3000,
                    refreshInterval: 50
                });
                $(this).data('runit', "0");
            };

        });
    });

    /***************************
    *** Dont Edit Below Code ***
    ***************************/

    function wordRotator () {

        $('.ct-rw-words').each(function () {
            var wordContainer = $(this),
                words = wordContainer.find('*'),
                firstWord = $(words[0]),
                firstWordLineHeight = (parseInt(firstWord.css('line-height'), 10)),
                firstWordFontSize = (parseInt(firstWord.css('font-size'),10)),
                firstWordGap = firstWordLineHeight - firstWordFontSize,
                firstWordTop = (firstWordGap - (firstWordGap / 3)) + 'px',
                firstWordTextTransform = firstWord.css('text-transform'),
                pontedWord = 0,
                intervalTime = wordContainer.data('interval');

            if (!intervalTime) {
                intervalTime = 3000;
            };

            if (firstWordTextTransform == "uppercase") {
                firstWordTop = firstWordGap + "px";
            };

            wordContainer.css({
                'width': firstWord.width()+"px", 
                'height': firstWord.css('line-height'),
                top:  firstWordTop 
            });


            firstWord.css({left: '-20px', display: 'inline-block', opacity: 0}).animate({left: '0px', opacity: 1}, 300);

            if (words.length != 0) {
                setInterval(function(){

                    $(words[pontedWord]).animate({left: '50px', opacity: 0}, 500);

                    pontedWord++;

                    if (pontedWord >= words.length) {
                        pontedWord = 0;
                    };

                    var currentWord = $(words[pontedWord]),
                        currentWordLineHeight = (parseInt(firstWord.css('line-height'), 10)),
                        currentWordFontSize = (parseInt(firstWord.css('font-size'),10)),
                        currentWordGap = firstWordLineHeight - firstWordFontSize,
                        currentWordTop = (firstWordGap - (firstWordGap / 3)) + 'px',
                        currentWordTextTransform = firstWord.css('text-transform');

                    if (currentWordTextTransform == "uppercase") {
                        currentWordTop = currentWordGap + "px";
                    };

                    wordContainer.animate({
                        'width': currentWord.width()+"px", 
                        'height': currentWord.css('line-height'),
                        top: currentWordTop
                    }, 500);

                    currentWord.css({left: '-20px', display: 'inline-block', opacity: 0}).animate({left: '0px', opacity: 1}, 500);

                    
                }, intervalTime);
            };
        });
    }

    wordRotator ();

    //Mega Menu Code
    jQuery('ul.sf-menu li').each(function() {
        var mega = jQuery(this).find('.sf-mega');
        if (mega.length) {
            jQuery(this).addClass('megamenu');
        }
    });

    // Accordion Toggle Items
    var iconOpen = 'fa fa-minus',
        iconClose = 'fa fa-plus';

    $(document).on('show.bs.collapse hide.bs.collapse', '.ct-accordion', function(e) {
        var $target = $(e.target);
        $target.siblings('.ct-accordion-header').find('i').toggleClass(iconOpen + ' ' + iconClose);
    });


    // Search JS
    $('a.search-box').click(function() {
        $('.search-form').slideToggle('fast');

        return false;
    });

    $('a.search-close').click(function() {
        $('.search-form').slideUp('fast');

        return false;
    });




    function shop_banner_txt_pos () {
        $('.cw-shop-banner').each(function () {
            var element = $(this).find('.cw-banner-info'),
                ememHeight = element.height(),
                elemMarginTop = -(ememHeight/2);

            element.css('margin-top', elemMarginTop+"px");
        });
    }

    shop_banner_txt_pos()

    $(window).resize(function() {
        shop_banner_txt_pos();
    });



    function portfilio_txt_pos () {
        $('.portfolio-container').each(function (i) {
            var $this = $(this),
                $infoCont = $this.find('.portfolio-info'),
                $infoSz = $infoCont.outerHeight(),
                $topMarg = $infoSz/2;

            $infoCont.css({"margin-top": '-'+$topMarg+'px'});
        });
    }

    portfilio_txt_pos();





    function charts () {

        $('.chart').each(function () {
            var $this = $(this),
                $value = $this.data('chart-value').split(/,/),
                $options = {
                    type                :'line',
                    width               :'100%',
                    height              :'250',
                    lineColor           :'#00c2e7',
                    fillColor           :'rgba(0, 0, 0, .03)',
                    spotColor           :'#e6ca2e',
                    minSpotColor        :'#f45555',
                    maxSpotColor        :'#9cd267',
                    highlightLineColor  :'#e1e1e1',
                    highlightSpotColor  :'#606364',
                    lineWidth           :3,
                    barSpacing          :10,
                    barWidth            :15,
                    barColor            :'#00c2e7',
                    offset              :0,
                    rangeColors         :['#00d6ff', '#02c3e8', '#02adce'],
                    posBarColor         :'#00c2e7',
                    negBarColor         :'#008ba5',
                    zeroBarColor        : '#a9a8a8',
                    performanceColor    :'#006b7f',
                    targetWidth         :5,
                    targetColor         :'#00424e',
                    spotRadius          : 5,
                    chartRangeMin       : Math.min.apply(Math, $value),
                    chartRangeMax       : Math.max.apply(Math, $value),
                    thresholdColor      :'#00c2e7',
                };

            if ($this.data('chart-type') !== undefined && $this.data('chart-type') !== false) {
                $options.type = $this.data('chart-type');
            }

            if ($this.data('chart-width') !== undefined && $this.data('chart-width') !== false) {
                $options.width = $this.data('chart-width');
            }

            if ($this.data('chart-height') !== undefined && $this.data('chart-height') !== false) {
                $options.height = $this.data('chart-height');
            }

            if ($this.data('chart-line-color') !== undefined && $this.data('chart-line-color') !== false) {
                $options.lineColor = $this.data('chart-line-color');
            }

            if ($this.data('chart-fill-color') !== undefined && $this.data('chart-fill-color') !== false) {
                $options.fillColor = $this.data('chart-fill-color');
            }

            if ($this.data('chart-spot-color') !== undefined && $this.data('chart-spot-color') !== false) {
                $options.spotColor = $this.data('chart-spot-color');
            }

            if ($this.data('chart-min-spot-color') !== undefined && $this.data('chart-min-spot-color') !== false) {
                $options.minSpotColor = $this.data('chart-min-spot-color');
            }

            if ($this.data('chart-max-spot-color') !== undefined && $this.data('chart-max-spot-color') !== false) {
                $options.maxSpotColor = $this.data('chart-max-spot-color');
            }

            if ($this.data('chart-highlight-line-color') !== undefined && $this.data('chart-highlight-line-color') !== false) {
                $options.highlightLineColor = $this.data('chart-highlight-line-color');
            }

            if ($this.data('chart-highlight-spot-color') !== undefined && $this.data('chart-highlight-spot-color') !== false) {
                $options.highlightSpotColor = $this.data('chart-highlight-spot-color');
            }

            if ($this.data('chart-line-width') !== undefined && $this.data('chart-line-width') !== false) {
                $options.lineWidth = $this.data('chart-line-width');
            }

            if ($this.data('chart-bar-spacing') !== undefined && $this.data('chart-bar-spacing') !== false) {
                $options.barSpacing = $this.data('chart-bar-spacing');
            }

            if ($this.data('chart-bar-width') !== undefined && $this.data('chart-bar-width') !== false) {
                $options.barWidth = $this.data('chart-bar-width');
            }

            if ($this.data('chart-bar-color') !== undefined && $this.data('chart-bar-color') !== false) {
                $options.barColor = $this.data('chart-bar-color');
            }

            if ($this.data('chart-offset') !== undefined && $this.data('chart-offset') !== false) {
                $options.offset = $this.data('chart-offset');
            }

            if ($this.data('chart-range-colors') !== undefined && $this.data('chart-range-colors') !== false) {
                $options.rangeColors = $this.data('chart-range-colors').split(/,/);
            }

            if ($this.data('chart-pos-bar-color') !== undefined && $this.data('chart-pos-bar-color') !== false) {
                $options.posBarColor = $this.data('chart-pos-bar-color');
            }

            if ($this.data('chart-neg-bar-color') !== undefined && $this.data('chart-neg-bar-color') !== false) {
                $options.negBarColor = $this.data('chart-neg-bar-color');
            }

            if ($this.data('chart-zero-bar-color') !== undefined && $this.data('chart-zero-bar-color') !== false) {
                $options.zeroBarColor = $this.data('chart-zero-bar-color');
            }

            if ($this.data('chart-performance-color') !== undefined && $this.data('chart-performance-color') !== false) {
                $options.performanceColor = $this.data('chart-performance-color');
            }

            if ($this.data('chart-target-width') !== undefined && $this.data('chart-target-width') !== false) {
                $options.targetWidth = $this.data('chart-target-width');
            }

            if ($this.data('chart-target-color') !== undefined && $this.data('chart-target-color') !== false) {
                $options.targetColor = $this.data('chart-target-color');
            }

            if ($this.data('chart-spot-radius') !== undefined && $this.data('chart-spot-radius') !== false) {
                $options.spotRadius = $this.data('chart-spot-radius');
            }

            if ($this.data('chart-chart-range-min') !== undefined && $this.data('chart-chart-range-min') !== false) {
                $options.chartRangeMin = $this.data('chart-chart-range-min');
            }

            if ($this.data('chart-chart-range-max') !== undefined && $this.data('chart-chart-range-max') !== false) {
                $options.chartRangeMax = $this.data('chart-chart-range-max');
            }


            if ($this.data('chart-slice-colors') !== undefined && $this.data('chart-slice-colors') !== false) {
                $options.sliceColors = $this.data('chart-slice-colors').split(/,/);
            }


            $this.sparkline($value,$options); 
        });
    }

    charts ();



    function chartjs () {

        $('.chartjs').each(function () {
            var ctx = $(this).get(0).getContext("2d"),
                data = {
                    labels: [],
                    datasets: [],
                    animation: true,
                    animationSteps: 60
                },
                type = $(this).data('chartjs-type');


            if ($(this).data('chartjs-labels') !== undefined && $(this).data('chartjs-labels') !== false) {
                data.labels = $(this).data('chartjs-labels');
            }

            if ($(this).data('chartjs-datasets') !== undefined && $(this).data('chartjs-datasets') !== false) {
                data.datasets = JSON.parse($(this).data('chartjs-datasets'));
            }

            if ($(this).data('chartjs-animation') !== undefined ) {
                data.animation = JSON.parse($(this).data('chartjs-animation'));
            }

            if ($(this).data('chartjs-animation-steps') !== undefined && $(this).data('chartjs-animation-steps') !== false) {
                data.animationSteps = JSON.parse($(this).data('chartjs-animation-steps'));
            }


            if (type !== undefined && type !== false) {
                if (type == 'line') {
                    var chartJSLine = new Chart(ctx).Line(data,{
                        responsive: true
                    });
                };
                if (type == 'bar') {
                    var chartJSLine = new Chart(ctx).Bar(data,{
                        responsive: true
                    });
                };
                if (type == 'radar') {
                    var chartJSLine = new Chart(ctx).Radar(data,{
                        responsive: true
                    });
                };
                if (type == 'polararea') {
                    var chartJSLine = new Chart(ctx).PolarArea(data.datasets,{
                        responsive: true
                    });
                };
                if (type == 'pie') {
                    var chartJSLine = new Chart(ctx).Pie(data.datasets,{
                        responsive: true
                    });
                };
                if (type == 'doughnut') {
                    var chartJSLine = new Chart(ctx).Doughnut(data.datasets,{
                        responsive: true
                    });
                };
            }else{
                var chartJSLine = new Chart(ctx).Line(data,{
                    responsive: true
                });
            }

        });
    }

    chartjs ();

});

$(window).load(function () {

    "use strict";
    
    /*
     * Main Header for Sticky
     */
    $('.main-header').sticky();

    function unstickyNav () {
        if ($(window).width() <= 900) {
            $('.main-header').unstick();
        }else if ($(window).width() >= 899) {
            if (!$('.main-header').parents('.sticky-wrapper').length) {
                $('.main-header').sticky();
            };
        };
    }

    unstickyNav ();

    // Resize Event
    $(window).resize(function() {
        unstickyNav ();
    });




    /*
     * Portfolio Filter with Shuffle
     */
    var $grid = $('#grid'),
        $sizer = $grid.find('.shuffle__sizer'),
        $filterType = $('#filter input[name="filter"]');

    $grid.shuffle({
        itemSelector: '.portfolio-item',
        sizer: $sizer
    });

    $filterType.change(function(e) {
        var group = $('#filter input[name="filter"]:checked').val();

        $grid.shuffle('shuffle', group);

        $('label.current').removeClass('current');
        $('input[name="filter"]:checked').parent().addClass('current');
    });


    // Custom Scrollbar for site
    var mainBody = $("html").niceScroll({
        cursorwidth: 8,
        cursorborder: "0px solid #fff",
        cursorborderradius: '0'
    });

    // Custom Scrollbar for Cart
    var cart = $(".cart-products ul").niceScroll({
        cursorwidth: 8,
        cursorborder: "0px solid #fff",
        cursorborderradius: '0'
    });


    // Skill Item Animation
    $('.skill-item').appear();
    $(document.body).on('appear', '.skill-item', function(e, $affected) {
        $affected.each(function(i) {
            var $this = $(this),
                value = $this.data('val'),
                timeOutM = (150 * i);

            setTimeout(function() {
                $this.find('.skill-val').css({
                    width: value + '%'
                });
            }, timeOutM);

        })
    });

    // Cheking for active nav menu 
    function check_for_active_class () {
        if($('.sf-menu li > ul li a').hasClass('active')){
            $('.sf-menu li > ul li a.active').parents('ul').prev('a').addClass('active');
        }
    }

    check_for_active_class ();
	
	
	
	$('body').append('<div class="option-panel"><div class="option-panel-title mb20">Theme Options</div><div class="opt-show-hide"><i class="fa fa-cog"></i></div><div class="option-panel-opts"><div class="theme-color mb20"><h5>Select Color</h5><div class="color-code" data-color="style.css" style="background: #00c2e7; border-color:#00c2e7"></div><div class="color-code" data-color="aqua.css" style="background: #1fd8bc; border-color:#1fd8bc"></div><div class="color-code" data-color="black.css" style="background: #3f4b51; border-color:#3f4b51"></div><div class="color-code" data-color="deepblue.css" style="background: #008de7; border-color:#008de7"></div><div class="color-code" data-color="green.css" style="background: #9cd267; border-color:#9cd267"></div><div class="color-code" data-color="magenta.css" style="background: #e06ee4; border-color:#e06ee4"></div><div class="color-code" data-color="pink.css" style="background: #f65b8a; border-color:#f65b8a"></div><div class="color-code" data-color="red.css" style="background: #f45555; border-color:#f45555"></div><div class="color-code" data-color="yellow.css" style="background: #e6ca2e; border-color:#e6ca2e"></div></div></div></div>');
	
	$(".opt-show-hide").click(function(){var e=$(this).parents(".option-panel");e.hasClass("shown")?e.removeClass("shown"):e.addClass("shown")});$("head").append('<link href="css/style.css" id="custom-styles" rel="stylesheet">'),$(".theme-color .color-code").click(function(){var e=$(this).data("color");console.log(e);$("#custom-styles").prop("href","css/"+e)});

});