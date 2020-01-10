window.addEventListener('load', function() {
    
    const ids = [
        'hs-eu-cookie-confirmation', //hubspot gdpr popup
        'hubspot-messages-iframe-container', //hubspot chatbot
        'sccm-container',  //sanoma websites popup
        'intercom-container', //intercom popup
        'gdpr-banner', //gdpr banner at least on intercom.com
        'js-gdpr-consent-banner', //gdpr banner on stackoverflow
        'banner__container', //nytimes gdpr crap
        'cx_bottom_banner', //nbcnews
        'privacy-consent', //theverge
        'chatbot-chat', //chatbot.com
	'CybotCookiebotDialog', //Cookie dialogue
    ];

    const classes = [
        'alma-data-policy-banner', //alma privacy
        'as-oil-greeter', // alma popup
    ]

    //Timeout that waits for async crap to load
    setTimeout(function(){
         //Remove ids
        ids.forEach(function(id) {
            var element = document.getElementById(id);
            if (element != null) {
                console.log('Removing ' + id);
                element.remove();
            }
        });

        //Remove classes
        classes.forEach(function(cla) {
            var element = document.getElementsByClassName(cla)[0];
            if (element != null) {
                console.log('Removing ' + cla);
                element.remove();
            }
        });
    },1000);
   
});
