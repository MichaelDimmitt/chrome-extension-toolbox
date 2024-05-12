export function createJSONFile(jsonValue) {
  var jsonStringified = JSON.stringify(jsonValue);
  var blob = new Blob([jsonStringified], {type: "application/json"});
  var url  = URL.createObjectURL(blob);

  chrome.downloads.download({
    url: url, // The object URL can be used as download URL
    filename: 'cypress.env.json'
    //...
  });
}