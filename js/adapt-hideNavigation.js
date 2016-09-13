define(function(require) {

	var Adapt = require('coreJS/adapt');
	var AutoHide = require('extensions/adapt-hideNavigation/js/jquery.autohidingnavbar');

	function onDeviceChanged(width){

		var imageWidth = width === 'medium' ? 'small' : width;

		if (imageWidth === 'large'){

			$('.navigation').autoHidingNavbar('destroy');
		}
		else{

			$('.navigation').autoHidingNavbar({
				showOnUpscrollOffset: -30,
			});
		}
	}

	Adapt.on("adapt:initialize", function() {
		var config = Adapt.course.get("_hideNavigation");

		if (config) {
			if (config._isActive) {
				
				this.listenTo(Adapt, 'device:changed', onDeviceChanged);
				onDeviceChanged(Adapt.device.screenSize);
			}
		}
	});

});
