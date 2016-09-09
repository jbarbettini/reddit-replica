# Reddit Replica

Hey Chris and Mike,

This application was made in Angular 1.5 with Materialize CSS. Basic interactivity includes being able to click within the center module ('summary cards'), with content dynamically rendering to the right. 

I chose Angular because I felt it was the shortest path to results for this single-page application. I used Materialize for its responsive grid layout as well as its built-in styling and functionality. I also wanted the personal challenge of building with a CSS framework, since I'm used to custom styling all of my previous applications. Ironically, I may have caused more problems for myself with the Materialize choice rather than going the custom route. 

One challenge I faced was making the width of the logo and sidebar slightly more narrow. Ideally, I'd like to have it at a max-width of 75px, but I ran into issues when fixing the width because the adjacent columns would not fill the extra space. I didn't want to add a 'hacky' solution like manually adjusting the adjacent content containers to fill the missing space, because it would break the responsive elements, so I've left it as is for now. 

Given more time, I would want to recompile Materialize from its original SASS source to customize the grid width. I'd also love to use SASS for all the custom styles as well so that I can avoid some repeating code such as font-sizes, flexbox parameters, and color/border variables. 

I hope this meets your requirements! Please let me know if you would like to discuss this project further. 

Warmly, 
Jen

jenn.r.ong@gmail.com | (408) 242-4808 

## How to run this application

1. Run `npm install` to install all the grunt dependencies
2. Run `bower install` to install materialize and angular dependencies
3. Run `grunt serve` for preview of the application