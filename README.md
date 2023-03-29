# Historical-Equity-Dashboard-App

This is a project that utilizes a Node.js and React application to establish a connection with the Metatrader5 platform and extract equity, balance, and market watch time data. The data is collected every minute and then stored in MongoDB using Mongoose. Following this, the data is retrieved from MongoDB and transmitted to React in real-time. This facilitates the creation of a live dashboard in React, which is presented in the form of a chart.

## Prerequisites

- Node.js
- Express
- Python
- MongoDB
- React

## Installation

1. Clone the repository
2. Install dependencies in the api and client directory: `npm install`
3. Start the client server: `npm start`
5. Start the api server: `npm start`
4. Open http://localhost:3000/ in your browser.
