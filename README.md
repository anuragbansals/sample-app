This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

# Application walkthrough

 __NOTE__: This is a very basic application created for demonstration purposes. Enhancements such as adding icons, additional screens, more functionalities, and improved UI can significantly increase the application's functionality and visual appeal.

## Products Screen
### Features
- The main products screen displays a list of products in a grid format.
- Users can toggle the view of the product listing by pressing the Switch to List View button located at the top of the screen.

### Technology Stack
- __TypeScript__: Utilized for improved type checking and ensuring better code quality.
- __Redux Toolkit__: Used to manage application state effectively.
- __Thunk Middleware__: Handles side effects such as API calls.

### Data Handling
- The product data is fetched using a dummy API for demonstration purposes.

### Folder Structure

- The application follows the atomic design folder structure:

    - __Atoms__: Smallest, most basic components (e.g., buttons, input fields).

    - __Molecules__: Slightly larger components composed of multiple atoms (e.g., product cards).

    - __Organisms__: Complex components made up of molecules and atoms, representing significant sections of the UI (e.g., product grids or lists).

This modular structure enhances code reusability, maintainability, and scalability.

