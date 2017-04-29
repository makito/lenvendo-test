var app = app || {};

(function () {
	'use strict';

	var BlocksList = Backbone.Collection.extend({
		model: app.Block,

		localStorage: new Backbone.LocalStorage('blocks'),

		actived: function() {
			return this.where({
                active: true
            });
		},
		activedTypeOne: function() {
			return this.actived().where({
                color: TYPE_ONE
            });
		},
        activedTypeTwo: function() {
			return this.actived().where({
                color: TYPE_TWO
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