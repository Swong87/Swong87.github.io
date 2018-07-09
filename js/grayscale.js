


(function($) {
  "use strict"; // Start of use strict


  /*******************************************IMAGE GALLERY*******************************************/

/*******Filtering*******/

// init Isotope
var $grid = $('.img-grid').isotope({
    itemSelector: '.img-container',
    //layoutMode: 'fitRows',
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {

    },
  };

  // bind filter button click
  $('#filter-btn').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

/*******Popup Image Gallary in Porfolio*******/

// $('.popup-gallery').magnificPopup({
//   type: 'image',
//   gallery:{
//     enabled:true
//   }
// });


/*******************************************SCROLL MAGIC*******************************************/

/*******Scroll for the links*******/
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerElement: "#hero", duration: $("#hero").height()}).setClassToggle("#hero-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#about", duration: $("#about").height() + 100}).setClassToggle("#about-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#services", duration: $("#services").height()}).setClassToggle("#services-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#portfolio", duration: $("#portfolio").height()}).setClassToggle("#portfolio-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#client", duration: $("#client").height() + 250}).setClassToggle("#client-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#contact", duration: $("#contact").height()}).setClassToggle("#contact-link", "active").addTo(controller);

/*******Other Scroll Magic Elements*******/

$(document).ready(function(){

  var controller2 = new ScrollMagic.Controller();

  //The about paragraph
  var about_scene = new ScrollMagic.Scene({
    triggerElement: '.about-text',
    triggerHook: .7
  })
  .setClassToggle('.about-text', 'about-text-animate')
  .reverse(false)
  .addTo(controller2);
    

  //Progress bars
  var progress_bar_scene = new ScrollMagic.Scene({

    triggerElement: '.about-resume',
    triggerHook: .7,

  })
  .setClassToggle('.inner-percent', 'inner-percent-animate')
  .reverse(false)
  .addTo(controller);
    
  //Icons in Services
  var about_scene = new ScrollMagic.Scene({
    triggerElement: '.trigger',
    triggerHook: .7
  })
  .setClassToggle('.icon', 'service-icon-animate')
  .reverse(false)
  .addTo(controller2);
    
});

/*******************************************MOBILE NAV*******************************************/
$('.mobile-toggle').click(function(){
  if($('#main-header').hasClass('open-nav')){
     $('#main-header').removeClass('open-nav');
  }else{
    $('#main-header').addClass('open-nav');
  }
});

/*******************************************NAV SCROLL*******************************************/
// $('nav a').click(function(event) {
//     var id = $(this).attr("href");
//     var offset = 70;
//     var target = $(id).offset().top - offset;
//     $('html, body').animate({
//         scrollTop: target
//     }, 500);
//     event.preventDefault();
// });

/*******************************************PRELOAD*******************************************/
var overlay = document.getElementById("preload-overlay");

// window.addEventListener('load', function(){
//   overlay.style.display = "none";
// })

/***********************Particles*************/

particlesJS("particles-js", {
    "particles":{
        "number":{
            "value":120,
            "density":{
                "enable":true,
                "value_area":800
            }
        },
        "color":{
            "value":"#fff"
        },
        "shape":{
            "type":"circle",
            "stroke":{
                "width":0,
                "color":"#000"
            },
            "polygon":{
                "nb_sides":5
            },
            "image":{
                "src":"img/github.svg",
                "width":100,
                "height":100
            }
        },
        "opacity":{
            "value":0.5,
            "random":false,
            "anim":{
                "enable":false,
                "speed":1,
                "opacity_min":0.1,
                "sync":false
            }
        },
        "size":{
            "value":3,
            "random":true,
            "anim":{
                "enable":false,
                "speed":40,
                "size_min":0.1,
                "sync":false
            }
        },
        "line_linked":{
            "enable":false,
            "distance":150,
            "color":"#fff",
            "opacity":0.5,
            "width":1
        },
        "move":{
            "enable":true,
            "speed":6,
            "direction":"none",
            "random":false,
            "straight":false,
            "out_mode":"out",
            "bounce":false,
            "attract":{
                "enable":false,
                "rotateX":600,
                "rotateY":1200
            }
        }
    },
    "interactivity":{
        "detect_on":"canvas",
        "events":{
            "onhover":{
                "enable":true,
                "mode":"repulse"
            },
            "onclick":{
                "enable":true,
                "mode":"push"
            },
            "resize":true
        },
        "modes":{
            "grab":{
                "distance":400,
                "line_linked":{
                    "opacity":1
                }
            },
            "bubble":{
                "distance":400,
                "size":40,
                "duration":2,
                "opacity":8,
                "speed":3
            },
            "repulse":{
                "distance":150,
                "duration":0.4
            },
            "push":{
                "particles_nb":3
            },
            "remove":{
                "particles_nb":2
            }
        }
    },
    "retina_detect":true
});





  // Smooth scrolling using jQuery easing
