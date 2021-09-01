import React from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';

const unityContent = new UnityContent({
    loaderUrl: 'WebDimensionEyeDEMO/Build/UnityLoader.js',
    dataUrl: 'WebDimensionEyeDEMO/Build/WebDimensionEyeDEMO.data.unityweb',
    frameworkUrl: 'WebDimensionEyeDEMO/Build/WebDimensionEyeDEMO.wasm.framework.unityweb',
    codeUrl: 'WebDimensionEyeDEMO/Build/WebDimensionEyeDEMO.wasm.code.unityweb',
  });

const DimensionEye = () => (
    
    <div id='/dimensioneye'>
        <Unity unityContent={unityContent}
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