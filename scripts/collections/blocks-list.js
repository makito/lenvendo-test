var app = app || {};

(function () {
	'use strict';

	var BlocksList = Backbone.Collection.extend({
		model: function(attrs, options) {
			return attrs.isSpecial ?
			       new app.BlockSpecial(attrs, options) :
				   new app.Block(attrs, options);
		},

		localStorage: new Backbone.LocalStorage('blocks'),

		actived: function() {
			return this.where({
                active: true
            });
		},
		activedTypeOne: function() {
			return this.where({
				active: true,
                color : TYPE_ONE
            });
		},
        activedTypeTwo: function() {
			return this.where({
				active: true,
                color : TYPE_TWO
            });
		},

		nextOrder: function() {
			return this.length ?
                   this.last().get('order') + 1:
                   1;
		},
		comparator: 'order'
	});

	app.blocksList = new BlocksList();
})();