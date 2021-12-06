import React, {useState} from 'react';
import './Home.scss';
import Header from '../Header/Header';
import Games from '../Games/Games';
import PixelArt from '../PixelArt/PixelArt';
import PhotoShop from '../PhotoShop/PhotoShop';
import Footer from '../Footer/Footer';
import ContactMe from '../ContactMe/CotactMe';
import Socials from '../Socials/Socials';
import Sidebar from '../Sidebar/Sidebar';
import PageNav from '../PageNav/PageNav';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';



const Home = () => {
    
        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => {
            setIsOpen(!isOpen)
        };
        return (

            <main className="mainApp">
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <PageNav toggle={toggle}/>
                <div className="image">
                    <Header></Header>
                    <AboutMe></AboutMe>
                    {/*<img className="gameImg} src="https://i.postimg.cc/SK9yPQrZ/games.png"></img>*/}
                    <PixelArt className="PixelArt"></PixelArt>
                    
                    <Games className="Games"></Games>
                    {/*<div className={styles.hoverable}><div className={styles.first}></div><div className={styles.second}></div><div className={styles.third}></div><div className={styles.fourth}></div></div>
                    <div className={styles.extend}></div>*/}
                    <div className="bigger"></div>
                    {/*<Projects/>*/}
                    <ContactMe></ContactMe>
                    <Footer></Footer>
                </div>
            </main>
        );
    }

export default Home;