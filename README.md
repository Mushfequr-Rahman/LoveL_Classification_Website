
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
 