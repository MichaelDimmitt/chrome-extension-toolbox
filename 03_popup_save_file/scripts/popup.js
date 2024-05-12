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

  var blob = new Blob(["array of", " parts of ", "text file"], {type: "text/plain"});
  var url = URL.createObjectURL(blob);
  chrome.downloads.download({
    url: url, // The object URL can be used as download URL
    filename: 'cypress.env.json'
    //...
  });
}

// links: 
// 1. https://stackoverflow.com/questions/4845215/making-a-chrome-extension-download-a-file
// 2. https://developer.chrome.com/docs/extensions/reference/api/downloads