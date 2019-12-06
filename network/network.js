function getConnection() {
  return navigator.connection || navigator.mozConnection ||
  navigator.webkitConnection || navigator.msConnection;
}

$(document).ready(() => {

   $('#online').text(navigator.onLine);

   window.addEventListener('online', () => $('#online').text('online'));
   window.addEventListener('offline', () => $('#online').text('offline'));

   const info = getConnection();
   if (info) {
      info.addEventListener('change', event => {
         document.getElementById('networkType').innerHTML = info.type;
         document.getElementById('effectiveNetworkType').innerHTML = info.effectiveType;
         document.getElementById('downlinkMax').innerHTML = info.downlinkMax;
      });
   }

});

