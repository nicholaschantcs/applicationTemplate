# ApplicationTemplate
Application Template for Node/Angular/Seneca stack


##Getting Started
1. Clone this repo
2. Goto Command Prompt
3. cd to the directory the repo is located
4. Install neccessary packges ``` npm install ```
5. Start greet-service ``` node greet-service ``` -Leave this running
7. Start a new Command Prompt
8. Start App ``` npm start ``` -Leave this running
    
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
  - gets text input from view and returns callback to the API at /api/greet/greetUser?key=&user=USERNAME
2. displayRandomNumber()
  - generate a random number and returns callback to the API at /api/greet/displayRandomNumber
```
