import React from 'react';

//berisikan sebuah List yang mendeskripsikan sesuatu.

export default class Details extends React.Component {
    render() {
        const { items } = this.props;

        return(
            <>
            <ul className='home-detail'>
                {items.map(post =>
                    <li key={post.name}>
                        {post.name}:<br/>
                        {post.desc}
                    </li>
                )}
            </ul>
            <h2>
                And many more medieval stuff!
            </h2>
            </>
        )
    }
}