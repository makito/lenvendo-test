var app = app || {};

(function () {
	'use strict';

	app.BlockSpecial = app.Block.extend({
		defaults: {
			cssClass: 'special',
            color   : ''
		},

		changeColor: function() {
            var newColor = this.get('color') === TYPE_ONE ?
                           TYPE_TWO :
                           TYPE_ONE;
			this.set('color', newColor);
		}
	});
})();