import React from 'react';
import BottomNavbar from './BottomNavbar';

function FooderProfile() {
    const page = 2
    return (<>
        <div>
            <h1>Hello Profile</h1>
        </div>
        <BottomNavbar onNav={page} />
    </>)
}

export default FooderProfile;
