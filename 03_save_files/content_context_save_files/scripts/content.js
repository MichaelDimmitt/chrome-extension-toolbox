if(window.location.href.includes('https://developer.chrome.com/docs/webstore')) {
  alert('content script initiated hello from: ' + `${window.location.href}; also inspect the popup to see it console logged in that dev tool instance.`);
  
  const jsonValue = {
    'variable1': `${window.location.href}`,
    'variable2': '',
    'variable3': '',
  };
  var jsonStringified = JSON.stringify(jsonValue);
  var blob = new Blob([jsonStringified], {type: "application/json"});
  var url  = URL.createObjectURL(blob);

  // downloads api does not work outside of an extensions context.
  // chrome.downloads.download({
  //   url: url, // The object URL can be used as download URL
  //   filename: 'cypress.env.json'
  //   //...
  // });

  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  // the filename you want
  a.download = 'cypress.env.json';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  alert('finished');

} /* if statement not necessarily needed, 
* but helpful if you have multiple sites you are matching and want to use the same content-script file.
* also, I do not know how you would set the manifest file up yet to do multiple content script files.
*/

console.log('You should see the window for the matching url', window);
