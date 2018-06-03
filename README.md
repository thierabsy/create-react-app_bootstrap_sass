## BOILERPLATE: CREATE REACT APP + BOOTSTRAP 4 + FONT AWESOME 4.7


### CREATE REACT APP
    create-react-app myapp
### REPLACEMENT
    /src
    package.json
### INSTALL DEPENDENCIES:
    npm install
    
    
    ## package.json
    ### Dependencies
    "bootstrap": "^4.1.1",
    "font-awesome": "^4.7.0",
    "node-sass-chokidar": "^1.3.0",
    "npm-run-all": "^4.1.3",
    "query-string": "^6.1.0",
    "react": "^16.4.0",
    "react-dom": "^16.4.0",
    "react-router-dom": "^4.2.2",
    "react-scripts": "1.1.4"
    ### Scripts:
    "scripts": {
        "build-css": "node-sass-chokidar --include-path ./src/styles --include-path ./node_modules src/styles/ -o src/styles/",
        "watch-css": "npm run build-css && node-sass-chokidar --include-path ./src/styles --include-path ./node_modules src/styles/ -o    src/styles --watch --recursive",
        "start-js": "react-scripts start",
        "start": "npm-run-all -p watch-css start-js",
        "build": "npm run build-css && react-scripts build",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject"
    }
  ### START DEV SERVER
      yarn start
