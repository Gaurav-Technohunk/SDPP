// Initialize Google Translate widget in the bottom bar
function googleTranslateElementInit() {
    if (!document.getElementById('google_translate_element')) return;

    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,ta,te,kn,ml,mr,gu,bn,pa,or,sa',
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
    }, 'google_translate_element');
}

// Dynamically load the Google Translate script with the required callback
(function () {
    var gtScript = document.createElement('script');
    gtScript.type = 'text/javascript';
    gtScript.async = true;
    gtScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gtScript, s);
})();


