import React from 'react';
import AppBar from '../Appbar.jsx'
import stylesLogin from '../../css/signup.module.css';
import stylesWelcome from '../../css/welcome.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
// import DateAdapter from '@mui/lab/AdapterMoment';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        width: '100%'
    },
});

function SignUp() {
    const [value, setValue] = React.useState(null);
    const classes = useStyles();
    return <>
        <AppBar />
        <div className='container'>
            <h1 className={stylesLogin.fooder}>Fooder</h1>
            <div className='mt-2'>
                <p>Needs Your Information</p>
                <p>to Maintain your <span className={stylesLogin.blue}>Daily Intake Meal</span></p>
            </div>


            <div className='w-100'>
                <TextField id="outlined-basic" label="Email" variant="outlined" className="w-100 mt-4" />
                <TextField id="outlined-basic" label="Password" variant="outlined" className="w-100 mt-3" />
                <div className='w-100 mt-3'>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>

                        <DatePicker
                            fullWidth
                            style={`width:100%`}
                            label="Birthday"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />


                    </LocalizationProvider>
                </div>

                <TextField id="outlined-basic" type="number" label="Height" variant="outlined" className="w-100 mt-3" />
                <TextField id="outlined-basic" type="number" label="Weight" variant="outlined" className="w-100 mt-3" />
                <Button
                    variant="contained" className={`${stylesWelcome.pdButton} ${stylesWelcome.buttonLogin} mt-4 w-100`}>SignUp</Button>
            </div>
        </div>

    </>;
}

export default SignUp;
