define([
    'jquery',
    'backbone',
    'underscore',
    'models/project'
], function($, Backbone, _, projectModel) {

    var ProjectsCollection = Backbone.Collection.extend({
        model: projectModel
    });

    return ProjectsCollection;
});