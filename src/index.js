import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import employeeStore from './Stores/EmployeeStore' ;
import {Provider} from 'react-redux';

//employeeStore.dispatch({ // Change State By Store
//    type:"ADD", 
//    payload:15000
//});
//
//employeeStore.dispatch({
//    type:"SetName",
//    payload:"SuperOaT"
//});
//
//employeeStore.dispatch({ // Change State By Store
//    type:"SetAge", 
//    payload:18
//});

// Set Property ของ Provider : store
ReactDOM.render(
    <Provider store={employeeStore}>  
        <App />
    </Provider>
    , document.getElementById('root')
 );
 
 serviceWorker.unregister();