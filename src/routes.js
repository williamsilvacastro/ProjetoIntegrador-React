import React from "react"
import { Switch, Route} from "react-router-dom"

import Home from './pages/Home/Home'

import Dashboard from './pages/Dashboard/Dashboard'

export const Routes = () => {
    return (
        <Switch>
             <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home}/>
           
            <Route path="/dashboard" component={Dashboard}/>
           
        </Switch>
    )
}