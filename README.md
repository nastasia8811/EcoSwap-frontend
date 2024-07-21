# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# EcoSwap

## Project description

The website allows users to register for events, create their own events, edit, and delete them.
The main pages of the site include:

- Home page with event slider
- About Us page
- Events page
- Login and registration page

## User Access and Permissions

### Non-Authorized User:

- Non-authorized users can see the list of events.
- They cannot register for events without creating an account.
- They do not have the ability to create new events.

### Authorized User:

- On the event card, authorized users see a panel of buttons with available actions.
- Authorized users can register for any available events.
- Authorized users can create, delete, and edit their own events.

## Requirements

- Node.js v18.16.0
- Additional dependencies are described in `client/package.json`.
- Backend repo

### Steps to Run the Project with a Specific Node.js Version:

1. Ensure Node.js Version is Installed:
   If you haven't installed the required Node.js version yet, use the following command to install it
   `nvm install v18.16.0`

2. Activate the Desired Node.js Version:
   After installing the Node.js version, activate it with the following command:
   `nvm use`

This will configure the current terminal session to use the installed Node.js version.

## Available Scripts

### Frontend

1. Navigate to the `client` directory:
   `cd client`

2. Install dependencies:
   `npm install`

3. Start the development server:
   `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

4. Run tests:
   `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

5. Build the app for production:
   `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

6. Eject the app (optional):
   `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Serve the production build

1. Install `serve` globally if you haven't already:
   `npm install -g serve`

2. Build the app for production:
   `npm run build`

3. Serve the production build:
   `npx serve -s build`

The app will be served at:

- Local: `http://localhost:3000`
- Network: `http://192.168.0.177:3000`

The local address is copied to your clipboard automatically.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
