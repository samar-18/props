import React from 'react';
 import PropTypes from 'prop-types';

const Profile = (props) => {
    return (
        <div>
<> {props.handleName(props.fullName)} </>
            
            <h1>  {props.handleName} Hi my name is {props.fullName}</h1>
            <h1>   {props.bio} </h1>
            <h1> I am {props.profession}  </h1>
            <> {props.children}</>
            
        </div>
        
    );
};
export default Profile
Profile.defaultProps = {
    fullName: "Not defined",
    bio: "Not defined",
    profession:"Not defined"
  };
Profile.propTypes = {
fullName: PropTypes.string,
bio: PropTypes.string,
profession: PropTypes.string,
};
