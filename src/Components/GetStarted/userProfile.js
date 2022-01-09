import React from "react";

import {Link} from 'react-router-dom'

function UserProfile(){

    const logOutClicked = () =>{
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        // localStorage.setItem("token","")
        /* This will help in Reloading the Page */
        // window.location.reload(false);
    }

    return(
        <>
        <div>
            <h1>User Profile</h1>
        </div>

        <br />
        <br />

        <Link to="/get-started"><button onClick={logOutClicked}>Log Out</button> </Link>
        </>
    )
}

export default UserProfile;