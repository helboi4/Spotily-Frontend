# Soundcrowd client-side project: Front-end to Spotily

## Background

Team Soundcrowd consists of Helena, Laiba, Luke and Sabi from BNTA cohort 3. Our task was to build a front-end making use of API calls implemented by a previous team's server side project. In our case we were building out the front-end to the music playlist generator Spotily. Spotily allows users to generate playlists based on their answer to quiz questions, then saving this playlist to the database. Spotily also has a variety of admin features, to see all of the endpoints and code structure please follow this link: https://github.com/JazimLatif/Spotily.

## Minimum viable product

Our minimum viable product was to have the following features:

-A login page which allows users to sign in, storing their ID and passing this to the admin page so that their playlists could be rendered. Login page should also allow new users to be registered.
-A user page which shows the users playlists on loading allows users to skip between playlists.
-A search features that allows users to search for a specific song within their playlist.
-A quiz modal, which allows users to take a quiz and then returns a new playlist within the modal, and also updates the playlists on the user page.
-A settings button for users to edit their username and email.


Extension to the minimum viable product:

-A admin page which displays all of the songs and allows admins to add and remove songs
-A feature to register a new admin user.
-Refactoring code to make DRY.
-Testing of code within React

## Initial page design

The initial page design was done with Figma. Images of the pages can be seen below:

![Screenshot 2021-12-03 at 10 04 47](https://user-images.githubusercontent.com/83702748/144584578-820c768a-3084-4d89-ba91-c5c95994d20f.png)


![Screenshot 2021-12-03 at 10 05 04](https://user-images.githubusercontent.com/83702748/144584630-7c47701c-b1bc-4286-aa19-a8dc82107819.png)


![Screenshot 2021-12-03 at 10 05 42](https://user-images.githubusercontent.com/83702748/144584658-8b32fe8a-d586-48e5-80e7-9b2d8036c679.png)


![Screenshot 2021-12-03 at 10 05 55](https://user-images.githubusercontent.com/83702748/144584686-2ccc95bf-815b-44be-8eda-4c269b54c98a.png)


## Tech Stack

The server-side project used Spring Boot, Java and SQL. For our client-side project, we used a React framework for the front-end alongside JavaScript and CSS. 

## How to use

First, clone the Spotily repo linked above (instructions for how to do this on Spotily's repo). Then, clone this repo and insure the necessary dependencies have been added by using the command 'npm install'. 'npm start' in the terminal should then run the React app on localhost:3000.


## Credits

[add github accounts]
https://github.com/helboi4

Thank-you for trainers Colin and Iain for their help on this project. And a special mention to Jonathon, for some last minute debugging!

