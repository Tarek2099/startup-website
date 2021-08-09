$(document).ready(function(){
    // .....slick slider
    $('.banner-slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        dots: true,
        fade: true,
        speed: 100,
        cssEase: 'linear',
    });

    // Smooths scrolling
    $('body').scrollspy({target: ".navbar", offset: 50});

    //animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 50
            }, 1500);
            return false;
        }
    }
});

// typed js
$(".typed").typed({
  strings: ["Web Designer.", "Web Developer.", "Full stack web Developer.", 'Graphics Designer'],
  // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
  stringsElement: null,
  // typing speed
  typeSpeed: 50,
  // time before typing starts
  startDelay: 500,
  // backspacing speed
  backSpeed: 50,
  // time before backspacing
  backDelay: 500,
  // loop
  loop: true,
  // false = infinite
  loopCount: 100,
  // show cursor
  showCursor: false,
  // character for cursor
  cursorChar: "|",
  // attribute to type (null == text)
  attr: null,
  // either html or text
  contentType: 'html',
  // call when done callback function
  callback: function() {},
  // starting callback function before each string
  preStringTyped: function() {},
  //callback for every typed string
  onStringTyped: function() {},
  // callback for reset
  resetCallback: function() {}
});


    // ..........venoboix
    $('.venobox').venobox({
        autoplay: true,
        share      : ['facebook', 'twitter', 'download']
    });

    // .....Team slide
    $('.team-slide').slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,

        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            }
          ]

    });

// ..........teastimonial
$('.testimonial-text-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.testimonial-slider'
  });
  $('.testimonial-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.testimonial-text-slider',
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: '.left-one',
    nextArrow: '.right-one',
  });

    // ....project gallery
    $('.project').venobox({
    });

    
    // ..........Sticky header
    $(window).scroll(function(){

        var scrolling = $(this).scrollTop();
        var sticky = $('.sticky-header');

        if (scrolling >= 10) {
            sticky.addClass('sticky-color');
        } else{
            sticky.removeClass('sticky-color')
        }

    })



var scrolltotop={setting:{startline:100,scrollto:0,scrollduration:1e3,fadeduration:[500,100]},controlHTML:'<img src="img/scroll.png" />',controlattrs:{offsetx:5,offsety:5},anchorkeyword:"#top",state:{isvisible:!1,shouldvisible:!1},scrollup:function(){this.cssfixedsupport||this.$control.css({opacity:0});var t=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);t="string"==typeof t&&1==jQuery("#"+t).length?jQuery("#"+t).offset().top:0,this.$body.animate({scrollTop:t},this.setting.scrollduration)},keepfixed:function(){var t=jQuery(window),o=t.scrollLeft()+t.width()-this.$control.width()-this.controlattrs.offsetx,s=t.scrollTop()+t.height()-this.$control.height()-this.controlattrs.offsety;this.$control.css({left:o+"px",top:s+"px"})},togglecontrol:function(){var t=jQuery(window).scrollTop();this.cssfixedsupport||this.keepfixed(),this.state.shouldvisible=t>=this.setting.startline?!0:!1,this.state.shouldvisible&&!this.state.isvisible?(this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]),this.state.isvisible=!0):0==this.state.shouldvisible&&this.state.isvisible&&(this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]),this.state.isvisible=!1)},init:function(){jQuery(document).ready(function(t){var o=scrolltotop,s=document.all;o.cssfixedsupport=!s||s&&"CSS1Compat"==document.compatMode&&window.XMLHttpRequest,o.$body=t(window.opera?"CSS1Compat"==document.compatMode?"html":"body":"html,body"),o.$control=t('<div id="topcontrol">'+o.controlHTML+"</div>").css({position:o.cssfixedsupport?"fixed":"absolute",bottom:o.controlattrs.offsety,right:o.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"Scroll to Top"}).click(function(){return o.scrollup(),!1}).appendTo("body"),document.all&&!window.XMLHttpRequest&&""!=o.$control.text()&&o.$control.css({width:o.$control.width()}),o.togglecontrol(),t('a[href="'+o.anchorkeyword+'"]').click(function(){return o.scrollup(),!1}),t(window).bind("scroll resize",function(t){o.togglecontrol()})})}};scrolltotop.init();


   
    
})