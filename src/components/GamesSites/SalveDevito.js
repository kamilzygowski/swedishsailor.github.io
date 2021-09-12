import React from "react";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";

const SalveDevito = () => (
    <div className="gamesIntro" id='/salvedevito'>
                <h2 className="gamesTitle"> SalveDevito </h2>
        <p className="gamesAbout"> Salve Devito is an isometric online rpg game, where you can choose what to do from huge variety of activities.</p>
        <h3 className="gamesOnMobile"> To play the game and to see all the stuff you have to display this site on your Computer :( </h3>
        <br/>
        <br/>
        <div className="imgTextWrapper">
        <img className="gamesImg1" src="https://i.postimg.cc/N011YwK1/sddp.png"></img>
        <p className="imgDesc1"> Here on the left image you can see the main temple of Salve Devito in city Lapide, where every player is respawning. <br/> Also you can notice dead body 
        at the entrance, guess what happened  {'>'}:) </p>
        </div>
        <div className="imgTextWrapper">
        <p className="imgDesc1"> On the right image is how our game looks like in unity engine. <br/> The engine is a place where the "magic" happens and where our creativity
        is leaking out! </p>
        <img className="gamesImg2" src="https://i.postimg.cc/vB0xH8b6/salvedevito2.png"></img>
        </div>
        <YoutubeEmbed className="ytVid" embedId="MDehYzvmEj0" />
    </div>
);

export default SalveDevito;