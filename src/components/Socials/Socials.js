import React from 'react';
import styles from './Socials.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

class Socials extends React.Component{
    render(){
        return(
            <section className={styles.socials}>
                <FontAwesomeIcon icon={faAngleDown} className={styles.expandArrow} rotation={270} onClick={this.expand} id="icon"/>
                <div className={styles.belt} id="belt">

                </div>

            </section>
        )
    }

    expand = () => {
        document.getElementById("belt").classList.toggle("expand");
        document.getElementById("icon").classList.toggle("expandMove");
        console.log('xd');
    }

}export default Socials;