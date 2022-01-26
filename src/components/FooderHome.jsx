import React from 'react';
import imageScan from '../images/scan.svg';
import Button from '@mui/material/Button';
import stylesFooderHome from '../css/fooderhome.module.css'
import BottomNavbar from './BottomNavbar';
import { useNavigate } from 'react-router-dom';

function FooderHome() {
    const navigate = useNavigate();
    const page = 0;
    const buttonStyle = {
        fontSize: "12px",
        fontFamily: "poppins-reg",
        padding: "1.2rem 0",
        lineHeight: "1.6"
    }

    const navScan = async (id) => {
        navigate('/scan')
    }

    return <div className='container mt-4 d-flex flex-column'>
        <p>Hello Anderies, Welcome to <span className={stylesFooderHome.boldblue}>Fooder</span> </p>
        <p>Record Your daily intake meal</p>
        <p>with Fooder AI</p>
        <div className='d-flex mt-5 justify-content-center'>
            <img src={imageScan} />
        </div>

        <div className={`d-flex mt-5`}>
            <Button
                variant="contained" className={`w-50 mx-2`} style={buttonStyle} onClick={navScan}>Scan Your Food<br />with Machine</Button>

            <Button
                variant="contained" className={`w-50 mx-2`} style={buttonStyle}>Scan Your Food<br />with App</Button>
        </div>
        <div className='mt-2' style={{ marginLeft: "1.3%" }}>
            <p style={{ fontSize: "12px", fontFamily: "poppins" }}>*Access camera bardcode required</p>
        </div>

        <BottomNavbar onNav={page} />
    </div>;


}

export default FooderHome;
