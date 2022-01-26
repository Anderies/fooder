import React from 'react';
import AppBar from '../Appbar.jsx'
import stylesSignUp from '../../css/signup.module.css';
import stylesLogin from '../../css/login.module.css';
import campaignOne from '../../images/1.jpg';
import campaignTwo from '../../images/2.jfif';
import campaignThree from '../../images/3.jpeg';
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import stylesWelcome from '../../css/welcome.module.css';

function Login() {
    return <div>
        <AppBar />
        <div className='container'>
            <h1 className={`${stylesSignUp.fooder}`}>Fooder</h1>
            <div className='mt-2'>
                <p>Start Your Day with <span className={stylesLogin.blue}>Fooder AI</span></p>
                {/* onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} */}
                <Carousel className="carousel-style"
                    showThumbs={false} autoPlay={true} infiniteLoop={true} className={`mt-3 ${stylesLogin.carouselEdit}`}>
                    <div>
                        <img src={campaignOne} />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <img src={campaignTwo} />
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div>
                        <img src={campaignThree} />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                </Carousel>
                <div className='w-100'>
                    <TextField id="outlined-basic" label="Email" variant="outlined" className="w-100 mt-3" />
                    <TextField id="outlined-basic" label="Password" variant="outlined" className="w-100 mt-3" />

                    <Button
                        variant="contained" className={`${stylesWelcome.pdButton} ${stylesWelcome.buttonLogin} w-100 mt-4`}>Login</Button>
                </div>
        
            </div>
        </div>
    </div>;
}

export default Login;
