# TwitterRetweetTweets
This is an easy way to remove all your Tweets and Retweets from your personal Twitter account

## Instructions of use:
### Remove Retweets
1. Go to: https://twitter.com/{username}
2. Open the console and run the following JavaScript code:
```javascript
setInterval(() => {
  for (const d of document.querySelectorAll('div[data-testid="unretweet"]')) {
    d.click();
    const d2 = document.querySelector('div[data-testid="unretweetConfirm"]');
    d2.click();
  }
  window.scrollTo(0, document.body.scrollHeight)
}, 1000)
```

### Remove Retweets
