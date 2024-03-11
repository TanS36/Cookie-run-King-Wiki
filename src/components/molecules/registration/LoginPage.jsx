import React, { useEffect, useState } from 'react';
import { getAuth, signInWithEmailLink } from 'firebase/auth';

const LoginPage = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [isLinkSignIn, setIsLinkSignIn] = useState(false);

  useEffect(() => {
    // Проверяем, была ли страница загружена через ссылку для входа
    if (isLinkSignIn) {
      handleSignInWithEmailLink();
    }
  }, [isLinkSignIn]);

  const handleSendSignInLink = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailLink(auth, email, window.location.href);
      // Если нет ошибок, пользователь авторизован
      setIsAuthenticated(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignInWithEmailLink = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailLink(auth, email, window.location.href);
      setIsAuthenticated(true);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSendSignInLink}>Send Email Link</button>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default LoginPage;
