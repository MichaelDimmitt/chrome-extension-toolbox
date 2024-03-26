## chrome-extension-toolbox
a bunch of minimal extensions that expose different ways to chrome extension and lets me try out different ideas.

## Why
The other day I spotted a post: does anyone have chrome extension experience?

My first reaction was to respond that any developer should be able to do it because you can just look at the source of other extensions and see what they did. And while it is true that you can see the source, for instance by looking at this location on a mac computer: https://stackoverflow.com/a/17378420/5283424 .

This does not actually mean that you can program chrome extensions.

It just means you are able to view the codebase.  
This is very similar to any developer job.  
When you get any programming job at a company you get access to the codebase.  
That does not mean you are able to do the job.

Being able to program chrome extensions requires a few skills:
1. Javascript Skills  
   1. dom querying - to be able to see where you are at and make changes to the dom.  
   2. logic - for loops, for each,  map, filter, ... etc  
   3. promises - much of the api calls return promises.  
       here is the chrome api for extensions: https://developer.chrome.com/docs/extensions/reference/api
   4. how to add and remove event listeners. useful for the popup action to run on button click.
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
3. Security concerns
   1. be comfortable dealing with browser security restrictions   
   and how to work around them.
   2. think about your users and being secure with data.
      1. make sure what you are storing cannot be exposed to other extensions.
      2. know about how sensitive the data that you are working with is and act appropriately.  
4. Chrome Extension frameworks exist for doing things like interacting with react or building stuff using vuejs.  
   1. this repo will not cover that as it is meant to be super simple and no setup.
   2. also I do not have experience with it but it should be pretty straightforward. 
   3. to start in that direction I would look at:  
https://github.com/fregante/Awesome-WebExtensions?tab=readme-ov-file#boilerplates
5. Let me know if anything else should be added. hopefully this helps you in your hiring process.
6. TODO: 
   1. Figure out how to write a test suite for these components.
   2. Is it possible for me to test them using cypress? (can cypress visit chrome://extensions/ and hit the reset button?)
   3. Test suite should auto run in the background and make a failure noise if you caused something to fail on the extension.


Metaphor: (The human journey of learning reality)
1. First, you learn how to respond via console.log or alerts when poked (aka. clicked)
2. You learn how to mess with reality (dom manipulation)
3. You learn how to get out of your own head and enter a room, the active room! (a websites context)
4. You learn to move to a new room.
5. You learn to keep what you learned from what was in your head (or any preceding room) as you go to the next room. (storing variables within the chrome extension between urls)
6. You learn how to grab things off the clipboard on the wall.
7. You interact with fields and click submit buttons.
8. You learn about being careful when managing data that you have copied and test that your pockets are not leaking keys.
9. You may do other things you now have some mighty internal capabilities! wahoo!
