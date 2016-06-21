module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            my_target: {
                files: {
                    'dist/js/perfmatters.js': 'js/perfmatters.js',
                    'dist/views/js/main.js': 'views/js/main.js'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/css/print.css': 'css/print.css',
                    'dist/css/style.css': 'css/style.css',
                    'dist/views/css/style.css': 'views/css/style.css',
                    'dist/views/css/bootstrap-grid.css': 'views/css/bootstrap-grid.css'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true
                },
                // files: {
                //     'dist/index.html': 'index.html',
                //     'dist/views/pizza.html': 'views/pizza.html'
                // }
                files: [{
                    expand: true,
                    cwd: '',
                    src: '*.html',
                    dest: 'dist/'
                },
                {
                    expand: true,
                    cwd: 'views',
                    src: '**/*.html',
                    dest: 'dist/views/'
                }]
            },

        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/img/'
                }]
            }
        },
        // responsive_images: {
        //   dev: {
        //     options: {
        //       engine: 'im',
        //       sizes: [{
        //         width: 400,
        //         quality: 50
        //       }]
        //     },
        //     files: [{
        //         expand: true,
        //         cwd: 'views/images',
        //         src: ['**/*.{png,jpg,gif}'],
        //         dest: 'dist/views/images/'
        //     }]
        //   }
        // }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    // grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin', 'imagemin']);

};
