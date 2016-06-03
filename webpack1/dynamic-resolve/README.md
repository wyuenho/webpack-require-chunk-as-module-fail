## How to Run

### The Good Case

1. `$ npm install`
2. `$ npm run good`
3. `$ python -m SimpleHTTPServer`
4. Go to http://0.0.0.0:8080 on your browser
5. Open the DevTool console with CMD-J
6. You should see `a` logged to the console

### The Bad Case

1. `$ npm run bad`
2. Go to http://0.0.0.0:8080 on your browser
3. Open the DevTool console with CMD-J
4. You should see and error `Uncaught Error: Cannot find module './a'.`

### Failure Reason

Webpack does not treat entry chunks as requirable module
