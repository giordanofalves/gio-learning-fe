# Welcome to the Kubicle Take Home Assignment - React Frontend

## Introduction

Thank you for taking the time to attempt the Kubicle take home assignment. To help you get up and running quickly we have provided a basic frontend application which you can expand as part of the assignment. 

This is the **React** version of frontend.

## Running

Make sure you have NodeJs installed. If you don't we recommend using [Node Version Manager](https://github.com/nvm-sh/nvm) to install and manage your NodeJs installs.

Once you have NodeJs installed and you have cloned this repo, run 

```
npm install
```

in the repo directory to install all relevant Node modules. Once this has been completed you can start the React development server by running

```
PORT=3001 npm start
```

Run your frontend development server off port `3001` as port `3000` will be taken by your backend server.

Once you have this running you should be able to go to `http://localhost:3001` to see the example Kubicle app. If your backend server is not running you won't will probably get errors though as it won't find the expected data. You can start your choosen backend server to get the application working end to end.

## Components and Styling

The Kubicle React Frontend uses [Material UI](https://mui.com) as an off the shelf component library. This allows for rapid development. It also uses an off the shelf open source video player [VideoJS](https://videojs.com/)