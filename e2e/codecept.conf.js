const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// dotenv パッケージを読み込む 
require('dotenv').config();
//debug
// 環境変数を取得 
//const baseUrl = process.env.BASE_URL; 
// // 環境変数の値を表示 
//console.log(`Base URL: ${baseUrl}`);

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: process.env.BASE_URL,
      show: true,
      browser: 'chromium'
    },
  },
  include: {
    I: './steps_file.js'
  },
  translation: 'en-US',
  vocabularies: ['./vocabularies.json'],
  name: 'e2e',
  plugins: {
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true,
      deleteSuccessful: false,
    },
  },
};