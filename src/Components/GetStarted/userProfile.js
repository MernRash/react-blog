import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import axios from "axios";
import { TextField } from "@mui/material";

function UserProfile(props) {
  const [userDetail,setUserDetail] = useState({fname:"",email:"",password:""});
  const navigate = useNavigate();

  const logOutClicked = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/", { replace: true });
  
    props.userSignedOut();
    // localStorage.setItem("token","")
    /* This will help in Reloading the Page */
    // window.location.reload(false);
  };
  



let token = localStorage.getItem("token")

useEffect(()=>{
  axios.get("https://node-blog-backend-app.herokuapp.com/api/v1/auth/user-details",config)
  .then((res)=>{
     console.log(res.data)

     console.log("token",token)

     setUserDetail({fname:res.data.data.docs.name,email:res.data.data.docs.email,password:res.data.data.docs.password})
  })
  
  .catch((err)=>console.log(err))
})

const config = {headers: {authorization: `Bearer ${token}` }}

/* const fetchDetail = ()=>{
  axios.get("https://node-blog-backend-app.herokuapp.com/api/v1/auth/user-details",config)
  .then((res)=>{
     console.log(res.data)

     console.log("token",token)

     setUserDetail({fname:res.data.data.docs.name,email:res.data.data.docs.email,password:res.data.data.docs.password})
  })
  
  .catch((err)=>console.log(err))
} */
// console.log(result)

  return (
    <>
      <div>
        <h1>User Profile</h1>
      </div>
      <div className="user-detail-box">
 <TextField
        id="outlined-name"
        label="Name"
        value={userDetail.fname}
        fullWidth
      />
      <TextField
        id="outlined-name"
        label="email"
        value={userDetail.email}
        fullWidth
      />
      <TextField
        id="outlined-name"
        label="password"
        type = "password"
        value={userDetail.password}
        fullWidth
      />
      </div>
     

      <br />
      <br />

<Button className="btn">Fetch</Button>
      <Link to="/get-started">
        <Button className="btn" onClick={logOutClicked}>
          Log Out
        </Button>{" "}
      </Link>
    </>
  );
}

const mapStateToProps = (state) => {
  
  return {
    state,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    userSignedOut: () => {
      const authSignOUT = localStorage.getItem("user");
      dispatch({ type: "logOut", data: authSignOUT });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToState)(UserProfile);
