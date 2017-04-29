var app = app || {};

(function ($) {
	'use strict';

	app.mainView = Backbone.View.extend({
		el      : '#app',
        mainTpl : _.template( $('#main-tpl').html() ),
		statsTpl: _.template( $('#stats-tpl').html() ),
        textTpl : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

		events: {
			'click #add-block': 'addBlock'
		},

		initialize: function() {
            this.$el.html( this.mainTpl() );

            this.listenTo(app.blocksList, 'add', this.renderOneBlock);
            this.listenTo(app.blocksList, 'all', this.renderStats);

            this.cache();
			this.renderStats();

            app.blocksList.fetch();
		},

		renderStats: function() {
            var countAll = app.blocksList.length;
            var actived  = app.blocksList.actived().length;
            var typeOne  = app.blocksList.activedTypeOne().length;
            var typeTwo  = app.blocksList.activedTypeTwo().length;

            this.$stats.html(this.statsTpl({
                all    : countAll,
                actived: actived,
                typeOne: typeOne,
                typeTwo: typeTwo
            }));
		},

        cache: function() {
            this.$stats = this.$('#stats');
            this.$list  = this.$('#list');
        },

        getRandomText: function() {
            return this.textTpl.substr(this.getRandomId(), this.getRandomId());
        },

        getRandomId: function() {
            return Math.floor(Math.random() * (this.textTpl.length - 10)) + 10;
        },

        getRandomBoolean: function() {
            return Math.random() >= 0.5;
        },

        getRandomColor: function() {
            return this.getRandomBoolean() ?
                   TYPE_ONE :
                   TYPE_TWO;
        },

        renderOneBlock: function(block) {
            var view = new app.BlockView({
                model: block
            });
            this.$list.prepend( view.render().el );
        },

        addBlock: function() {
            var data = {
                text: this.getRandomText()
            };
            var createSpecial = this.getRandomBoolean();
            if (createSpecial) {
                _.assign(data, {
                    isSpecial: true,
                    color    : this.getRandomColor()
                });
            }
            app.blocksList.create(data);
        }
	});
})(jQuery);