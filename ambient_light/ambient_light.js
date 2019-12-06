$(document).ready(() => {

   const details = document.getElementById("details");

   $('content').css('background-color', 'rgb(255,255,0)');

   window.addEventListener("devicelight", function (event) {

      // Read out the lux value
      
      var luminosity = event.value;
      
      // alert(luminosity);
      details.innerHTML = luminosity;
      $('content').css('background-color', 'rgba(255,255,0,' + luminosity + ')');
      
      
   });



   // if (window.AmbientLightSensor){
   //    try{
   //    const sensor = new AmbientLightSensor();
   //    // Detect changes in the light
   //    sensor.onreading = () => {
   //       details.innerHTML = sensor.illuminance;
   //          $('content').css('background-color', 'rgba(255,255,255,' + sensor.illuminance + ')');
   //    }

   //    // Has an error occured?
   //    sensor.onerror = event => document.getElementById("details").innerHTML = event.error.message;
   //    sensor.start();
   //    } catch(err) {
   //    details.innerHTML = err.message;
   //    }
   // } else {
   //    details.innerHTML = 'It looks like your browser doesnt support this feature'; 
   // }

});

