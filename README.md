![Uploading image.png…]()







Travel Site
This is a website project from the Udemy course - Git a Web Developer Job: Mastering the Modern Workflow by Brad Schiff

Live Demo-
To view the website in action, please go to https://jmishock.github.io/travel-site/

or

To run that demo on your own computer, please follow the instructions in Getting Started

Features
Mobile-first performance:

Lazy loading images and icon sprites for faster page load time

Responsive images for resolution switching to save bandwidth

Responsive web design:

Responsive images for different cropping situations
Support for legacy browsers:

Use picturefill as a responsive image polyfill

Test browser support for SVGs and flexbox with gulp-modernizr

Convert SVGs to PNGs with gulp-svg2png

Reveal page contents on scroll

Smooth page scroll to an anchor on the same page

Getting Started
Clone or download this repository
git clone https://github.com/jmishock/travel-site.git

Install dependencies
npm install
or

yarn install
Start the website
gulp watch
It will open a new tab in your browser and run the website. Should it not open, visit http://localhost:3000

See the website locally with other devices
The previous command will run Browsersync, and you will find the following in the terminal:

[Browsersync] Access URLs:
 -------------------------------------
       Local: http://localhost:3000
    External: http://192.168.0.220:3000
 -------------------------------------
          UI: http://localhost:3001
 UI External: http://192.168.0.10:3001
 -------------------------------------
[Browsersync] Serving files from: app
You can view the website in synchronised action across all your devices with the External URL.

Comments in code
Some comments in the source code are course notes and therefore might not seem necessary from a developer's point of view.

Built with
Front-end
jquery
jquery-smooth-scroll
waypoints
lazysizes
picturefill
normalize.css
gulp
gulp-modernizr
gulp-svg2png
postcss
babel
webpack
Testing
browsersync
Analytics
Google Analytics
Hotjar
License
MIT
