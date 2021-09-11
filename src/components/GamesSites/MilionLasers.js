import React from "react";
import Unity, { UnityContent } from 'react-unity-webgl';

const unityContent = new UnityContent({
    loaderUrl: './MilionLasers/Build/UnityLoader.js',
    dataUrl: './MilionLasers/Build/MilionLasers.data.unityweb',
    frameworkUrl: './MilionLasers/Build/MilionLasers.wasm.framework.unityweb',
    codeUrl: './MilionLasers/Build/MilionLasers.wasm.code.unityweb',
  });
  

const MilionLasers = () => (
    
    <div id='/milionlasers'>
        <Unity unityContent={unityContent}
        />
    </div>
);

export default MilionLasers;