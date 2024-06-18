if(window.location.href.includes('https://developer.chrome.com/docs/webstore')) {
  alert('content script initiated hello from: ' + `${window.location.href}; also inspect the popup to see it console logged in that dev tool instance.`)
} /* if statement not necessarily needed, 
* but helpful if you have multiple sites you are matching and want to use the same content-script file.
* also, I do not know how you would set the manifest file up yet to do multiple content script files.
*/

console.log('You should see the window for the matching url', window);