import React, { useState } from 'react';
import Details from './details';

// Dalam file JS ini, terdapat code-code yang digunakan untuk mengatur interface pada halaman Home.

function Illustration() {
    let [desc, setDesc] = useState(''); // ini adalah useState menggunakan Hooks

    return(
        <div>
            <p>Click these buttons below to see illustration of the medieval stuff!</p>
            <button onClick={() => setDesc(desc = <img 
                src='https://icon-library.com/images/sword-icon/sword-icon-11.jpg' 
                alt='sword-icon'
                width='200px'/>)}>
                Sword
            </button>
            <button onClick={() => setDesc(desc = <img 
                src='https://static.thenounproject.com/png/313343-200.png' 
                alt='spear-icon'
                width='200px'/>)}>
                Spear
            </button>
            <button onClick={() => setDesc(desc = <img 
                src='https://cdn2.iconfinder.com/data/icons/e-commerce-glyph-2/614/25_-_Shield-512.png' 
                alt='shield-icon'
                width='200px'/>)}>
                Shield
            </button>
            <button onClick={() => setDesc(desc = <img 
                src='https://cdn1.iconfinder.com/data/icons/arms-and-armor/100/25-512.png' 
                alt='armor-icon'
                width='200px'/>)}>
                Armor
            </button>
            <p>{desc}</p>
        </div>
    )
}


export default function Home() {
    return(
        <div className='home'>
            <h2>
                This is Home Page.
            </h2>
            <h3>
                Welcome to this page, Sire!
            </h3>
            <p>
                Do you like medieval stuffs? We got it!
                Enjoy your time here with us! <br/>
                We provide the best weapons, armors, and other medieval stuff, feel free to request for new items.
            </p>
            <div className='home-desc'>
                <h2>
                    The stuff currently in our possession:
                </h2>
                <Details items={[   /* Code berikut diambil dari Details, yang berisikan LIST deskripsi item-item */
                    {name:'Sword', desc:'A melee weapon that are used mainly for side-arms, nobility often decorate their personal swords to fit their noble status'},
                    {name:'Spear', desc:'Long-range melee weapon, perfect to use against cavalry and to hold enemy back. Majority of low ranked foot soldiers are wielding this weapon.'},
                    {name:'Shield', desc:'A defensive tools made to protect its wielder.'},
                    {name:'Armor', desc:'Basically the things medieval knight wears. Plates, leathers, chainmails, you name it! All made to protect their body.'} 
                    ]}/>
                <Illustration /> {/* Code Illustration ini menampilkan ilustrasi gambar yang ditampilkan dengan bantuan Hooks */}
            </div>
        </div>
    )
}