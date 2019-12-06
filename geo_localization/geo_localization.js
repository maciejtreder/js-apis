
$(document).ready(() => {
   const details = document.getElementById("details");
   if ("geolocation" in navigator) {

      navigator.geolocation.getCurrentPosition((position) => {

         details.innerHTML = position.coords.latitude + ',' + position.coords.longitude;

      });
    } else {
      details.innerHTML = 'This browser does not support geo localization API';
    }

});

