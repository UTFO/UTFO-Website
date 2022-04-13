# UTFO-Website
A website for the University of Toronto Freelancers' Society.

# Run site locally
To run the site locally now (since it requires a database connection), there are a few steps you need to take.
## Acquiring the code
1. Clone or Reclone the repository. (Delete versions prior to 03/22/2022)

## Install packages
2. Run 
```npm i```
 in the root directory of the folder you cloned the repository to, and also run 
```npm i```
in the server directory. This installs packages for both the client and the server.

## Set Environment Variables
3. In the server directory, create a 
```.env```
 file (no name, just the extension), and put the following in it. 
```CONNECTION_URL=mongodb+srv://admin:admin@articles.bgojn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority```

## Run Server
4. In the server directory, run 
```npm start```

## Run Client
5. In another terminal, run 
```npm start```
 in the root directory
6. Wait for react to load your webpage and you're done!
