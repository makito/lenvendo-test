var app = app || {};

(function () {
	'use strict';

	app.Block = Backbone.Model.extend({
		defaults: {
			text  : '',
            active: false
		},

		toggle: function() {
            this.save({
                active: !this.get('active')
            });
		}
	});
})();