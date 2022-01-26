import React from 'react';


function Appbar() {
    var myBar = {
        backgroundColor: '#650FE7', 
        height: '60px', 
        color: 'white', 
        display: 'flex',
        padding: '0 3%'
    }
    return <div style={myBar}>
        <p style={{ alignSelf: 'center', fontFamily: 'poppins-bold', fontSize: '18px' }}>Fooder</p>
    </div>;
}



export default Appbar;
