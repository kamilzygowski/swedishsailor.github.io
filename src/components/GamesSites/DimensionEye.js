import React from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
    loaderUrl: 'WebDimensionEyeDEMO/Build/UnityLoader.js',
    dataUrl: 'WebDimensionEyeDEMO/Build/WebDimensionEyeDEMO.data.unityweb',
    frameworkUrl: 'WebDimensionEyeDEMO/Build/WebDimensionEyeDEMO.wasm.framework.unityweb',
    codeUrl: 'WebDimensionEyeDEMO/Build/WebDimensionEyeDEMO.wasm.code.unityweb',
  });

const DimensionEye = () => (
    
    <div id='/dimensioneye'>
        <Unity unityContext={unityContext}
 />
    </div>
);

export default DimensionEye;

/*

    loaderUrl: './WebDimensionEyeDEMO/Build/UnityLoader.js',
    dataUrl: './WebDimensionEyeDEMO/Build/WebDimensionEyeDEMO.data.unityweb',
    frameworkUrl: './WebDimensionEyeDEMO/Build/WebDimensionEyeDEMO.wasm.framework.unityweb',
    codeUrl: './WebDimensionEyeDEMO/Build/WebDimensionEyeDEMO.wasm.code.unityweb',
    */