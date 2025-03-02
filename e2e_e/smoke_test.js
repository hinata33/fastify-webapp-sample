SuiteOf('スモークテスト');


Scenario('Webサイトを開きログインする',  ({ I }) => {
//console.log(`Base URL: ${process.env.BASE_URL}`);
//I.amOnPage(process.env.BASE_URL);
I.amOnPage('/')
I.click('ログインする')
I.fillField('ユーザー名','user1')
I.fillField('パスワード','super-strong-passphrase')
I.click('ログイン')
I.see('user1 さん')
//I.see('わざと失敗する')

});