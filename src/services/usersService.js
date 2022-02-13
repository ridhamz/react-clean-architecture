import useHttpClient from 'hooks/useHttpClient';

const useUsersService = () => {
  const { sendRequest } = useHttpClient();

  // login service
  const getUsersList = async () => sendRequest('getUsersList', 'get');

  return { getUsersList };
};

export default useUsersService;
