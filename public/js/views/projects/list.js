define([
    'jquery',
    'backbone',
    'underscore',
    'collections/projects',
    'text!templates/projects/list.html'
], function($, Backbone, _, projectsCollection, projectListTemplate) {

    var projectListView = Backbone.View.extend({
        el: '#page-content',
        initialize: function() {
            this.collection = new projectsCollection;
            this.collection.add({ title: "Documantation service", url: "#doc" });
            this.collection.add({ title: "Project managment service", url: "#manage" });
            this.collection.add({ title: "Some git service", url: "#git" });
        },
        render: function() {
            var data = {};
            this.template = _.template( projectListTemplate, {
                projects: this.collection.models
            });

            this.$el.html(this.template);
            return this;
        }
    });

    return projectListView;
});
