var lang = 'et';
var translations = [];
translations.et = [];
translations.en = [];
translations.ru = [];

var app = {
	
	init: function() {
		
		setTimeout(function() {
			try {
				FB.init({ appId: "405225646214042", nativeInterface: CDV.FB, useCachedDialogs: false });
			} catch (e) {
				app.deliverError(e, '216');
			}
			
		}, 1500);
	
		if (localStorage.getItem('lang')) {
			lang = localStorage.getItem('lang');
			$('.' + lang + '-flag').addClass('active');
		}
	
		app.translateApp();
		
		
	},
	login: function() {
		
		
		/*
		MEMBER / FACEBOOK, GET IMAGE :)
		*/
		
		
	},
	/*
	*
	*/
	
	
}