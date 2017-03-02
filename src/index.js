import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './js/routing/routes'
import App from './js/app'
import './style/main.css'


ReactDOM.render(
    <Routes/>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept(Routes, () => {
        const NewApp = require('./js/routing/routes')
        render(<NewApp />, document.getElementById('root'));
    })
}
