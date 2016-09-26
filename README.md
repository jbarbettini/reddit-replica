# Reddit Replica

This application was made in Angular 1.5 with Materialize CSS. Basic interactivity includes being able to sort the Reddit feed by most popular subreddits, as well as Reddit's default parameters. 

I chose Angular because I felt it was the shortest path to results for this single-page application. I used Materialize for its responsive grid layout as well as its built-in styling and functionality; likewise, I also wanted the personal challenge of building with a CSS framework, since I'm accustomed to custom styling all of my previous applications. 

I particularly enjoyed designing the interface for this application; I wanted to keep the look clean, simple, and intuitive for the user, and I did my best to achieve that here. 

Since Angular provided built-in routing functionality, I was able to bypass the back-end components by directly querying the Reddit API from the client side. I realize that this scenario would never happen in a real production environment, but for the purposes of this challenge and its time-sensitive nature, I made the decision to continue as is. 

Given more time, I would love to properly refactor it to route Reddit queries through the server. I'd also enjoy using SASS for all the custom styles as well so that I can avoid some repeating code such as font-sizes, flexbox parameters, and color/border variables. 

## How to run this application

1. Run `npm install` to install all the grunt dependencies
2. Run `bower install` to install materialize and angular dependencies
3. Run `grunt serve` for preview of the application