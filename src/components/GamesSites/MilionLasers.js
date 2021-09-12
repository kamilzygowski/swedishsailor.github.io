import React from "react";
import Unity, { UnityContent } from 'react-unity-webgl';
import './GamesSites.scss';

const unityContent = new UnityContent({
    loaderUrl: './MilionLasers/Build/UnityLoader.js',
    dataUrl: './MilionLasers/Build/MilionLasers.data.unityweb',
    frameworkUrl: './MilionLasers/Build/MilionLasers.wasm.framework.unityweb',
    codeUrl: './MilionLasers/Build/MilionLasers.wasm.code.unityweb',
  });

  function refreshPage() {
    window.location.reload(false);
  }
  

const MilionLasers = () => (
    
    
    <div className="gamesIntro" id='/milionlasers'>
        <h2 className="gamesTitle"> Milion Lasers </h2>
        {/*<img src="https://i.postimg.cc/s2r6PX85/ml1.png" className="gamesImg1"></img>*/}

        <h3 className="gamesOnMobile"> To play the game and to see all the stuff you have to display this site on your Computer :( </h3>

        <p className="gamesAbout"> Milion laser is a game made in one week for Brackey's Game Jam 2021.1, ask someone for hot-seat! There are instructions below :)</p>
        <p className="gamesInstructions"> Instructions: <br/> 
        Moving for both players: Left - WASD, Right - ARROWS <br/>
        all you have to do is to avoid all obstacles such as lasers, space rocks, enemies bullets etc. Also collect as much coins as you can :)
         </p>

        <button className="playbutton" onClick={refreshPage}>CLICK TO PLAY!</button>
        <br/>
        <br/>
        <br/>
        <p className="gamesAbout"> Thanks for playing! <br/>
        <br/>
         
         </p>
        {/*<Unity unityContent={unityContent}
        />*/}
    </div>
);

export default MilionLasers;