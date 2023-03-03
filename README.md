# React Typescript Music Video App

This is a simple React Typescript app that retrieves a JSON file via an HTTP request which contains a dataset of music videos. The app has a search field with two parts: one input for entering title and another field for selecting genre.

## Demo

https://react-music-video-app.netlify.app/

## Features

- Display list of music videos
- Filter by genre
- Search by title
- Responsive Design

## Built With

- React - A JavaScript library for building user interfaces.
- TypeScript - A strict syntactical superset of JavaScript.
- Tailwind CSS - A utility-first CSS framework.
- Axios - A promise-based HTTP Client for node.js and the browser.
- React-Toastify - A lightweight toast notification library.

## App Structure

- **src/hooks/useMusicVideos.ts:** Custom hook using Axios for retrieving the list of music videos.
- **src/models/customTypes.ts:** Interfaces used in the app.
- **src/App.tsx:** Main file for rendering the app.
- **src/components/MusicVideos.tsx:** Component for rendering the list of music videos.
- **src/components/Search.tsx:** Component for rendering the search form.

## Conclusion

This React Typescript music video app is a simple example of how to retrieve and display data from an external API, and how to implement a search form with filtering.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
