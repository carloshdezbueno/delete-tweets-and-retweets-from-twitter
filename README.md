# Twitter Retweet/Tweets deleter
This is an easy way to remove all your Tweets and Retweets from your personal Twitter account

## Instructions of use:
### Delete Retweets

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

### Delete Retweets

1. Go to: https://twitter.com/{username}
2. Open the console and run the following JavaScript code:
```javascript
var toDelete = window.prompt("Enter your delete option text exactly as it's writen: ");

setInterval(() => {
  for (const d of document.querySelectorAll('div[data-testid="caret"]')) {
    d.click();
    const deleteButton = document.querySelector("div[role='menu']").getElementsByTagName("div")[3]

    if(deleteButton.getElementsByTagName("span")[0].innerText == toDelete){
      deleteButton.click()
      document.querySelector("div[data-testid='confirmationSheetConfirm']").click()
    }
    
  }
  window.scrollTo(0, document.body.scrollHeight)
}, 1000)
```
3. Enter your delete option text exactly as it's writen. It is located on the tab opened when you select the 3 dot button.
This extra step is for preventing errors caused by any Retweet you have.
