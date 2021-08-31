import React from 'react';
import './AboutMe.scss';
import img from '../../images/heinc.jpg';

class AboutMe extends React.Component {
    render() {
        return (
            <section className="about" id="/aboutme">
                <p className="descriptionAboutMe"> Greetings my friend! My name is Kamil, I am 23 years old psychologist, frontend developer living in Gdańsk, Poland. 
                <br/><span className="loveText"> I  love </span>:  
                    <span className="jugglingText"> juggling </span>
                    , 
                    <span className="pixelartText"> making PixelArt-style graphics </span>
                    , 
                    <span className="perceptionText"> learning about human perception </span> 
                    , 
                    <span className="animeText"> watching anime </span>
                    , 
                    <span className="codingText"> coding </span>
                    and of course both 
                    <span className="gamesText"> playing </span> and 
                    <span className="gamesText"> making computer games!</span> </p>
                <img className="photo" alt="" src={img}/>
            </section>

        );
    }
}

export default AboutMe;