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

### Objectives
- read last error
- read last 200 data.warning(non standard) from network tab
- read last console error
- read last console log

### Final Plan
1. because the snippet works...
2. store each warning, error, and log into an array of strings.
3. Keep the array at max size 50 ... removing old stdouts and keeping new stdouts
4. aka pop the end when you push the begin
5. content script starts the monitor
6. popup to trigger the extension.
7. when the chrome extension is clicked search back through for the nearest error ... and deconstruct it.
8. Or timestamp deleiminate everything and grab what happened in last minute.

#### Final Plan, Order of Escalation
1. check network tab error
2. check network tab warning
3. check console error
4. check console warn
5. check console log
6. tell user to write up their own report...
