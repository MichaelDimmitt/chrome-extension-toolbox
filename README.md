## chrome-extension-toolbox
a bunch of minimal extensions that expose different ways to chrome extension and lets me try out different ideas.

## Why
The other day I spotted a post, does anyone have chrome experience.

My first reaction was to respond that any developer should be able to do it because you can just look at the source of other extensions and see what they did. And while it is true that you can see the source, for instance by looking at this location on a mac computer: https://stackoverflow.com/a/17378420/5283424 .

This does not actually mean that you can program chrome extensions.

It just means you are able to view the codebase.  
This is very similar to any developer job.  
When you get any programming job at a company you get access to the codebase.  
That does not mean you are able to do the job.

Being able to program chrome extensions requires a few skills:
1. Javscript Skills  
   1. dom querying - to be able to see where you are at and make changes to the dom.  
   2. logic - for loops, for each,  map, filter, ... etc  
   3. promises - much of the api calls return promises.  
       here is the chrome api for extensions: https://developer.chrome.com/docs/extensions/reference/api
2. The skill of Knowing how chrome extensions work.  
   1. content_scripts  
      1. run automatically when they match.  
      2. only run when the url matches what is put in manifest file.  
      3. have the context of the page that they matched on and can see the window of that url.  
      4. will not be able to see react bindings unless some magic is done.  
   2. popup actions
   3. learn how the permissions work in the manifest json file  
      1. certain extension api calls require permissions to be set in the manifest.json file  
          1. activeTab  
          2. scripting  
          3. storage  
      2. some permissions require the user to accept them in order to become active one such includes:  
          1. clipboardRead  
3. Chrome Extension frameworks exist for doing things like interacting with react or building stuff using vuejs.  
   1. this repo will not cover that as it is meant to be super simple and no setup.
   2. also I do not have experience with it but it should be pretty straightforward. 
   3. to start in that direction I would look at: https://github.com/fregante/Awesome-WebExtensions?tab=readme-ov-file#boilerplates
