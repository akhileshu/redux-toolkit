/*// myModule.js
const myDefaultExport = "This is the default export.";

const myNamedExport = "This is a named export.";

function myFunction() {
  return "This is a function from the module.";
}

export { myNamedExport, myFunction };
export default myDefaultExport;

// import
// main.js
import myCustomNameForDefaultExport, { myNamedExport, myFunction } from './myModule.js';

console.log(myCustomNameForDefaultExport); // Output: "This is the default export."
console.log(myNamedExport); // Output: "This is a named export."
console.log(myFunction()); // Output: "This is a function from the module."
*/



import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import accountReducer from  './slices/accountSlice'
import bonusReducer from  './slices/bonusSlice'

const store =configureStore ({  
  reducer:{
    // name : reducer
    account:accountReducer,
    bonus:bonusReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>
);