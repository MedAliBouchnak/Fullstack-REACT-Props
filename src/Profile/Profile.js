import React from "react";
import PropTypes from "prop-types";
import profileDefault from "../Photo2.jpg";
const Profile = ({ fullName, Bio, profession, children, alertMe }) => {
  
  return (
    <div
      style={{
        margin: 20,
        padding: "20 0 20 0",
        borderRadius: 10,
        display: "flex",
        gap: 20,
      }}
    >
      <div>{children}</div>
      <div
        style={{
          margin: 20,
          padding: "20 0 20 0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            textAlign: "justify",
            fontFamily: "wotfardRegularWebfont",
            fontWeight: "600",
            fontSize: "3.4rem",
            marginBottom: 10,
          }}
        >
          {fullName}
        </h1>
        <h1
          style={{
            textAlign: "justify",
            lineHeight: "0.9",
            fontFamily: "wotfardRegularWebfont",
            fontWeight: "600",
            fontSize: "3.4rem",
          }}
        >
          {profession}
        </h1>
        <p
          style={{
            marginTop: 20,
            textAlign: "justify",
            lineHeight: "1.3",
            fontFamily: "wotfardRegularWebfont",
            fontSize: 20,
          }}
        >
          {Bio}
        </p>
        <button
          style={{
            backgroundColor: "#e7e7e7",
            color: "black",
            padding: "12px 28px",
          }}
          onClick={()=>alertMe()}
        >
          Click me
        </button>
      </div>
    </div>
  );
};
Profile.defaultProps = {
  fullName: "Dali Bouchnak",
  Bio: "See linkdIn Profile",
  profession: "GoMyCode Student",
  children: <img src={profileDefault} alt="" />,
};
Profile.PropsTypes = {
  fullName: PropTypes.string,
  Bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.string,
};
export default Profile;
