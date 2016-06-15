/*
 * grunt-cli
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tyler Kellen, contributors
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt-init/blob/master/LICENSE-MIT
 */

'use strict';

var appConfig = {proxy: 'scrapper.localhost.w16'};

module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: '*',
            tasks: []
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        // 'library/css/style.css',
                        // 'library/css/style-scss.css',
                        // 'library/css/main.css',
                        // 'library/js/main.js'
                    ]
                },
                options: {
                    watchTask: true,
                    proxy: "scrapper.localhost.w16"
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
};
