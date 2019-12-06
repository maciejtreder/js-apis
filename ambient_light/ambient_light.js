$(document).ready(() => {

   const details = document.getElementById("details");

   if (window.AmbientLightSensor){
      try{
      const sensor = new AmbientLightSensor();
      // Detect changes in the light
      sensor.onreading = () => {
         details.innerHTML = sensor.illuminance;
            $('content').css('background-color', 'rgba(255,255,255,' + sensor.illuminance + ')');
      }

      // Has an error occured?
      sensor.onerror = event => document.getElementById("details").innerHTML = event.error.message;
      sensor.start();
      } catch(err) {
      details.innerHTML = err.message;
      }
   } else {
      details.innerHTML = 'It looks like your browser doesnt support this feature'; 
   }

});

