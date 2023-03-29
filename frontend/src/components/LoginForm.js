import React, { useState } from 'react';
import axios from 'axios';

import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../images/logoqyon.png";
import './LoginForm.css';

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
    <div className="login-container">
      <div className="login-card">
        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
