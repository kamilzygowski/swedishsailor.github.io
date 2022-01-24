import React from 'react';
import './Footer.scss';

class Footer extends React.Component{
    render(){
        let today = new Date();
        return(
            <section className="footer">
                <br/>
                <p className="footerText">@{today.getFullYear()} SwedishSailor - Kamil Żygowski</p>
            </section>
        )
    }
} export default Footer;