//   $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: (target.offset().top - 48)
//         }, 1000, "easeInOutExpo");
//         return false;
//       }
//     }
//   });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.navbar-toggler').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict

// // Google Maps Scripts
// var map = null;
// // When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, 'load', init);
// google.maps.event.addDomListener(window, 'resize', function() {
//   map.setCenter(new google.maps.LatLng(28.398368, -81.467871));
// });

// function init() {
//   // Basic options for a simple Google Map
//   // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//   var mapOptions = {
//     // How zoomed in you want the map to start at (always required)
//     zoom: 9,

//     // The latitude and longitude to center the map (always required)
//     center: new google.maps.LatLng(28.398368, -81.467871), // New York

//     // Disables the default Google Maps UI components
//     disableDefaultUI: true,
//     scrollwheel: true,
//     draggable: true,

//     // How you would like to style the map.
//     // This is where you would paste any style found on Snazzy Maps.
//     styles: [
//     {
//         "featureType": "all",
//         "elementType": "labels",
//         "stylers": [
//             {
//                 "visibility": "on"
//             }
//         ]
//     },
//     {
//         "featureType": "all",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "saturation": 36
//             },
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 40
//             }
//         ]
//     },
//     {
//         "featureType": "all",
//         "elementType": "labels.text.stroke",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 16
//             }
//         ]
//     },
//     {
//         "featureType": "all",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 20
//             }
//         ]
//     },
//     {
//         "featureType": "administrative",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 0
//             },
//             {
//                 "weight": 1.2
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.country",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#00ff9d"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.locality",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#c4c4c4"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.neighborhood",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#00ff9d"
//             }
//         ]
//     },
//     {
//         "featureType": "landscape",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 12
//             }
//         ]
//     },
//     {
//         "featureType": "poi",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 21
//             },
//             {
//                 "visibility": "on"
//             }
//         ]
//     },
//     {
//         "featureType": "poi.business",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "visibility": "on"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "color": "#00ff9d"
//             },
//             {
//                 "lightness": "0"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#ffffff"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "labels.text.stroke",
//         "stylers": [
//             {
//                 "color": "#00ff9d"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 15
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "color": "#575757"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#ffffff"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "labels.text.stroke",
//         "stylers": [
//             {
//                 "color": "#2c2c2c"
//             }
//         ]
//     },
//     {
//         "featureType": "road.local",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 10
//             }
//         ]
//     },
//     {
//         "featureType": "road.local",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#999999"
//             }
//         ]
//     },
//     {
//         "featureType": "transit",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 8
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 5
//             }
//         ]
//     }
// ]
//   };

//   // Get the HTML DOM element that will contain your map
//   // We are using a div with id="map" seen below in the <body>
//   var mapElement = document.getElementById('map');

//   // Create the Google Map using out element and options defined above
//   map = new google.maps.Map(mapElement, mapOptions);

//   // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
//   var image = 'img/map-marker.svg';
//   var myLatLng = new google.maps.LatLng(28.398368, -81.467871);
//   var beachMarker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     icon: image
//   });
// }