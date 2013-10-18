define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/main.html',
    'i18n!nls/ru/language'
], function($, Backbone, _, mainTemplate, lang) {

    var mainView = Backbone.View.extend({

        el: '#page-content',
        // Рендеринг шаблона
        render: function() {

            this.template = _.template( mainTemplate, {
                lang: lang
            });

            this.$el.html(this.template);
            return this;
        },

        // Слушатель событий на страцице
        events : {
            //
        }
        // Обработчики событий
    });

    return mainView;
});
