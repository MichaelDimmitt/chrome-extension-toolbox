### Marco-Polo is a game where you try to find someone with your eyes closed.
1. Monitor all network requests made by your application
2. Filter to error code pattern network requests
3. Read all messages from console
4. Filter to error messages from console

### links for quick reference:  
https://developer.chrome.com/docs/extensions/reference/api  
https://developer.chrome.com/docs/extensions/reference/api/devtools/network - permission: devtools_page
https://bluerivermountains.com/en/log-all-javascript-events - but monitorEvents - does not work for console ...

#### snippet
```javascript
const originalConsoleLog = console.log;

console.log = function(data) {
  console.warn('whaaa')
  originalConsoleLog.apply(console, arguments);
}
```
