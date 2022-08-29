const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2m7hrp',
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
