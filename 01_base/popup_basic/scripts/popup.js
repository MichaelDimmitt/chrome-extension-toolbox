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
}
