import React from 'react';
import fbIcon from './icons/fb-icon.png';
import twIcon from './icons/tw-icon.png';
import igIcon from './icons/ig-icon.png';

// Bagian footer website menyimpan berbagai informasi tambahan seperti media sosial dan copyrights.

export default function Footer() {
    return(
        <footer className='footer'>
            <div className='footer-links'>
                <a href='https://www.facebook.com/felzanova'><img src={fbIcon} alt='fb-icon' /></a>
                <a href='https://twitter.com/tiikall'><img src={twIcon} alt='tw-icon' /></a>
                <a href='https://www.instagram.com/ashencowl/'><img src={igIcon} alt='ig-icon' /></a>
            </div>
            <p>Site made by Fauzan Tikal for study purposes.</p>
        </footer>
    )
}