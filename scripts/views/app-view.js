var app = app || {};

(function ($) {
	'use strict';

	app.mainView = Backbone.View.extend({
		el      : '#app',
        mainTpl : _.template( $('#main-tpl').html() ),
		statsTpl: _.template( $('#stats-tpl').html() ),

		events: {
			
		},

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html( this.mainTpl({}) );
            return this;
		}
	});
})(jQuery);