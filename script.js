const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
  try {
    await openBrowser();
    await goto('google.com');
    await write('Taiko test automation');
    await click('Pesquisa Google');
  } catch (error) {
    console.error(error);
  } finally {
    closeBrowser();
  }
})();
