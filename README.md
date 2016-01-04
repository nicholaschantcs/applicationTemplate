# ApplicationTemplate
Application Template for Node/Angular/Seneca stack


##Getting Started
1. Clone this repo
2. Install neccessary packges 
    ``` npm install ```
3. Start greet-service 
    ``` node greet-service ```
4. Start App
    ``` npm start ```
    
    
| Note : | MUST run greet-service.js before starting the Application|
|----|----|

#NodeJS
###Configurations files:
1. app.js
2. ./bin/www


#SenecaJS
###greet-service

###Configuration files:
1. api.js
2. GreetService.js
3. greet-service.js

```
Functions
1. greetUser()
  - gets text input from view and returns callback to the API at /api/greet/greetUser?user="USERNAME"
2. displayRandomNumber()
  - generate a random number and returns callback to the API at /api/greet/displayRandomNumber
```
