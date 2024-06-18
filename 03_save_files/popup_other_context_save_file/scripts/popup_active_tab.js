alert('runs automatically, hello from: ' + `${window.location.href}; also inspect the popup to see it console logged in that dev tool instance.`)
console.log(
  'runs automatically when the popup is clicked',
  {url: document.location.href},
  'note how we are in the extensions context.'
)

function activateButtons() {
  setTimeout(() => { 
    // ^ set timeout needed to ensure the buttons have loaded. may need to be adjusted for slower hardware not sure.
    // ^ usually set timeout is a code smell that should be improved but this is good for now.

    // remove a listener if one is active. If the user clicks the extension multiple times.
    document.getElementById("myButton").removeEventListener("click", initiateScript);
    document.getElementById("myButton").addEventListener("click", initiateScript);
  }, 100);
}
activateButtons() // go ahead and run it on every popup click

function initiateScript() {
  alert('button clicked from: ' + `${window.location.href}`)

  // get the active tab and set it within the file. Requires permission: active-tab  in manifest.json
  let activeTab;
  chrome.tabs.query(
    {
          active:true,
          windowType:"normal",
          currentWindow: true
    },
    function(d){activeTab = d[0].id}
  )

  setTimeout(() => { // execute a script on the active tab context. Requires permission: scripting and active-tab in manifest.json
    chrome.scripting.executeScript({
      target: {tabId: activeTab},
      func: helloFromActiveTab
    })
  }, 300)
}

function helloFromActiveTab () {
  alert('popup initiated hello from: ' + `${window.location.href}`);
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
    alert('finished')
}
