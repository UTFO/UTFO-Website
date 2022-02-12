# UTFO-Website
A website for the University of Toronto Freelancers' Society.

# Acquiring the code
First, make sure you have Git installed. Look up how to do this on your type of machine (e.g. google "install git on windows").

We recommend using the Source Control tab in VSCode to clone this repository (`UTFO/UTFO-Website`). However, if you prefer the commandline:
```
git clone https://github.com/UTFO/UTFO-Website.git
```

# Build instructions
Before doing anything else, install the required dependencies:
```
npm install
```
This only needs to be done once, when you first clone the repository.

## Running a test server
```
npm start
```
This will open up a browser window that runs your local code. Modify your files and save them, and the browser will reload the changed code in realtime. (If that doesn't happen, refresh the browser.)

## Building for production
```
npm run build
```
This will create a `build` folder. Put these files into the webroot of a regular static webserver and the site will be served from there. If you don't know what any of that means, you probably won't be running this command.
