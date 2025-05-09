/** @type {import('postcss-load-config').Config} */
/*
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
*/

module.exports = {
  plugins: {  // ✅ Required key
    tailwindcss: {},
    autoprefixer: {},
  },
}