const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
  await openBrowser();
  await goto('google.com');
  await write('Taiko test automation');
  await click('Pesquisa Google');
  await closeBrowser();
})();
