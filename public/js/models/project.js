define([
    'jquery',
    'backbone',
    'underscore'
], function() {
    var project = Backbone.Model.extend({
        urlRoot: '/projects',
        defaults: {
            title: 'My first project'
        }
    });

    return project;
});