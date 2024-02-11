alert('runs automatically when the popup is clicked from scripts/content.js; inspect the popup to see the console.log fire.')

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
  alert('button clicked')

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
  alert('popup initiated hello from: ', {url: window.location.href})
}
