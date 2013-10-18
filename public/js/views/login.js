define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/auth/login.html',
    'i18n!nls/ru/language'
], function($, Backbone, _, loginTemplate, lang) {

    var loginView = Backbone.View.extend({

        el: '#page-content',
        // Рендеринг шаблона
        render: function() {

            this.template = _.template( loginTemplate, {
                lang: lang
            });

            this.$el.html(this.template);
            return this;
        },

        // Слушатель событий на страцице
        events : {
            'click #enter' : 'doLogin'
        },
        // Обработчики событий
        doLogin: function(events) {
            events.preventDefault();

            alert("Вы вошли на сайт!");
        }
    });

    return  loginView;
});