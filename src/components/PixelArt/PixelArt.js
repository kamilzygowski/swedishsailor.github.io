import React from 'react';
import './PixelArt.scss';
import { Carousel } from 'react-responsive-carousel';
import carouselStyles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class PixelArt extends React.Component {
    render() {
        return (
            <section className="pixelArt" id="/pixelart">
                <div className="pixelArtContainer">
                    <br />
                    <br />
                    <br />
                    <h1 className="pixelartHeader"> PIXEL ART </h1>
                    <br />
                    <Carousel showArrows={true} className={carouselStyles + "carousel"}  swipeable={true} autoPlay={3500} infiniteLoop={true}>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/85MGX7Ln/de-coin.gif" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/fLBCNK73/kraczek1.png" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/43Hc7nM1/lampa.gif" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/zBywpMh5/kamien.png" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/3JfwsSWH/north-sorc.gif" alt=""></img> 
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/SNbSWcz9/crate-v1.png" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/K86zWfqn/sd-tp.gif" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/QM0gDcHz/wooden-sqm-v1.png" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/Yqp78q0b/jackgif.gif" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/DwHJTnZ4/mana-fluid1.png" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/65V9zTdm/doors.gif" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/W1n1ptzk/depo-sqm1.png" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/X7DXf491/sd-poison-Shape.gif" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/RhZVtDhz/sd-dog.gif" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/C1snVqJ2/deathforce.gif" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/QxZr17dw/kamyczki.png" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/rF5pbfLg/gora-trawka.png" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/NMvFNKF9/treasure.gif" alt=""></img> 
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/J01nLSbR/south-old-sorc.gif" alt=""></img> 
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/c4DtFQGm/lampkanascienna.gif" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/h4sXG9vB/sd-dead-Sorc.gif" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/N0RMvXSZ/trawka2.png" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/mk2VdqzB/DE-Brick-Spikes4.png" alt=""></img>
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/D0gS472W/Space-Rock-3.png" alt=""></img> 
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/jdxw0nXy/floating-Enemy.gif" alt=""></img> 
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/Y900PqsN/bullet.gif" alt=""></img> 
                        </div>
                        <div className="carouselDiv">
                            <img className="carouselImg" src="https://i.postimg.cc/bv3dL23N/wodade.gif" alt=""></img> 
                        </div>

                    </Carousel>
                </div>
            </section>
        )
    }
} export default PixelArt;
