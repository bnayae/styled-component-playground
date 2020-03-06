module.exports = {
  // Will deploy to out directory
  //   distDir: 'build',
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    };
  },
};
