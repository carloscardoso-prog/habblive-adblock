console.log("Hello World");
console.log('jQuery:', typeof $);

document.addEventListener = function() {};
window.addEventListener = function() {};

for (let i = 1; i < 1000; i++) window.clearInterval(i);

var target = document.querySelector('body');

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(node) {
            if (node.nodeType === 1) {
                var $el = $(node);

                if ($el.is('div[id^="main_a_d_"]')) {
                    $el.remove();
                }

                if ($el.is('div[id*="ad"], div[id*="ads"], div[id*="gpt"], div[id*="google_ads_iframe"]')) {
                    $el.remove();
                }

                if ($el.is('iframe[id*="ad"], iframe[id*="ads"], iframe[id*="gpt"], iframe[id*="google_ads_iframe"]')) {
                    $el.remove();
                }
            }
        });
    });
});

observer.observe(target, {attributes: true, childList: true, characterData: true});