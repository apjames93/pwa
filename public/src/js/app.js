var deferredPrompt;


if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function() {
      console.log('Service Worker Registered');
    })
}

window.addEventListener('beforeinstallprompt', function(even) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});
