import React from 'react';
import './ContactMe.scss';

class ContactMe extends React.Component{
    render(){
        return(
            <section className="contactMeSectiom" id="/contact">
                <h2 className="headerContact">CONTACT ME</h2>
                <form className="form" action="https://formsubmit.co/kzygowski7@gmail.com" method="POST">
                    <input type='text' name='name' className="input" placeholder='Your name' required></input>
                    <input type='email' name='email' className="input" placeholder='Your email' required></input>
                    {/*<input type='tel' className="input" placeholder='Your phone'></input>*/}
                    <textarea className="textarea" name='text' placeholder='Your message' required></textarea>
                    <input type='submit' className="submit" value='Submit'></input>
                </form>
                
            </section>
        )
    }
} export default ContactMe;