
require('../css/app.scss');

// var $ = require('jquery');
require('jquery');

// // var template = require("./file.handlebars");

import 'imports-loader?define=>false!animation.gsap';
import 'imports-loader?define=>false!gsap.scrollto';
import ScrollMagic from 'ScrollMagic';



$(document).ready(function(){

  // IE10 in Windows 8 CSS fix
  // Copyright 2014-2015 Twitter, Inc.
  // Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }



  // Mobile nav trigger
  $('.nav__trigger').on('click', function() {
    $('.nav__trigger').toggleClass('open');
    $('.nav').toggleClass('open');
    $('.body').toggleClass('open');
  });

  // $(document).on('click', function(e) {
  //   if(!$(event.target).closest('.nav').length) {
  //     if($('.nav').hasClass('open')) {
  //       $('.nav').removeClass('open');
  //       $('.body').removeClass('open');
  //     }
  //   }
  // });


  // // Detect if mobile device

  // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() < 520) {
  //   $.scrollify.disable();
  // }

  // console.log(navigator.userAgent);



  // Scroll magic stuff

  // init
  var controller = new ScrollMagic.Controller();
  var controller_h = new ScrollMagic.Controller({vertical: false});
  // var navHeight = $('.nav__wrapper').innerHeight();


  // change behaviour of controller to animate scroll instead of jump
  // controller.scrollTo(function (newpos) {
  //   TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
  // });

  // $(document).on('click', 'a[href^="#"]', function (e) {
  //   var id = $(this).attr('href');
  //   if ($(id).length > 0) {
  //     e.preventDefault();

  //     // trigger scroll
  //     controller.scrollTo(id);

  //     // $('a[href^="#"]').removeClass('active');
  //     // $(this).addClass('active');

  //       // if supported by the browser we can even update the URL.
  //     if (window.history && window.history.pushState) {
  //       history.pushState("", document.title, id);
  //     }
  //   }
  // });


  // Animations

  function initAnimations() {

    // section wipes

    $('.section:not(#portfolio)').each(function(i) {

      new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 'onLeave'
      })
      .setPin(this)
      .addTo(controller);
    });


    // Skills animations
    var progressTween = new TimelineMax()
        .staggerFrom('.progress__bar', 0.5, {opacity: 0, width: 0}, 0.1);

    new ScrollMagic.Scene({
      triggerElement: '#skills',
      triggerHook: 0.5,
      duration: 0,
      reverse: true
    })
    .setTween(progressTween)
    .addTo(controller);

    // Portfolio animations

    // $('.portfolio__row').each(function(i){
    //   var currentItem = $(this);
    //   var currentContent = $(this).find('.portfolio__content');
    //   var currentBtn = $(this).find('.btn');
    //   var currentImg = $(this).find('.portfolio__thumb');
    //   var currentBrand = $(currentImg).find('.portfolio__thumb__brand');

    //   var portfolioTween = new TimelineMax()
    //     .fromTo(currentImg, 0.5, {opacity: 0, scaleX: 0, scaleY: 0}, {opacity: 1, scaleX: 1, scaleY: 1})
    //     // .fromTo(currentContent, 1, {opacity: 0, x: '80%'}, {opacity: 1, x: '0%'})
    //     .fromTo(currentBrand, 1, {opacity: 0}, {opacity: 1});
    //     // .fromTo(currentBtn, 1, {opacity: 0}, {opacity: 1});

    //   new ScrollMagic.Scene({
    //     triggerElement: this,
    //     triggerHook: 0.5,
    //     duration: 0,
    //     reverse: true
    //   })
    //   .setTween(portfolioTween)
    //   .addTo(controller);
    // });
      

  }


  function initWipeAnimation() {
     // define movement of panels
    var wipeAnimation = new TimelineMax()
      // animate to second panel
      .to(".portfolio__container", 0.5, {z: -150})    // move back in 3D space
      .to(".portfolio__container", 1,   {x: '-20%'})  // move in to first panel
      .to(".portfolio__container", 0.5, {z: 0})       // move back to origin in 3D space
      // animate to third panel
      .to(".portfolio__container", 0.5, {z: -150, delay: 1})
      .to(".portfolio__container", 1,   {x: '-40%'})
      .to(".portfolio__container", 0.5, {z: 0})
      // animate to fourth panel
      .to(".portfolio__container", 0.5, {z: -150, delay: 1})
      .to(".portfolio__container", 1,   {x: '-60%'})
      .to(".portfolio__container", 0.5, {z: 0})
      // animate to fifth panel
      .to(".portfolio__container", 0.5, {z: -150, delay: 1})
      .to(".portfolio__container", 1,   {x: '-80%'})
      .to(".portfolio__container", 0.5, {z: 0});

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#portfolio",
        triggerHook: "onLeave",
        duration: "500%"
      })
      .setPin("#portfolio")
      .setTween(wipeAnimation)
      .addTo(controller);
  }

  //767 is my mobile breakpoint
  var width = $(window).width();

  if( width > 767) {
    initWipeAnimation();
  }

  initAnimations();
 





});
