import React from 'react'

require('bootstrap/dist/css/bootstrap.min.css')
require('font-awesome/css/font-awesome.min.css')
import '../template/custom.css'

import Menu from '../template/menu'
import Routes from './routes'


const App = props => (
    <div className="container">
        <Menu></Menu>
        <Routes></Routes>
    </div>
)
export default App