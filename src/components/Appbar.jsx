import React from 'react';


function Appbar() {
    var myBar = {
        backgroundColor: '#650FE7', 
        height: '50px', 
        color: 'white', 
        fontFamily: 'poppins-bold', 
        display: 'flex',
        padding: '0 3%'
    }
    return <div style={myBar}>
        <p style={{ alignSelf: 'center', }}>Fooder</p>
    </div>;
}



export default Appbar;
