import React from "react";
import Unity, { UnityContent } from 'react-unity-webgl';

const unityContent = new UnityContent({
    loaderUrl: 'WebMilionLasers/Build/UnityLoader.js',
    dataUrl: 'WebMilionLasers/Build/WebGL.data.unityweb',
    frameworkUrl: 'WebMilionLasers/Build/WebGL.wasm.framework.unityweb',
    codeUrl: 'WebMilionLasers/Build/WebGL.wasm.code.unityweb',
  });

const MilionLasers = () => (
    <div id='/milionlasers'>
        <Unity unityContent={unityContent}
        />
    </div>
);

export default MilionLasers;