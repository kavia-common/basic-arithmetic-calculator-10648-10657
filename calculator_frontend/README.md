# Calculator Frontend - React Application

A minimalistic, responsive React-based calculator application with a light theme and modern design.

## Features

- **Numeric Keypad**: Full 0-9 number input with decimal point support
- **Basic Arithmetic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- **Clear/Reset**: Clear button (C) to reset all calculations
- **Intermediate Expression Display**: Shows ongoing calculations and results
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Light Theme**: Clean, modern interface with specified color palette
- **Centered Layout**: Calculator is perfectly centered with an elegant design

## Component Architecture

The calculator is built with a modular React component structure:

- **App.js**: Main application component with centered layout
- **Calculator.js**: Core calculator logic and state management
- **Display.js**: Shows current value and calculation expressions
- **Keypad.js**: Grid layout of all calculator buttons
- **Button.js**: Reusable button component with styling

## Color Palette

The application uses the following color scheme:
- **Primary**: #1976d2 (Blue - for operators and equals)
- **Secondary**: #424242 (Dark Gray - for display background and text)
- **Accent**: #ffb300 (Orange - for clear button)
- **Background**: Light gradient with white calculator body

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Usage

1. **Number Input**: Click any number (0-9) to input values
2. **Decimal Point**: Click "." to add decimal numbers
3. **Operations**: Click +, -, ×, or ÷ to perform calculations
4. **Equals**: Click "=" to get the final result
5. **Clear**: Click "C" to reset the calculator
6. **Expression Display**: View ongoing calculations in the top area of the display

## Responsive Design

The calculator automatically adapts to different screen sizes:
- **Desktop**: Full-size calculator with large buttons
- **Tablet**: Optimized button sizes and spacing
- **Mobile**: Compact layout that fits mobile screens
- **Small Screens**: Further reduced sizing for very small devices

## Technical Features

- Modern React functional components with hooks
- CSS Grid layout for precise button positioning
- CSS variables for consistent theming
- Responsive breakpoints for all device sizes
- Smooth animations and hover effects
- Proper semantic HTML and accessibility considerations

## Learn More

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
