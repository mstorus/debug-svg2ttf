module.exports = function(grunt) {

  grunt.initConfig({
    webfont: {
      fontforge: {
        src: 'svg/circle.svg',
        dest: 'font',
        options: {
	  fontHeight: 1000,
          engine: "fontforge",
          hashes: false,
          htmlDemo: false,
          normalize: false,
          autoHint: false,
          font: "test_fontforge",
          types: "ttf"
        }
      },
      node: {
        src: 'svg/circle.svg',
        dest: 'font',
        options: {
	  fontHeight: 1000,
          engine: "node",
          hashes: false,
          htmlDemo: false,
          normalize: false,
          autoHint: false,
          font: "test_node",
          types: "ttf"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.registerTask('default', ['webfont']);
};

