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
import Extras from './pages/extra';

// menampilkan keseluruhan navigasi pada page.

export default function Nav() {
    return(
        <Router>
            <div className='navbar'>
                <h1 className='navhead'>
                    AshenShop
                </h1>
                <img className='logo' src='https://i.pinimg.com/originals/ed/1c/6e/ed1c6ec431f5f0a6edfb108aab61b97f.png' alt='logo'></img>

                {/* Tombol navigasi untuk berpindah halaman web */}
                <ul>
                    <li><Link to='/' className='nav-link'>Home</Link></li> 
                    <li><Link to='/contactUs' className='nav-link'>Contact Us</Link></li>
                    <li><Link to='/products' className='nav-link'>Products</Link></li>
                    <li><Link to='/extras' className='nav-link'>EXTRA</Link></li>
                </ul>
            </div>

            {/* Switch mengatur route yang ada dalam setiap navigasinya */}
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
                <Route path='/extras'>
                    <Extras />
                </Route>
            </Switch>
        </Router>
    )
}