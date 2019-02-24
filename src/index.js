import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router
} from 'react-router-dom'
import App from './components/app/App'

import './index.css'
import 'materialize-css/dist/css/materialize.min.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
        <App />
    </Router>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
