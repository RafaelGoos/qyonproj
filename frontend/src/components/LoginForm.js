import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email: email,
        password: password,
      });
      // armazenar o token JWT na sessão do navegador
      localStorage.setItem('token', response.data.token);
      // redirecionar para a página de usuários
      window.location.href = '/users';
    } catch (error) {
      setError('Usuário ou senha inválidos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;
