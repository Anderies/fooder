import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { AiOutlineHome } from "react-icons/ai";
import { GiMeal } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

function BottomNavbar({ onNav }) {
    const [value, setValue] = React.useState(onNav);
    const navigate = useNavigate();
    console.log("onNav ===>", onNav);
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <Box sx={{ width: "100vw" }}>
                <BottomNavigation
                    showLabels
                    value={value}

                    onChange={(event, newValue) => {
                        setValue(newValue);
                        console.log("value,===>", value)
                        // console.log(newValue)
                        if (newValue == 0) {
                            navigate('/home')
                        } else if (newValue == 1) {
                            navigate('/meal')
                        } else {
                            navigate('/profile')
                        }
                    }}
                >
                    {/* icon={<RestoreIcon />} */}
                    <BottomNavigationAction label="Home" icon={<AiOutlineHome size={60} />} />
                    <BottomNavigationAction label="Meal" icon={<GiMeal size={60} />} />
                    <BottomNavigationAction label="Profile" icon={<CgProfile size={60} />} />
                </BottomNavigation>
            </Box>
        </Paper>

    )
}

export default BottomNavbar;
