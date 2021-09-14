import React from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';
import './GamesSites.scss';
import { VideoBackgroundDE } from './GamesSitesElements';
import Video from "../../videos/dimensionEye.mkv"

const unityContent = new UnityContent({
    loaderUrl: 'WebDimensionEyeDEMO/Build/UnityLoader.js',
    dataUrl: 'WebDimensionEyeDEMO/Build/WebDimensionEyeDEMO.data.unityweb',
    frameworkUrl: 'WebDimensionEyeDEMO/Build/WebDimensionEyeDEMO.wasm.framework.unityweb',
    codeUrl: 'WebDimensionEyeDEMO/Build/WebDimensionEyeDEMO.wasm.code.unityweb',
  });

  function refreshPage() {
    window.location.reload(false);
  }

const DimensionEye = () => (
    
    <div className="gamesIntro" id='/dimensioneye'>
      
        <h2 className="gamesTitle"> Dimension Eye </h2>
        <VideoBackgroundDE autoPlay loop muted src={Video} type='video/mkv' margin-top='-22px'/>
        <p className="gamesAbout"> Dimension Eye is a platformer game based on using eye power and the dexterity of the player :) </p>
        <h3 className="gamesOnMobile"> To play the game and to see all the stuff you have to display this site on your Computer :( </h3>
        <p className="gamesInstructions"> Instructions: <br/> 
        Moving: A-left & D-right <br/>
        Jumping: Space<br/>
        Shooting: Left-mouse click <br/>
        Special skills: Z <br/>
         </p>
        <button className="playbutton" onClick={refreshPage}>CLICK TO PLAY!</button>
        <br/>
        <br/>
        <br/>
        <p className="gamesAbout2"> Thanks for playing! <br/>
        
        </p>
        {/*<Unity unityContent={unityContent}
        />*/}
    </div>
);

export default DimensionEye;

/*

    loaderUrl: './WebDimensionEyeDEMO/Build/UnityLoader.js',
    dataUrl: './WebDimensionEyeDEMO/Build/WebDimensionEyeDEMO.data.unityweb',
    frameworkUrl: './WebDimensionEyeDEMO/Build/WebDimensionEyeDEMO.wasm.framework.unityweb',
    codeUrl: './WebDimensionEyeDEMO/Build/WebDimensionEyeDEMO.wasm.code.unityweb',
    */