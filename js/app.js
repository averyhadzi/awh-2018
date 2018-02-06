
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


  // Utility functions

  // Remove commas from stats
  function removeCommas(str) {
      while (str.search(",") >= 0) {
          str = (str + "").replace(',', '');
      }
      return str;
  }

  // Add commas to stats
  function addCommas(x) {
    if(x != 2017) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }



  // Scroll magic stuff

  // init
  var controller = new ScrollMagic.Controller();
  // var navHeight = $('.nav__wrapper').innerHeight();


  // change behaviour of controller to animate scroll instead of jump
  controller.scrollTo(function (newpos) {
    TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
  });

  $(document).on('click', 'a[href^="#"]', function (e) {
    var id = $(this).attr('href');
    if ($(id).length > 0) {
      e.preventDefault();

      // trigger scroll
      controller.scrollTo(id);

      // $('a[href^="#"]').removeClass('active');
      // $(this).addClass('active');

        // if supported by the browser we can even update the URL.
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, id);
      }
    }
  });


  //Sticky nav 

  // var stickyNav = new ScrollMagic.Scene({triggerElement: '.nav__wrapper', triggerHook: 'onLeave'})
  //     .setPin('.nav__wrapper', {pushFollowers: false})
  //     .addTo(controller);


  // Infographic animations

  function initAnimations() {

      // Parallax

    //   $('.parallax').each(function(){
    //       var parallaxBg = this;
    //       var parallaxTween,
    //           parallaxScene;

    //       if(parallaxBg.id === 'hero') {
    //         parallaxTween = new TimelineMax().to('.hero__parallax', 2, {y: '-15%'});
    //         parallaxScene = new ScrollMagic.Scene({
    //           triggerElement: parallaxBg,
    //           triggerHook: 'onLeave',
    //           duration: '100%'
    //         })
    //         .setTween(parallaxTween)
    //         .addTo(controller);
    //       } else {
    //         parallaxTween = new TimelineMax().to(parallaxBg, 2, {backgroundPositionY: '-15%'});
    //         parallaxScene = new ScrollMagic.Scene({
    //           triggerElement: parallaxBg,
    //           triggerHook: 'onCenter',
    //           duration: '100%'
    //         })
    //         .setTween(parallaxTween)
    //         .addTo(controller);
    //       }

          
    //   });


    // // Drop shadows

    // $('.bg-shadow').each(function(){
    //   var shadowEl = this;

    //   var shadowTween = new TimelineMax()
    //     .from(shadowEl, 0, {boxShadow: '0 0 5px rgba(0,0,0,0.6)'})
    //     .to(shadowEl, 2, {boxShadow: '90px 90px 100px rgba(0,0,0,0.3)'});

    //   var shadowScene = new ScrollMagic.Scene({
    //     triggerElement: shadowEl,
    //     triggerHook: 0.6,
    //     duration: '50%',
    //     reverse: true,
    //   })
    //   .setTween(shadowTween)
    //   .addTo(controller);
    // });

    // Influence (Till) animations
    
    // $('.till__trigger').on('click, mouseover', function(e) {
    //   var whichTill = $(this).data('till');
    //   var $activeTill = $('.till__stat[data-till="' + whichTill + '"]');
      
    //   $('.till__stat').removeClass('active');
    //   $('.till__trigger').removeClass('active');

    //   $(this).addClass('active');
    //   $activeTill.addClass('active');
      
    // });


    // var tillTween = new TimelineMax()
    //     .staggerTo('[data-till="2"]', 0.25, {className: '+=active'}, 0.05)
    //     .staggerTo('[data-till="3"]', 0.25, {className: '+=active'}, 0.05)
    //     .staggerTo('[data-till="4"]', 0.25, {className: '+=active'}, 0.05)
    //     .staggerTo('[data-till="5"]', 0.25, {className: '+=active'});

    // var tillScene = new ScrollMagic.Scene({
    //   triggerElement: '#influence',
    //   triggerHook: 0.6,
    //   duration: 0
    // })
    // // .setPin('#influence')
    // .setTween(tillTween)
    // .addTo(controller);



    // // Additional Influence animations

    // var influenceTween = new TimelineMax()
    //   .staggerFrom('#influence-sub .book', 1, {opacity: 0, y: '-50%'}, 0)
    //   .staggerFrom('#influence-sub .card', 1, {x: '300%'});

    // var influenceScene = new ScrollMagic.Scene({
    //   triggerElement: '#influence-sub',
    //   triggerHook: 0.5,
    //   duration: '50%',
    //   reverse: true
    // })
    // .setTween(influenceTween)
    // .addTo(controller);


    // var influenceTweenOut = new TimelineMax()
    //   .to('#influence-sub .card', 1, {x: '300%'});

    // var influenceSceneOut = new ScrollMagic.Scene({
    //   triggerElement: '#influence-sub .card',
    //   triggerHook: 'onLeave',
    //   duration: '50%',
    //   reverse: true
    // })
    // .setTween(influenceTweenOut)
    // .addTo(controller);






    // // Socializers (#jackpot) section -- card flips

    // var jackpotTween = new TimelineMax()
    //   .staggerFrom('.tile', 1, {rotationY: 180}, 0.25);

    // var jackpotScene = new ScrollMagic.Scene({
    //   triggerElement: '#socializers',
    //   triggerHook: 0.5,
    //   duration: 0
    // })
    // .setTween(jackpotTween)
    // .addTo(controller);



    // // Stats count animation (add a scene and tween for each section where you'd like to animate the stats numbers)

    // var statsTween = new TimelineMax();
    // var introTween = new TimelineMax();

    // function setStatsTween(section, tween) {
    //   var sectionStats = $(section).find('.stat__num span');


    //   $(sectionStats).each(function(index, element) {

    //     var statNum = $(element).data('stat');
    //     var counter = { var: 0 };

    //     // reset to 0
    //     $(element).text('0');


    //     tween.to(counter, 0.8, {
    //         var: statNum, 
    //         onUpdate: function () {
    //             $(element).text(Math.ceil(counter.var));
    //         },  
    //         ease:Circ.easeOut
    //     })
    //     .call(function(){
    //       $(element).text(addCommas(statNum));
    //     });

        

    //   });
    // }

    // var statsScene = new ScrollMagic.Scene({
    //   triggerElement: '#purchasing .stat__num',
    //   triggerHook: '0.8',
    //   duration: 0,
    //   reverse: false
    // })
    // .setTween(statsTween)
    // .addTo(controller);

    // var introScene = new ScrollMagic.Scene({
    //   triggerElement: '#intro .stat__num',
    //   triggerHook: '0.8',
    //   duration: 0,
    //   reverse: false
    // })
    // .setTween(introTween)
    // .addTo(controller);


    // setStatsTween('#purchasing', statsTween);
    // setStatsTween('#intro', introTween);





    // Animated SVGs

    // Network icon
    // var networkCircles = $('#network circle.anim');
    // var networkCirclesTween = TweenMax.staggerFrom(networkCircles, 1, {scale: 0.75, repeat:-1, yoyo: true}, 0.5);


    // // TV icon
    // var tvKnobs = $('#TV .knob');
    // var tvAntennae = $('#antennae path'),
    //     tvAntennaOne = $('#antennae .one'),
    //     tvAntennaTwo = $('#antennae .two');

    // TweenMax.set(tvKnobs, {transformOrigin:'50% 50%'});
    // TweenMax.set(tvAntennae, {transformOrigin:'center bottom'});

    // var tvStaticTween = TweenMax.staggerTo(tvKnobs, 1, {rotation: 180,repeat:-1, yoyo: true}, 1);

    // var tvAntennaeTweenOne = TweenMax.to(tvAntennaOne, 1, {rotation: 20,repeat:-1, yoyo: true})
    // var tvAntennaeTweenTwo = TweenMax.to(tvAntennaTwo, 1.25, {rotation: -20,repeat:-1, yoyo: true});


    // // Lava icon
    // var lavaCircles = $('#lava circle');
    // var lavaCirclesTween = TweenMax.staggerFrom(lavaCircles, 1.5, {y: '-100%', repeat:-1, yoyo: true}, 0.5);

      

  }

  initAnimations();

 





});
