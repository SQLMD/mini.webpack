# Webpack Exercise
### This was created during my time as a [Code Chrysalis](https://codechrysalis.io) Student

## Objectives

* Be able to explain why bundlers and transpilers are used as part of modern software development processes
* Be able to explain why files are typically minified/uglified as part of modern software development processes
* Be able to run webpack using scripts in `package.json`
* Be able to set up basic webpack configurations
  * Be able to bundle `.js` files into one output file
  * Be able to bundle `.css` files into one output file
  * Be able to add in source maps for debugging

## Basic Requirements

#### Part I: Setup & Loading Modules

* [ ] You will need to get webpack! Use yarn or npm to install and remember to save it as a development dependency---we won't need webpack in production.
* [ ] Create your `webpack.config.js` file. Your output should be called `bundle.js` in the `/public` folder.
* [ ] Add a link to the bundled js file into your `index.html` file. `<script src="./bundle.js"></script>`
* [ ] Now, try running `webpack` in your terminal.
  * First, check to make sure your bundle.js file was created.
  * Second, go to your `index.js` file and uncomment the code for step one (you'll probably have to add another dependency). Run webpack again, and check your bundle.js file. How many lines is it?
  * Third, go back to your `index.js` file and uncomment the code for step two. Run webpack again. How many lines is your bundle.js file this time? Check the browser console of your `index.html` file for an explanation why.

#### Part II: CSS Loaders

* [ ] Each `.js` file requires a `.css` file. There are two options here: 1 - add a loader in the webpack config file that handles `.css` when it's in `.js`... or 2 - remove the `.css` files from being imported into the `.js` files and bundle them separately. We want to do option 2. Why? (Hint: do a Google search if you aren't sure!)
  * [ ] Please remove the lines from the `.js` files that require the `.css` files. Now, instead of loading css straight into the `.js` files, we want to compile all `.css` files into a file called `bundle.css` in the `/public` folder. That way, we can have all of our css together in one file.
  * [ ] Remember to add the correct link into the `index.html` page. `<link rel="stylesheet" type="text/css" href="WHERE_IS_YOUR_BUNDLED_CSS?">`
* [ ] Add in [source maps](http://blog.teamtreehouse.com/introduction-source-maps)! Maybe you will want to [google how to do it with webpack](http://lmgtfy.com/?q=source+maps+webpack).
* [ ] Run `webpack` to see your new bundle.js and bundle.css file.

#### Part III: Plugins

* [ ] Take some time to look through [this list of plugins](https://webpack.js.org/plugins/). These are going to be really useful as your applications get more complex and require more customization. Can you find...
  * The plugin that creates html files for you?
  * The file that can help you out if you're doing a webapp in more than one language?
  * The plugin that 'catches' dependencies that you might be using but forgot to install?
* [ ] Time to get some experience with plugins! We would like you to 'uglify' your code. Why would you want to make your code ugly?
* [ ] Add the `UglifyjsWebpackPlugin` so that your code gets uglified!

#### NIGHTMARE MODE: Hot Reloading

* [ ] Now, add `webpack-dev-server` (also save this as a dev dependency). You will need to add this to your webpack config file:
  ```
  devServer: {
      contentBase: __dirname + '/public'
  }
  ```
* [ ] Type `webpack-dev-server` into your terminal and visit `localhost:8080`. You should see your files being served.
  * Depending on what CSS loaders you are using, this may not work. We suggest learning more about CSS & Webpack by exploring documentation online. If you just want to get the dev-server running, remove all references to your `.css` files for now.
* [ ] Make a change to your `index.js` file. Save your code. Your terminal display should show a new bundle being created in memory. If you go back to `localhost:8080` and refresh the page, you should automatically see your changes.
  * `webpack-dev-server` is a local development server with file watching, automated bundling, and a live reload server. It is sort of the best thing ever.
  * When you use it, you don't have run `webpack`. It handles the continous bundling for you.
