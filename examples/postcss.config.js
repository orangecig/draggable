module.exports = () => ({ // eslint-disable-line no-undef
  plugins: {
    autoprefixer: {},
    cssnano: {
      preset: 'advanced',
      autoprefixer: false,
    },
  },
});
