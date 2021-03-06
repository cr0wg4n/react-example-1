import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Doctor from './reducers';
import DoctorFormContainer from './container/DoctorFormContainer'
import DoctorListContainer from './container/DoctorListContainer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const store = createStore(Doctor)

/*ReactDOM.render(<Provider store={store}>
        <DoctorFormContainer />
        <DoctorListContainer />
    </Provider>, document.getElementById('root'));*/
    ReactDOM.render(<Provider store={store}>
    <Router>
        <div>
            <Route path="/" exact component={DoctorListContainer} />
            <Route path="/crear/" component={DoctorFormContainer} />
            <Route path="/editar/:id" component={DoctorFormContainer} />
        </div>
        
    </Router>
    </Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
