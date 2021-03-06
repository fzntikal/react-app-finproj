import React from 'react';

//Halaman Contact Us yang berisikan berbagai form.

export default class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            name:'',
            email: '',
            message: '',
            checkbox: false
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        alert(
            `These are your inputs for us:
            name: ${this.state.name}
            email: ${this.state.email}
            message: "${this.state.message}"
            subscribe: ${this.state.checkbox}`)
    }
    onChange = (e) => {
        const { name, value} = e.target;
        this.setState({[name]: value})
    }
    onCheck = (e) => {
        const {name} = e.target;
        this.setState(prevState => ({ [name] : !prevState.checkbox }) )
    }

    render() {
        const { name, email, message, checkbox} = this.state;

        return(
            <div className='contact'>
                <form onSubmit={this.onSubmit} className='contactForm'>
                    <h3> Here, we can share informations! </h3>
                    <h4>You can also purchase our stuff through here</h4>
                    <p>It's not much for now, but feel free to express yourself to us by filling these forms, have a good day! To purchase, please fill the "Message" with the item(s) you wish to buy.</p>
                    <label>
                        Name: <br/>
                        <input id='name' name='name' type='text' placeholder='your name...' value={name} onChange={this.onChange} />
                    </label>
                    <label>
                        Email: <br/>
                        <input id='email' name='email' type='email' placeholder='aaabbb123@gmail.com' value={email} onChange={this.onChange} />
                    </label>
                    <label>
                        Message: <br/>
                        <textarea id='message' name='message' placeholder="What's on your mind?" value={message} onChange={this.onChange} />
                    </label>
                    <label>
                        Do you want to receive weekly news from us?
                        <input id='checkbox' name='checkbox' type='checkbox' value={checkbox} checked={checkbox} onChange={this.onCheck} />
                    </label>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}