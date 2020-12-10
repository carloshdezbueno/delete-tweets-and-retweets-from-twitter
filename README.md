# TwitterRetweetTweets
This is an easy way to remove all your Tweets and Retweets from your personal Twitter account

## Instructions of use:
### Remove Retweets
For using this feature you have to open your personal twitter account, go to your profile and open the tweets tab and copy the following code on the browser console:

> setInterval(() => {
>   for (const d of document.querySelectorAll('div[data-testid="unretweet"]')) {
>     d.click();
>     const d2 = document.querySelector('div[data-testid="unretweetConfirm"]');
>     d2.click();
>   }
>   window.scrollTo(0, document.body.scrollHeight)
> }, 1000)


### Remove Retweets
