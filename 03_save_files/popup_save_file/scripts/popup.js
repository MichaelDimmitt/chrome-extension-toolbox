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

async function initiateScript() {
    const src = chrome.runtime.getURL("scripts/createJSONFile.js");
    const {createJSONFile} = await import(src);
    createJSONFile({
      'type': 'script',
      'api_key': 'foo',
      'data': 'bar',
      'inputs': 'baz',
    });
}

// links: 
// 1. https://stackoverflow.com/a/24162238/5283424
// 2. https://developer.chrome.com/docs/extensions/reference/api/downloads
// 3. https://stackoverflow.com/a/26158579/5283424
// 4. https://github.com/MichaelDimmitt/chrome-extension-toolbox/issues/1
