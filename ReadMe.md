## Install following pacakage to Run Server:

> npm install express --save
> npm install mongoose --save
> npm install mocha chai sinon sinon-mongoose --save

## Installed following for client - need node8 > version 
 Following steps used to create the client  
  > npm install -g create-react-app
  > create-react-app client
  
  > npm install redux react-redux --save
  > npm install axios
  > npm install prop-type
  > npm install redux-logger
  > npm install redux-promise-middleware
  > npm install redux-thunk
  > npm install enzyme
  > npm install enzyme enzyme-adapter-react-16


## Steps to Run Server 
Note : I used the mongodb its important to start the mongoDB first 

1) Run mongodb from mongodb bin - Need to start server separtel @ port:27017
-if above cmd not work go to path mongodb/bin and excute mongodb.exe

2) To Create database and upload the data.json on database - run below cmd
 > node db/createDB.js 

- This is for first time only to insert in database, as data is not yet there.

## Run the server - run below cmd  
 > node app.js  
Server start at -> http://localhost:3001/

## Steps to run Client 
 > cd client 
 > npm start 
 http://localhost:3000/

 Check html page which fetch API 

## NOTE: Monogodb, localhost server and client localhost all 3 have to run togther to test.

## Steps to test script of server
Note: Using Mocha as a test runner, Chai as an assertion library, and Sinon.js 
Run below cmd on respected directory 
 > npm test

## API SPEC 
GET /getProfitSummary HTTP/1.1

Host: 127.0.0.1:3001

cache-control: no-cache

queryparameter : 
 date :
   type : string
   required  : false 

## Tested in Chrome Browser




