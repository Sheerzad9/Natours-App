# Natours-App 

## About the application
This is my biggest application till to day. This application is heavily focused on the backend (Node.JS / Express.JS) and the database is Mongo.DB and on top of that I used Mongoose.
Every page is rendered on the server side with Pug.js 👀, yep I know what some people think about Pug.js...please dont judge me😁 I am still learning. This project was part of online course.
In this application:
* You can take a look at different hiking tours.
* Login (test user credentials, username: loulou@example.com Pwd: test1234).
* Book a tour and check out all the tours you booked in your user account.
* Update your user (example change username, password, profile picture).
* To book your tour you will be redirected to Stripe checkout session, as card number you can insert "4242 4242 4242 4242" and the rest as you wish.
All these changes are made through the API which I created with Node.JS and everything is updated to the Mongo.DB. In the authentication I have used JWT which is held as a cookie on the client side.

## Notice
The application is not near finished yet, because there is still lots of functionalities which I want to bring on, example:
* Implementing review form and restricting it to only users who have booked that tour.
* Implementing advanced authentication features, example sending verification email while sign in up for the first time.
* Activating sign up form.
* Activating "My reviews" view and the form where you can save your billing informations.

## Please feel free to try out the application
I haven't added any pictures of the application yet because it's still underway.

But in the meanwhile you can check the app out at: https://calm-beyond-06190.herokuapp.com/

If you are interested to be involved with this application and improve it with me, send me message at: ali.sheerzad9@gmail.com
