define([
    'jquery',
    'backbone',
    'underscore',
    'views/main',
    'views/login',
    'views/projects/list'
], function($, Backbone, _,
mainView, 
loginView, 
projectsListView) {
    var AppRouter = Backbone.Router.extend({
        initialize: function() {
            this.currentView = null;
        },
        routes: {
            ''         : 'main',
            'login'    : 'login',
            'projects' : 'projects'
        },
        changeView: function(view) {
            if (this.currentView != null) {
              this.currentView.undelegateEvents();
            }
            this.currentView = view;
            return this.currentView.render();
        },
        main : function() {
            this.changeView(new mainView());
        },

        login: function() {
            this.changeView(new loginView());
        },

        projects: function() {
            this.changeView(new projectsListView());
        }
    });

    var init = function() {
        var app_router = new AppRouter();

        Backbone.history.start();
    };

    return { init : init }
});