var app = app || {};

(function () {
	'use strict';

	app.BlockSpecial = app.Block.extend({
		defaults: {
            isSpecial: true,
            color    : ''
		},

		changeColor: function() {
            var newColor = this.get('color') === TYPE_ONE ?
                           TYPE_TWO :
                           TYPE_ONE;
            this.save({
                color: newColor
            });
		}
	});
})();