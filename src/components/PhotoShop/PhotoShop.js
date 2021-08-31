import React from 'react';
import styles from './PhotoShop.scss';
import {Carousel} from 'react-responsive-carousel';

class PhotoShop extends React.Component {
    render(){
        return(
            <section className={styles.ps}>
                <Carousel>
                    <div className={styles.carouselDiv}>
                        <img className={styles.carouselImg} src="https://i.postimg.cc/rytZkFL9/Night-Sky.png"></img>
                    </div>
                </Carousel>
            </section>
        )
    }

} export default PhotoShop;