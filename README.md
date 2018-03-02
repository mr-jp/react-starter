# React Starter

Nice environment for JS development. Includes:

 - gulp (task automation, build tool)
 - gulp-connect (run a local dev server)
 - gulp-open (open URL in a web browser)
 - browserify (JS bundler)
 - reactify (transforms JSX to JS)
 - vinyl-source-stream (use conventional text streams with Gulp)
 - gulp-concat (concantendate files)
 - gulp-eslint (Lint JS files, including JSX)

# Installation

 1. Prerequisites
 
    [nodeJS](https://nodejs.org/en/download/)
 
 2. Clone this repository

``` 
git clone https://github.com/mr-jp/react-starter.git
```
 
 3. Install node modules
```
cd react-starter
npm install --save gulp
npm install --save -g gulp
npm install --save gulp@3.9.0 gulp-connect@2.2.0 gulp-open@1.0.0
npm install -save browserify@11.0.1 reactify@1.1.1 vinyl-source-stream@1.1.0
npm install --save bootstrap@3.3.5 jquery@2.1.4 gulp-concat@2.6.0
npm install --save gulp-eslint@0.15.0
npm install -save react@0.13.3 react-router@0.13.3 flux@2.0.3
```

 4. Run gulp
 
 ```
 gulp
 ```
 
 Running this will do a few things:
 
  1. look at the file `gulpfile.js` to see how this is done
  1. Run a local dev server (default port 9005)
  1. get index.html from the `./dist` directory and open it in a new browser window
  1. handle HTML files from `./src` directory and move them to `./dist`
  1. handle JS files, transform JSX to JS, bundle to a single file, log errors to console, and move them to `./dist` directory
  1. live reload when changes happen to HTML and JS files
  1. handle CSS files
  1. Lint JS files
  1. Watch files for changes
