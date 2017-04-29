var app = app || {};

(function ($) {
	'use strict';

	app.BlockView = Backbone.View.extend({
		tagName  : 'li',
        className: 'block',
		template : _.template( $('#block-tpl').html() ),

        confirmMessage: 'Вы уверены что хотите удалить этот блок?',

		events: {
			'click'              : 'activate',
			'dblclick'           : 'changeColor',
			'click .remove-block': 'delete'
		},

		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
		},

		render: function() {
			this.$el.html( this.template(this.model.toJSON()) );
			this.$el.toggleClass('active', this.model.get('active'));

            var isSpecial = this.model.get('isSpecial');
            if (isSpecial) {
                this.$el.addClass( this.model.get('color') );
            }
			return this;
		},

		activate: function() {
			this.model.toggle();
		},

		delete: function(e) {
            e.stopPropagation();
            var removeAction = true;
            var isSpecial    = this.model.get('isSpecial');

            if (isSpecial) {
                removeAction = confirm(this.confirmMessage);
            }
            if (removeAction) {
                this.model.destroy();
            }
		},

        changeColor: function() {
            var isSpecial = this.model.get('isSpecial');
            if (!isSpecial) {
                return;
            }

            this.model.changeColor();
        }
	});
})(jQuery);