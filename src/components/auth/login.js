import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import useAuthService from '../../services/authService';
import { handleAsync } from '../../utils/handleAsync';

export default function Login() {
  // service
  const { login } = useAuthService();

  // context
  const { signIn } = useContext(AuthContext);

  // states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const [response, error] = await handleAsync(() => login(email, password));
    if (!error) return signIn(response.token);

    // handle the case of wrong email or password
  };

  // return the jsx form
  return <div>Login</div>;
}
