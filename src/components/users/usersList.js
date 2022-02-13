import React, { useCallback } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useAsync } from '../../hooks/useAsync';
import useUsersService from '../../services/usersService';

export default function UsersList() {
  // service
  const { getUsersList } = useUsersService();

  // context
  const { isLoggedIn } = useCallback(AuthContext);

  // get list of users
  const [response, error, refresh] = useAsync(getUsersList);

  /* 
   response.users => contains list users 
   error => contains error if exists
   refresh => method to rerender the component in order to refresh the list of users
  */

  // states

  return (
    <div>
      UsersList :
      {response?.data.map((user) => (
        <div>{user.name}</div>
      ))}
    </div>
  );
}
