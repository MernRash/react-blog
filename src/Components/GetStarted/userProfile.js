import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

function UserProfile(props) {
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

  return (
    <>
      <div>
        <h1>User Profile</h1>
      </div>

      <br />
      <br />

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
