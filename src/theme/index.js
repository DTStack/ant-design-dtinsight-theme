
import dark from '@ant-design/dark-theme';
import aliyun from '@ant-design/aliyun-theme';

const themeVars = require('../vars.json');
const dtThemeVarsFunc = require('./dt-theme');

const dtThemeVars = dtThemeVarsFunc();

const defaultTheme = {};

themeVars.forEach((group) => {
  group.children.forEach((item) => {
    let { value } = item;
    if (item.type === 'number') {
      value += item.unit;
    }
    defaultTheme[item.name] = value;
  });
});
Object.keys(dtThemeVars || {}).forEach((key) => {
  if (key !== 'icon-url') {
    defaultTheme[`@${key}`] = dtThemeVars[key];
  }
});
console.log('defaultTheme--------------');
console.log(defaultTheme);

export default {
  default: defaultTheme,
  dark,
  aliyun
};
