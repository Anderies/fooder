import React from 'react';
import styles from '../../css/welcome.module.css';
import loginImage from '../../images/gambar-login.png';
import Button from '@mui/material/Button';
import AppBar from '../Appbar.jsx'
import { useNavigate } from "react-router-dom";

function Welcome() {

    const navigate = useNavigate();

    return <div>
        <AppBar />
        <div className='container mt-4'>
            <h1>Hello Welcome to <span className={`${styles.blue} ${styles.bold}`}>Fooder</span></h1>
            <h1>Record your daily intake meal</h1>
            <h1>with Fooder AI</h1>

            <div className='mt-4'>
                <img className={styles.loginImages} src={loginImage}>
                </img>
            </div>

            <div className='d-flex flex-column mt-4'>
                <Button onClick={() => navigate("/login")}
                    variant="contained" className={`${styles.pdButton} ${styles.buttonLogin}`}>Login</Button>
                <Button onClick={() => navigate("/signup")}
                    variant="outlined" className={`${styles.pdButton} ${styles.buttonSign} mt-3`}>SignUp</Button>
            </div>

        </div>

        {/* className={styles.} */}

    </div>;
}

export default Welcome;
