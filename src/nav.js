import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import FilterableProductTable from './pages/product';

export default function Nav() {
    return(
        <Router>
            <div className='navbar'>
                <h1 className='navhead'>
                    T-Workshop
                </h1>
                <img className='logo' src='https://i.pinimg.com/originals/ed/1c/6e/ed1c6ec431f5f0a6edfb108aab61b97f.png' alt='logo'></img>
                <ul>
                    <li><Link to='/' className='nav-link'>Home</Link></li>
                    <li><Link to='/contactUs' className='nav-link'>Contact Us</Link></li>
                    <li><Link to='/products' className='nav-link'>Products</Link></li>
                </ul>
            </div>

            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/contactUs'>
                    <Contact />
                </Route>
                <Route path='/products'>
                    <FilterableProductTable />
                </Route>
            </Switch>
        </Router>
    )
}