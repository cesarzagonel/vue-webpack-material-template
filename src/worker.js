/**
 * Setup worker
 */
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function() {
    }).catch(function(err) {
        console.error(err);
    });
}
