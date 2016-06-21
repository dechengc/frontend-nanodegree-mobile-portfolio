## Website Performance Optimization portfolio project

[View Project](https://dechengc.github.io/frontend-nanodegree-mobile-portfolio/)

###Setup locally
1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

###Part 1: Optimize PageSpeed Insights score for index.html

inlined the font and style css file and put 'async' tag on google analytics js file. 
Used Grunt's tools for 
 -Image Minification
 -CSS & Javascript inline includes & minification
 -HTML Minification
used online jpeg compression tools for pizzeria.jpg cause grunt met an error said: 'write an EOF to file'

###Part 2: Optimize Frames per Second in pizza.html

-Moved DOM queries out of loops in several places
-Used document.getElementsByClassName() and getElementByID() to replaced document.querySelectorAll().
-In updatePositions function, moved 'items' variable out of function. 
-Used transform trandlated3d and backface-visibility hidden to make then have their own seperate layers.
-Dynamic calulated the number of moving pizza according to the availwidth & availheight
