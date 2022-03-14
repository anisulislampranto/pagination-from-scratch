import React from 'react';
import User from '../User/User';

const Users = ({users, page}) => {
    const startIndex = (page - 1)* 10;
    const selectedUsers = users.slice(startIndex, startIndex + 10)



    return (
        <div>
            {
                selectedUsers.map(user => <User user={user} key={user.id} />)
            }
        </div>
    );
};

export default Users;