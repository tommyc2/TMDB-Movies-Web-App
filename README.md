# TMDB Movies Web App

<b>Name: </b>Tommy Condon

<b> Student Number: </b>20101841

<b>Course: </b>BSc Applied Computing (W2)

![alt text](<Screenshot from 2024-11-01 13-48-24.png>)

## Overview

This is a React JS application using the TMDB API to fetch movies (upcoming, trending, recommended, similar etc) and display them on a user-friendly dashboard. It utilises several React Hooks, particularly useState, useEffect, useContext (to avoid prop-drilling) & useNavigate.

A third-party authentication service was integrated at a later stage to allow users the ability to sign in & create an account on the web app. This was done as extra functionality for the assignment.

### Features

+ Third-Party Authentication (Login/Signup) using Clerk Auth
+ Upcoming, Trending movie list pages (routes)
+ Recommended Movies List (parameterised endpoint) for each movie
+ Similar Movies List (parameterised endpoint) for each movie
+ Sorting of movies by year (latest to oldest) for each static/parameterised endoint
+ React Query caching for each static/parameterised url
+ Animated Blob cursor

## Setup requirements

To run the app locally, do the following:

### 1. Clone the repo in your desired directory (copy & paste command below into your terminal)

~~~bash
git clone https://github.com/tommyc2/TMDB-Movies-Web-App.git
~~~

### 2. Create a file called .env in the "movies" directory with the following values:

<b>REACT_APP_TMDB_KEY: </b>You will need to generate an API key from TMDB (https://www.themoviedb.org/?language=en-IE). This will be the 'REACT_APP_TMDB_KEY' value.

<b>REACT_APP_CLERK_PUBLISHABLE_KEY: </b>This is your Clerk publishable key. Go to https://clerk.com and signup for an account. Once you do that, go to dashboard -> configure -> API keys and use the 'publishable key' as the value in the .env file. From here, you can customise your login/signup portal whatever way you like.


 ```javascript
REACT_APP_TMDB_KEY=your_tmdb_api_key
REACT_APP_CLERK_PUBLISHABLE_KEY=your_key
FAST_REFRESH=false
 ```

Note: All environment variables should start with 'REACT_APP_' as this is a frontend react application.

### 3. Install the necessary packages required
 ```bash
cd movies
npm install
```
### 4. Start the program!
 ```bash
npm start
```

Now, type in http://localhost:3000/ or whatever port the terminal says to visit (usually 3000 or 3001) in your browser and enjoy!

## TMDB API endpoints used

+ Discover list of movies = /discover/movie
+ Movie details = /movie/:id
+ Reviews = /movie/:id/reviews
+ Trending = /trending/movie
+ Upcoming = /movie/upcoming
+ Recommended = /movie/:id/recommendations
+ Recommended = /movie/:id/similar

## Routing

<b>Public routes: </b>

+ /sign-in: User sign in portal
+ /sign-up: User sign up portal

<b> Protected routes: </b>
+ /reviews/:id = Reviews for particular movie
+ /movies/favourites = list of favourited movies
+ /movies/:id = Movie page
+ / = root (homepage)
+ /movies/upcoming = Upcoming list of movies
+ /movies/trending = trending movies
+ /movies/:id/recommendations = recommended movies
+ /movies/:id/similar = similar movies to the one clicked on



## Independent learning

In order to implement the Third-Party authentication piece, <b>Clerk</b> was used. Their documentation can be found here: https://clerk.com/docs/quickstarts/react

The documentation was very detailed and helped massively in the implementing this part of the project.

As multiple routes needed to be protected, I wrapped the routes within a route (https://medium.com/@dennisivy/creating-protected-routes-with-react-router-v6-2c4bbaf7bc1c). 

In addition to this, an animated cursor was used in the UI revamp section using this library (https://github.com/stephenscaff/react-animated-cursor/blob/master/readme.md)