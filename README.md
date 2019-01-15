# Apostrophe: The Front End

This React web app was deisgned to be the responsive front-end for its eponym Apostrophe, a digital publication library live at http://www.apostrophe.online. It can be used as a template for similarly-modeled projects. This repository welcomes contributions, so feel free to submit a pull request! 

## Contents

- [Libraries & Middleware](#libraries--middleware)
- [Installation](#installation)
- [Structure](#structure)
- [Components](#components)
- [User Accounts](#user-accounts)
- [Future Development](#future-development)

## Libraries & Middleware

Apostrophe was built using [create-react-app](https://github.com/facebook/create-react-app) and comes with the dependencies therein. [Redux](https://github.com/reduxjs/redux) is used for state management, and the file structure is arranged accordingly; see below. [Redux Thunk](https://github.com/reduxjs/redux-thunk) middelware manages fetch-request responses within actions. [React Transition Group](https://github.com/reactjs/react-transition-group) handles essential component transitions, including displaying the browse and log-in side panels. [React Masonry CSS](https://github.com/paulcollett/react-masonry-css) manages the display of publications on the home page. [React Router](https://github.com/ReactTraining/react-router) handles component rendering and navigation based on the URL/browse history. [Redux Form](https://github.com/erikras/redux-form) makes logging in and signing up much more simple and controlled. 

## Installation 

To get started with Apostrophe, fork this repository and clone it to your hard drive. CD into the folder and run ```npm install```. Once the dependencies have beene installed, you can run ```npm start``` to get your app running. Your locally-hosted version of the app, like the live version, will receive information from a Ruby on Rails backend hosted at apostrophe-back-end.herokuapp.com. For more information about how the back-end is structured, visit [this](https://github.com/critsmet/apostrophe-back-end) repository. 

## Structure

The top-level folder of Apostrophe includes a `public` folder, which holds the `index.html` file where the app is officially rendered by React, an `src` folder which holds the application itself, and then a few other files: the .gitignore, README, and package.json. 

The `src` folder includes one main folders: `components`, which organizes the bulk of the app's logic and content, and `store`, which organizes the Redux logic responsible for the app's state management. `index.js` handles how the app is mounted into the `index.html` file in the top-level folder. 

Each sub-folder in `components` is, *surprise*, divided into the main components of the app. Files within each sub-folder that end with the term 'Mod' contain the Redux logic for the respective component. The majority of fetch requests occur in here. Files that end with `Container` house the highest-level responsibilitty for each component, and demonstrate the context for which other sub-components might be rendered within. Sub-component files end with a descriptive tag of their responsibility. For instance: `NavSearch.js` is a component that is responsible for the search feature within the app, and is invoked inside `NavContainer.js`. 

## Components

Apostrophe is composed of six main components:

### app 

The `app` component houses the entire application. All other components will be rendered within this component. The corresponding .css file in the `app` folder rules all styling within the app. An informational page, `info.js`, is also stored within this folder. 

### browse

This component is responsible for the side-panel that appears when someone clicks `browse` in the nav component. Selecting a filter/category sends a string of the filter's name to the backend and tthe databse is queried based on the selected filter. The compent is designed to unmount when the user's mouse has moved outside of it. *This feature is not well suited to mobile devices and needs to be redone*

### nav

The `nav` component is responsible for the main navigation/component rendering within the app. It holds a special sub-component, `navSearch.js`, which is a search bar that is built right into the component itself. There is no submit button for the search bar. Instead, the component waits a few seconds after the user's final keystroke before sending the input to the backend to query the database. 

### pubs

`pbs` handles all visualization of publications within the app: from the grid on the homepage and the search/browse results to each individual publication page and the `PubStar` components that allow a user to favorite a publication when logged in. 

### user

The `user` component and its subcomponents are structured very similarly to `pubs` because components related to the user occupy similar space within the app as the components that handle publications. 

### userForm

This component handles user login and signup using Redux Form. A succesful login stores the user's plain id in the browser's localStorage, so it's absolutely not secure! 


## User Accounts

Users do not experience many obstacles regarding sign-up: there are no requirements or validations. After a user has logged in or signs up, they are able to upload profile images, edit bios, favorite publications, and follow other users. When a Publication is rendered, related publications in a section underneath the selected publication. These related publications are dependent on user likes in common by a gem in the backend. User images are stored in a Cloudinary account and handled by the backend. 

## Future Development

Some ideas for features to add in the future:

### Accepting Contributions Through A Form

For the sake of regulating what is saved to the database, there is no form available to contribute to the list of publications. Right now, the users are suggested in the `info` page to submit an e-mail to a given address with information regarding a publication that should be included. I'd like to create a modal form that generates an e-mail that I can approve from my inbox so that people can submit new publications more quickly. 

### Including Recent Article Headlines from Publications

Publication pages should dynamically update to include recent or all article titles from each publication's page, perhaps through a scraping mechanism. Users should also be able to save these as favorites. 
