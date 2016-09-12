define(function(require) {

	var Adapt = require('coreJS/adapt');
	var AutoHide = require('extensions/adapt-hideNavigation/js/jquery.autohidingnavbar');

	this.onDeviceChanges = function(){

		var imageWidth = width === 'medium' ? 'small' : width;

		$('.size-' + imageWidth + ' .navigation').autoHidingNavbar({
			showOnUpscrollOffset: -30,
		});
	}

	Adapt.on("pageView:postRender", function(view) {
		var model = view.model;
		if (model.get("_hideNavigation")) {
			if (model.get("_hideNavigation")._isActive) {
				
				this.listenTo(Adapt, 'device:changed', this.onPageReady);
			}
		}
	});

});
