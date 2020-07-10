import React, {useContext} from 'react';
import { ExtraContext } from './ex-context';

export default function ExPage() {
    const {theme, changeTheme} = useContext(ExtraContext);

    return(
        <>
        <div className='extras' style={{
            background:
                theme === 'light' ? 'white' : 'black',
            color:
                theme === 'light' ? 'black' : 'white'
        }}>
            <em>"Twinkle twinkle"</em><br/>
            "Desperate situation, desperate solution"
            <button onClick={changeTheme}>Click to Relax</button>
        </div>
        </>
    )
}