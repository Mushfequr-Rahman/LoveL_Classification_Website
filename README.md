
# Final Project for Web Application Development (CSCI3230U)

## Instructions
To prepare a directory for the MongoDB database:
- ``mkdir data``
- ``mkdir data/db``


To run the web app please run from src directory:
- ``npm install``  (To install all the dependencies)
- ``npx npm-run-all -p database backend serve``  (To run the database backend and client side scripts)

After you have all the servers running please run the following command in another terminal to  populate the database with out values. **This is only for initial setup**        
- ``mongoimport --db LoveL --collection users_test --file test_data.json -v --jsonArray --port=9000``

the following ports are where we have the different components located:    
- http://localhost:3000/ - Server side client for API testing purposes.
- http://localhost:9000/ - Server hosting the MongoDB database
- http://localhost:9050/ - Server running the Vue Client.

## Introduction of the Website
Given that many unhappy marriage were coming from miscommunication and not showing enough appreciations to their partner, so we want to build a daily gratitude journal especially for couples. <br />
In this website, the couples would share one user account and password and have their common space to view the gratitude messages their partner wrote to them. <br />
The gratitude journal offers an AI text classifier to help the user to analyze what Love Language type they speak and what aspects their partner values the most.

## Main Features
[Front-End]
- Home Page: Give general introduction to users what are the 5 Love Languages.
- Test Page: Accessed from the Home Page, users can do a quick evaluation on what type of Love Language they speak.
- Login Page: For demo purpose, one can use the testing account and password provided in the next section to login, in order to explore the entire features.
- Signup Page: Provide functions for new user sign up.
- Landing Page: The couple can view what are their current Love Language distribution.
- DayLove Page: This is the daily portal where user can view the most recent love messages left by their partner.
- WriteMassage Page: This is where the user can leave daily love messages to their partner.

[Back-End]
- Tensorflow text-classifer: We manually collected 500 love language sentences through a Google Questionnaire, and train a text classifier to automatically classify the text into one of   the Love Langauge category. <br />
  Link to the google form: (https://docs.google.com/forms/d/e/1FAIpQLSdrkgxtnILEUHjeIZ6xiKkQxiDsH77I52MyxnMt3pBEVetAxg/viewform?usp=sf_link)
- Login API
- Sign Up API
- Classifier API
- SaveMessage API
- History Call API
- MongoDB Database


## Testing Account & Password
In the login page, use the following username account and password to use the pre-generated user data.
- username: Travis
- password: Graves


## Acknowledgements
- [Basis for d3 Radar Chart]("https://yangdanny97.github.io/blog/2019/03/01/D3-Spider-Chart")
- [Tensorflow js Text util code](https://gist.github.com/dlebech/5bbabaece36753f8a29e7921d8e5bfc7)
- [Radar Chart d3](http://bl.ocks.org/tpreusse/2bc99d74a461b8c0acb1)
- [HTML Image Slide Show](https://www.w3schools.com/howto/howto_js_slideshow.asp)


## Created By
- Mohammad Mushfequr Rahman
- Mei Yu Chen
- Terry Darmawan Hosea


## TroubleShooting

 You might get some errors trying to installing the dependency "@tensorflow/tfjs-node" this may been solved using the following workarounds:

 - `npm rebuild @tensorflow/tfjs-node build-addon-from-source`
 - [Update node and npm](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/?fbclid=IwAR3cvu-FScvVc83U57hbuwuZJ0TXAe5Elo8HUr3bJS85cp0wBb7qO-EIjg0)

 - [Stack Overflow help](https://stackoverflow.com/questions/57537386/cannot-import-tensorflow-tfjs-node-in-nodejs)
