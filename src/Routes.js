import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from './App'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Blog from './pages/Blog'
import HowGoTo from './pages/HowGoTo'
import SavedProduct from './pages/SavedProduct'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ App }/>
                <Route path="/products" exact component={ Products }/>
                <Route path="/product/:id" exact component={ ProductDetail }/>
                <Route path="/blog" exact component={ Blog }/>
                <Route path="/how-can-i-go-to" exact component={ HowGoTo }/>
                <Route path="/saved-product" exact component={ SavedProduct }/>
            </Switch>
        </Router>
    )
}
