import React from 'react';
import {ExtraContext} from './extra-stuff/ex-context';
import ExComp from './extra-stuff/ex-comp';

//halaman 'EXTRA' yang berisikan sebuah tombol yang dapat mengganti warna latar

export default class Extras extends React.Component {
    constructor() {
        super();
        this.changeTheme = () => {
            this.setState(prevState => ({
                theme: prevState.theme === 'light' ? 'black' : 'light'
            }))
        }
        this.state = {
            theme: 'light',
            changeTheme: this.changeTheme
        }
    }
    render() {
        return(
            <>            
            <ExtraContext.Provider value={this.state}>
                <ExComp />
            </ExtraContext.Provider>
            <div id='stars'>
                <div className='ex-star1'></div>
                <div className='ex-star2'></div>
                <div className='ex-star3'></div>
                <div className='ex-star4'></div>
            </div>
            </>
        )
    }
}