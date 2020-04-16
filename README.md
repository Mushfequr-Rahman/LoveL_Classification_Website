# Web_dev_final_project
Final Prject for Web Development

To run the web app please run from src directory 

        
    npm install  --install all the dependecies
    npx npm-run-all -p database backend serve  --run the database backend and client side scripts
          
After you have all the servers running please run the following command in another terminal 
This is only for initail setup.         
    
    mongoimport --db LoveL --collection users_test --file test_data.json -v --jsonArray --port=9000
This will populate the database with our values.
the following ports are where we have the different components located:
    
    http://localhost:3000/ - Server side client for API testing purposes.
    http://localhost:9000/ - Server hosting the MongoDB database
    http://localhost:9030/ - Server running the Vue Client. 
            

Acknowledgements: 

[Basis for d3 Radar Chart]("https://yangdanny97.github.io/blog/2019/03/01/D3-Spider-Chart")
[Tensorflow js Text util code](https://gist.github.com/dlebech/5bbabaece36753f8a29e7921d8e5bfc7)


