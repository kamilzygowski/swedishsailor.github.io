import React from "react";

function refreshPage() {
    window.location.reload(false);
  }

const Type = () => (
    <div className="gamesIntro2" id='/type'>
        <h2 className="gamesTitle"> Type Game </h2>
        <p className="gamesAbout"> Let's test your dexterity</p>
        
        <h3 className="gamesOnMobile"> To play the game and to see all the stuff you have to display this site on your Computer :( </h3>


{/*<button className="playbutton" onClick={refreshPage}>CLICK TO PLAY!</button>*/}
<br/>
<br/>
<br/>
{/*<p className="gamesAbout"> Let's take a look! :)</p>*/}
<button className="playbutton" onClick={refreshPage}>CLICK TO PLAY!</button>
    </div>
);

export default Type;