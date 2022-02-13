import { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import UsersList from './components/users/usersList';
import { AuthContext } from './context/AuthContext';

function App() {
  // context
  const { loggedIn } = useContext(AuthContext);
  return (
    <div>
      <Routes>
        {loggedIn && <Route path="users" element={<UsersList />} />}
      </Routes>
    </div>
  );
}

export default App;
