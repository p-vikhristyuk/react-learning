import React from 'react';

const Profile = ({name = ""}) => {
    return(
        <div className="profile">
            <div className="container">
                <h1 className="title">It's Profile for <span style={{color: '#9BB7FF'}}>{name}</span></h1>
            </div>
        </div>
    )
};

export default Profile;
