module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! ==========================================\n' +
                        ' * <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n' +
                        ' * <%= pkg.author %>\n' +
                        ' * <%= pkg.repository.url %>\n' +
                        ' * Licensed under The BSD 2-Clause License\n' +
                        ' * http://opensource.org/licenses/BSD-2-Clause\n' +
                        ' * =========================================== */\n'
            },
            build: {
                src: 'podlove-web-player/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        less: {
            development: {
                options: {
                    paths: ["podlove-web-player/css"]
                },
                files: {
                    "podlove-web-player/podlove-web-player.css": "podlove-web-player/podlove-web-player.less"
                }
            },
            production: {
                options: {
                    paths: ["podlove-web-player/css"],
                        yuicompress: true
                },
                files: {
                    "build/pwp.css": "podlove-web-player/podlove-web-player.less"
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'podlove-web-player/**/*.js'],
            options: {
                ignores: [
                    'podlove-web-player/libs/jquery-1.9.1.min.js',
                    'podlove-web-player/libs/jquery.ba-hashchange.min.js',
                    'podlove-web-player/libs/html5shiv.js'
                ]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
// grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('build', ['jshint', 'less', 'uglify']);
    grunt.registerTask('default', ['uglify']);
};
