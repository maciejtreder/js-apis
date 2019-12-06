$(document).ready(() => {
   if (!window.DeviceMotionEvent) {
      $('content').text('Device Motion not supported');
   }
   else {
      window.addEventListener('devicemotion', (event) => {
         const x = Math.round(event.acceleration.x);
         const y = Math.round(event.acceleration.y);
         const z = Math.round(event.acceleration.z);

         $('#acceleration-x').text(x);
         $('#acceleration-y').text(y);
         $('#acceleration-z').text(z);

      });
   }
});