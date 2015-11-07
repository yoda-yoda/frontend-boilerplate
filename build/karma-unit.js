"use strict";

module.exports = function ( karma ) {
  karma.set({
    /**
     * From where to look for files, starting with the location of this file.
     */
    basePath: '../',

    /**
     * This is the list of file patterns to load into the browser during testing.
     */
    files: [
      'src/settings.js',
      'vendor/jquery/dist/jquery.js',
      'vendor/angular/angular.js',
      'vendor/bootstrap/dist/js/bootstrap.js',
      'vendor/angular-resource/angular-resource.js',
      'vendor/angular-animate/angular-animate.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'vendor/angular-bootstrap/ui-bootstrap.js',
      'vendor/angular-bootstrap/ui-bootstrap-tpls.js',
      'build/templates-app.js',
      'build/templates-common.js',
      'vendor/angular-mocks/angular-mocks.js',
      'vendor/js-data-angular-mocks/dist/js-data-angular-mocks.js',
      
      'src/**/*.js',
      'src/app/common/tpls/*.tpl.html'
    ],
    exclude: [
      'src/assets/**/*.js'
    ],
    frameworks: [
        'jasmine',
        'sinon'

    ],
    plugins: [
        'karma-jasmine',
        'karma-sinon',
        'karma-firefox-launcher',
        'karma-phantomjs-launcher',
        'karma-coverage',
        'karma-threshold-reporter',
        'karma-mocha-reporter',
        'karma-ng-html2js-preprocessor'
    ],
    preprocessors: {
        'src/app/**/*.js': ['coverage'],
        'src/app/common/tpls/*.tpl.html': ['ng-html2js'],
    },

    /**
     * How to report, by default.
     */
    reporters: [
        'progress',
        'coverage',
        'threshold',
        'mocha'
    ],

    // reporter options
    mochaReporter: {
      output: 'autowatch'
    },

    /**
     * On which port should the browser connect, on which port is the test runner
     * operating, and what is the URL path for the browser to use.
     */
    port: 9018,
    runnerPort: 9100,
    urlRoot: '/',

    /**
     * Disable file watching by default.
     */
    autoWatch: false,

    /**
     * The list of browsers to launch to test on. This includes only "Firefox" by
     * default, but other browser names include:
     * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
     *
     * Note that you can also use the executable name of the browser, like "chromium"
     * or "firefox", but that these vary based on your operating system.
     *
     * You may also leave this blank and manually navigate your browser to
     * http://localhost:9018/ when you're running tests. The window/tab can be left
     * open and the tests will automatically occur there during the build. This has
     * the aesthetic advantage of not launching a browser every time you save.
     */
    browsers: [
      'Firefox'
    ],

    coverageReporter: {
        dir: 'coverage/',
        reporters: [
            {
                type: 'html',
                subdir: 'html/'
            },
            {
                type: 'text'
            },
            {
                type: 'text-summary'
            }
        ]
    },

    thresholdReporter: {
        statements: 100,
        branches: 100,
        lines: 100,
        functions: 100
    },
  });
};