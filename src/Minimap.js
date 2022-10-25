import React from 'react';
import styled from 'styled-components';

const MinimapWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 15vw;
    height: 100vh;
    background-color: red;
    z-index: 100;
`;

export function Minimap (){
    const frame = document.getElementById('frame');
    return (
        <iframe style={{position: 'fixed', left: '0', top: '0', height: '100vh'}} id="frame" title='mini' src={document.URL} />
    )
}

export default Minimap