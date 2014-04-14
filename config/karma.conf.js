module.exports = function(config){
    config.set({
    basePath : '../',

    files : [

        'public/js/vendor/jquery.js',
        'public/js/vendor-static/jquery.min.js',
        'public/js/vendor-static/bootstrap.min.js',
        'public/js/vendor-static/masonry.pkgd.min.js',
        'public/js/vendor-static/imagesloaded.pkgd.min.js',
        'public/js/vendor-static/owl.carousel.min.js',
        'public/js/vendor-static/img-touch-canvas.js',
        'public/js/vendor-static/jquery.fullscreen-min.js',
        'public/js/vendor-static/main.js',


        'public/js/vendor/angular.js',
        'public/js/vendor/angular-mocks.js',
        'public/js/vendor/angular-resource.js',
        'public/js/vendor/angular-ui-router.js',
        'public/js/vendor/angular-translate.js',
        'bower_components/ng-infinite-scroller/build/ng-infinite-scroll.min.js',

        'public/js/app/shared/shared-index.js',
        'public/js/app/shared/services/global-data.js',
        'public/js/app/shared/controllers/navigation-ctrl.js',
        'public/js/app/shared/i18n/i18-index.js',
        'public/js/app/shared/i18n/i18-constants.js',
        'public/js/app/shared/i18n/lang/en.js',
        'public/js/app/shared/i18n/lang/de.js',
        'public/js/app/shared/i18n/providers/translation-provider.js',
        'public/js/app/shared/utils/cors.js',

        'public/js/app/products/products-index.js',
        'public/js/app/products/controllers/browse-products-ctrl.js',
        'public/js/app/products/controllers/product-detail-ctrl.js',
        'public/js/app/cart/cart-index.js',
        'public/js/app/cart/controllers/cart-ctrl.js',
        'public/js/app/cart/services/cart-service.js',
        'public/js/app/router.js',
        'public/js/app/settings.js',
        'public/js/app/core-resource.js',

        'public/js/bootstrap.js',

        'test/unit/*.js'
    
    ],

    exclude : [

    ],

    preprocessors : {
        'public/js/app/**/*.js': 'coverage'
    },

    reporters : ['coverage','progress'],

    coverageReporter : {
        type : 'html',
        dir : 'coverage/'
    },

    autoWatch : true,
    singleRun : true,
    
    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher',
            'karma-jasmine',  
            'karma-phantomjs-launcher',
            'karma-coverage'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}