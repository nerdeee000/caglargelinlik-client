import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from './App'
import Products from './pages/Products'
import Album from './pages/Album'
import Blog from './pages/Blog'
import HowGoTo from './pages/HowGoTo'
import Support from './pages/Support'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ App }/>
                <Route path="/products" exact component={ Products }/>
                <Route path="/album" exact component={ Album }/>
                <Route path="/blog" exact component={ Blog }/>
                <Route path="/how-can-i-go-to" exact component={ HowGoTo }/>
                <Route path="/support" exact component={ Support }/>
            </Switch>
        </Router>
    )
}
