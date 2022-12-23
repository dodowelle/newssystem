const { override, addDecoratorsLegacy, addWebpackAlias } = require("customize-cra");
const path = require("path");
module.exports = override(
  //增加路径别名的处理 
  addDecoratorsLegacy(),
  addWebpackAlias({  
    '@': path.resolve(__dirname, './src')  
  })
);