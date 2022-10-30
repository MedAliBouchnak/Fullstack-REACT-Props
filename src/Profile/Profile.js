import React from "react";
import PropTypes from "prop-types";
import profileDefault from "../Photo2.jpg";
const Profile = ({ fullName, Bio, profession, children, alertMe }) => {
  console.log(children);
  return (
    <div>
      <h1>{fullName}</h1>
      <h1>{profession}</h1>
      <p>{Bio}</p>
      <button onClick={alertMe({fullName})}>Click me</button>
      <div>{children}</div>
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
  children: PropTypes.string
};
export default Profile;
