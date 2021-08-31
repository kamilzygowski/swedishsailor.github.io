import React from 'react';
import styled from 'styled-components';
import './Header.scss';
import { VideoBackground, HeroContainer, HeroBackground} from './HeaderElements';
import Video from '../../videos/aurora.mp4';



class Header extends React.Component{
    render(){
        return(
            <section className="header" id="/">
                {/*<HeroContainer>
                    <HeroBackground>*/}
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
                <br/>
                <h1 className="mainHeader"> SwedishSailor</h1>
                <h3 className="nameHeader">Kamil Żygowski</h3>
                    {/*</HeroBackground>
                    </HeroContainer>*/}
                    
            </section> 
        )
    }

}export default Header;