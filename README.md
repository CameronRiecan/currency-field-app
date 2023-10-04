
# Currency Field App

This simple React application showcases the logic behind creating a dynamic input field for currency values. It allows users to input a number, and the app validates it against minimum and maximum values while providing instant feedback.

## Features

- Users can input numeric values.
- The app enforces a minimum value of 100 and a maximum value of 1 million.
- It displays feedback messages based on user input:
  - "Good job!" for valid values.
  - "The minimum is 100. The maximum is 1 million. Try Again!" for values outside the specified range.
- It shows a timer message that appears one second after the user has entered their digits.

## How It Works

The application uses React to create a dynamic input field. Here's a breakdown of how it operates:

1. The user enters a numeric value into the input field.
2. The `updateField` function is triggered by the `onChange` event.
3. The entered value is checked against the specified conditions:
   - It must be greater than or equal to 100.
   - It must be less than or equal to 1 million.
   - It must have a length of at least 3 characters.
4. If the input meets these conditions, a "Good job!" message is displayed, and a timer is set to call an API (placeholder function) after one second.
5. If the input does not meet the conditions, an error message is displayed.

### Please Note

- The actual API call should replace the timer function to demonstrate dynamic behavior effectively.
- The app does not automatically set the input value to the minimum when the user starts typing, allowing users to correct their input without interruption.

## How to Use

1. Clone this repository to your local machine.
2. Run `npm install` to install the necessary dependencies.
3. Start the app with `npm start`.
4. Open the app in your browser and enter numeric values in the input field to see how it responds.

Feel free to modify and enhance this app to suit your needs or to integrate it into a larger project.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
