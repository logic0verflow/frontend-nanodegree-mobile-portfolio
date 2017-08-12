## Udacity Website Performance Optimization Portfolio Project

This project aims to provide a better experience for the Udacity Website Performance Optimization project. The two pages that are being optimized are index.html and pizza.html.

### Getting started

A live version of this project can be viewed and tested by clicking [here](https://logic0verflow.github.io/frontend-nanodegree-mobile-portfolio/dist/). To view the live version of the project prior to the Grunt task changes, click [here](https://logic0verflow.github.io/frontend-nanodegree-mobile-portfolio/src/).

Obtain a copy of the project by either downloading a zipped version or using the below command in a terminal with **git** installed.
```
git clone https://github.com/logic0verflow/frontend-nanodegree-mobile-portfolio.git
```
This project relies on node.js and uses Grunt when developing the distribution ready version of the project (dist) from the original source folder (src). At the time of this writing, the project is built using node.js version 4.2.6 and npm version 3.5.2. Ensure npm and the Grunt CLI packages are installed.

### Building for Distribution

A Gruntfile.js file is included with the current set of optimization task to automate. Some of these task include;

* compressing/optimizing images
* cleaning out old file versions for newer versions
* renaming files back to their original names to ensure references are kept the same
* minifying of HTML, CSS, and Javascript
* inlining CSS of the index.html page.

To perform all these task, simply run the default grunt task using the command

```
grunt
```

Once complete, the directory **dist** will contain all the files that were modified by Grunt.

### Optimizations Made to index.html

* Removed external font reference for open sans
* Added media="print" to the link for css/print.css
* Optimized all the images in src/img and src/views/images using Grunt plugin grunt-responsive-images
* Minified HTML using Grunt plugin grunt-contrib-htmlmin
* Minified CSS using Grunt plugin grunt-contrib-cssmin
* Minified Javascript file perfmatters.js using Grunt plugin grunt-contrib-uglify
* Inlined CSS using Grunt plugin grunt-inline-css

### Optimizations Made to views/js/main.js for pizza.html

* Reformatted **changePizzaSizes** by using a single querySelectorAll and moving the variables within the loop outside of the loop. Did this to avoid numerous forced synchronous layouts. Also created the pizzaAmt variable so length of pizzas didn't have to be calculated each loop.
* Reformatted **updatePositions** to use requestAnimationFrame whenever the scroll event was triggered. Did this to batch all the updates at the start of the frame since multiple scroll events could be triggered before the next frame occurred. Also defined docTop variable outside the loop that was triggering a layout within the loop before the styling of the items. Also docTop doesn't change for any of the items in the loop so no need to recalculate it again.
* Minified Javascript using Grunt plugin grunt-contrib-uglify

