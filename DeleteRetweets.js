setInterval(() => {
  for (const d of document.querySelectorAll('div[data-testid="unretweet"]')) {
    d.click();
    const d2 = document.querySelector('div[data-testid="unretweetConfirm"]');
    d2.click();
  }
  window.scrollTo(0, document.body.scrollHeight)
}, 1000)