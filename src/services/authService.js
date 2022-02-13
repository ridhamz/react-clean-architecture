import { useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import useHttpClient from 'hooks/useHttpClient';

const useAuthService = () => {
  const { sendRequest } = useHttpClient();
  const { clearLocalStorage } = useContext(AuthContext);

  // login service
  const login = async ({ email, password }) =>
    sendRequest('login', 'post', { email, password });

  // logout service
  const logout = () => clearLocalStorage();

  return { login, logout };
};

export default useAuthService;
