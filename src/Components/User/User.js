import React from 'react';

const User = ({user}) => {
    console.log(user);


    return (
        <div>
            <h1>{user.title}</h1>
        </div>
    );
};

export default User;