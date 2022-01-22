const { override, addBabelPlugins } = require("customize-cra");

module.exports = override(...addBabelPlugins(["effector-logger/babel-plugin", {inspector: true}]))
