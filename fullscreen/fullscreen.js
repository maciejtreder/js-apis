$(document).ready(() => {

   var prefix = null;
   if ('requestFullscreen' in document.documentElement) {
      prefix = 'fullscreen';
   } else if ('mozRequestFullScreen' in document.documentElement) {
      prefix = 'mozFullScreen';
   } else if ('webkitRequestFullscreen' in document.documentElement) {
      prefix = 'webkitFullscreen';
   } else if ('msRequestFullscreen') {
      prefix = 'msFullscreen';
   }

   var goFullScreen = null;
   var exitFullScreen = null;

   if ('requestFullscreen' in document.documentElement) {
     goFullScreen = 'requestFullscreen';
     exitFullScreen = 'exitFullscreen';
   } else if ('mozRequestFullScreen' in document.documentElement) {
     goFullScreen = 'mozRequestFullScreen';
     exitFullScreen = 'mozCancelFullScreen';
   } else if ('webkitRequestFullscreen' in document.documentElement) {
     goFullScreen = 'webkitRequestFullscreen';
     exitFullScreen = 'webkitExitFullscreen';
   } else if ('msRequestFullscreen') {
     goFullScreen = 'msRequestFullscreen';
     exitFullScreen = 'msExitFullscreen';
   }

   $('#startFull').click(() => {
      if (document[prefix + 'Enabled']) {
         document.documentElement[goFullScreen]();
         //document.documentElement[requestFullscreen | mozRequestFullScreen | webkitRequestFullscreen | msRequestFullscreen]();
         $('#exit').show();
      }
   });

   $('#exit').click(() => {
      document[exitFullScreen]();
      //document[exitFullscreen | mozCancelFullScreen | webkitExitFullscreen | msExitFullscreen]();
      $('#exit').hide();
   });

   $('#startBox').click(() => {
      document.querySelector('#box')[goFullScreen]();
      //document.querySelector('#box')[requestFullscreen | mozRequestFullScreen | webkitRequestFullscreen | msRequestFullscreen]();
   });
});