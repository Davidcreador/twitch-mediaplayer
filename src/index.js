import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/bulma.css'
import './assets/css/font-awesome.css'
import './assets/css/simple-line-icons.css'
import './index.css'
import App from './Containers/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
