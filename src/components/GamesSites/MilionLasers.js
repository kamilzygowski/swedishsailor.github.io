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
        <p class="gamesAbout"> Milion laser is a game</p>
        <button className="playbutton" onClick={refreshPage}>CLICK TO PLAY!</button>
        {/*<Unity unityContent={unityContent}
        />*/}
    </div>
);

export default MilionLasers;