
# Final Project for Web Application Development (CSCI3230U) 

## Instructions
To run the web app please run from src directory:
``npm install``  (To install all the dependencies)
``npx npm-run-all -p database backend serve``  (To run the database backend and client side scripts)
         
After you have all the servers running please run the following command in another terminal to  populate the database with out values. **This is only for initial setup**        
``mongoimport --db LoveL --collection users_test --file test_data.json -v --jsonArray --port=9000``
    
the following ports are where we have the different components located:    
http://localhost:3000/ - Server side client for API testing purposes.
http://localhost:9000/ - Server hosting the MongoDB database
http://localhost:9030/ - Server running the Vue Client. 
            

## Acknowledgements
- [Basis for d3 Radar Chart]("https://yangdanny97.github.io/blog/2019/03/01/D3-Spider-Chart")
- [Tensorflow js Text util code](https://gist.github.com/dlebech/5bbabaece36753f8a29e7921d8e5bfc7)
- [Radar Chart d3](http://bl.ocks.org/tpreusse/2bc99d74a461b8c0acb1)
- [HTML Image Slide Show](https://www.w3schools.com/howto/howto_js_slideshow.asp)


## Created By
- Mohammad Mushfequr Rahman
- Mei Yu Chen
- Terry Darmawan Hosea
