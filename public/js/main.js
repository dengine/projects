require.config({
    'config': {
        'i18n': {
            'locale': 'ru'
        }
    },
    'paths': {
        'i18n': 'libs/require/i18n',
        'text': 'libs/require/text',
        'underscore': 'libs/underscore',
        'jquery': 'libs/jquery',
        'backbone': 'libs/backbone',
        'uikit': 'libs/uikit'
    },
    'shim': {
        'backbone': {
            'deps': ['jquery', 'underscore'],
            'exports': 'Backbone'
        },
        'underscore': {
            'exports': '_'
        },
        'app' : ['backbone']
    }   
});

require(
    ['jquery', 'underscore', 'backbone', 'app'],
    function($, _, Backbone, app) {
        app.init();
    }
);