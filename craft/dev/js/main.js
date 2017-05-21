$(document).ready(function() {

  // General
  $('html').removeClass('no-js');

  // Hover on item thumbnails to show alt image
  if ($('html').hasClass('no-touchevents')) {
    $('.feed .product img').hover(
      function() {
        var imageTwo = $(this).data('hover');
        $(this).attr('src', imageTwo);
    }, function() {
        var imageOne = $(this).data('initial');
        $(this).attr('src', imageOne);
    });
  }

});


// function thumbnailPosition(){
//   previewHeight = $('.preview').height();
//   $('.image-grid').height(previewHeight);
//   $('.product-description').height(previewHeight);
// }

// function initImageCarrousel() {
//   // $('.preview img').attr('src', $('.image-grid .thumbnails img').attr('src'));
//   $('.image-grid .thumbnails img:first-of-type').addClass('selected');
// }
//
// // image carrousel detail page
// $('.image-grid .thumbnails img').click(function(event) {
//   var source = $(this).attr('src');
//
//   $('.image-grid .thumbnails img').each(function(){
//     $(this).removeClass('selected');
//   });
//
//   $(this).addClass('selected');
//   changePreviewThumbnail(source);
// });
//
// function changePreviewThumbnail(source) {
//   $('.preview img').attr('src', source);
// }





// Toggle filter menu via hamburger and cross
// function toggleFilterMenu() {
//   $('.filter.tags').toggleClass("visible");
// }

// Equal height for instagram stuff
// function equalHeight() {
//   var imgHeight = $('.instagram__latest').height();
//   $('.instagram__follow-container').height(imgHeight);
// }
// $(document).ready(function() {
//
//   // General
//   $('html').removeClass('no-js');
//   var windowWidth = $(window).width();
//
//     // Everything on resize event
//     // $(window).resize(function(event) {
//     //   var windowWidth = $(window).width();
//     //   // changeLogo(windowWidth);
//     //   if (windowWidth > 640 ) {
//     //     // equalHeight();
//     //   }
//     // });
//
//     // Triggered by a selector
//     // Show the menu
//     // $('.hamburger').click(function() {
//     //   toggleMobileMenu();
//     //   hideHamburger();
//     // });
//     // Hide the menu
//     // $('.close').click(function() {
//     //   toggleMobileMenu();
//     //   showHamburger();
//     // });
//
//     // equalHeight();
//
//
//     // After load events
//     // changeLogo(windowWidth);
//
//   // Init Carrousel Detail view
//   // initImageCarrousel();
// //
// //   // Responsive Logo
// //   $(window).resize(function(event) {
// //     var windowWidth = $(window).width();
// //     thumbnailPosition();
// //
// //     if (windowWidth > 640) {
// //       equalHeight();
// //     }
// //
// //   });
// //
// //   if (windowWidth > 640) {
// //     equalHeight();
// //   }
// //
// //
// // Pin die hamburger tegen het plafond
//   // var initHam = $('.hamburger-filter').offset().top;
//   //
//   // $(window).scroll(function(event) {
//   //   var scrollPos = $(window).scrollTop();
//   //   var hamburgerPos = initHam - 41;
//   //
//   //   if(scrollPos > hamburgerPos) {
//   //     $('.hamburger-filter').addClass('pinned');
//   //   } else if (scrollPos < initHam) {
//   //     $('.hamburger-filter').removeClass('pinned');
//   //   }
//   //
//   // });
// //   changeLogo(windowWidth);
// //
// //   // Toggle Filter Menu Events
// //   $('.hamburger').click(function(){
// //     if(windowWidth <= 640 ){
// //       toggleMobileMenu();
// //     } else {
// //       toggleFilterMenu();
// //     }
// //   });
// //
// //   $('.close').click(function(){
// //     toggleFilterMenu();
// //   });
// //
// //   if (windowWidth > 640){
// //     thumbnailPosition();
// //   }
// //
// //   if(windowWidth <= 640 ){
// //     $('.image-grid .thumbnails img').removeClass('selected');
// //   }
// //
// });
// //
// // function thumbnailPosition(){
// //   previewHeight = $('.preview').height();
// //   $('.image-grid').height(previewHeight);
// //   $('.product-description').height(previewHeight);
// // }
// //
// // function initImageCarrousel() {
// //   $('.preview img').attr('src', $('.image-grid .thumbnails img').attr('src'));
// //   $('.image-grid .thumbnails img:first-of-type').addClass('selected');
// // }
// //
// // // image carrousel detail page
// // $('.image-grid .thumbnails img').click(function(event) {
// //   var source = $(this).attr('src');
// //
// //   $('.image-grid .thumbnails img').each(function(){
// //     $(this).removeClass('selected');
// //   });
// //
// //   $(this).addClass('selected');
// //   changePreviewThumbnail(source);
// // });
// //
// // function changePreviewThumbnail(source) {
// //   $('.preview img').attr('src', source);
// // }
// //
// // Logo responsive
// // function changeLogo(windowWidth) {
// //   if(windowWidth <= 640) {
// //     $('h1 a').text('OTF');
// //   } else {
// //     $('h1 a').text('Only The Flyest');
// //   }
// // }
//
// // Navigation toggle
// function toggleMobileMenu() {
//   $('.nav-wrapper').toggleClass("toggle-mobile-nav");
// }
//
// function hideHamburger() {
//   $('.hamburger').addClass('hide');
//   $('.close').addClass('show');
// }
//
// function showHamburger() {
//   $('.hamburger').removeClass('hide');
//   $('.close').removeClass('show');
// }
//
//
// // Toggle filter menu via hamburger and cross
// // function toggleFilterMenu() {
// //   $('.filter.tags').toggleClass("visible");
// // }
//
// // Equal height for instagram stuff
// // function equalHeight() {
// //   var imgHeight = $('.instagram__latest').height();
// //   $('.instagram__follow-container').height(imgHeight);
// // }
