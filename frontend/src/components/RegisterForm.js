import { useState } from 'react';
import axios from 'axios';

import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../images/logoqyon.png";
import './RegisterForm.css';

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/register', formData);
      console.log(response.data);
      // Redirecionar para a página de sucesso ou exibir uma mensagem de sucesso
    } catch (error) {
      console.error(error);
      // Exibir uma mensagem de erro ao usuário
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="card">
      <div className="card-content">
        <div className="left-content">
          <figure>
            <img src={logo}/>
          </figure>
        </div>
        <div className="right-content">
          <form onSubmit={handleSubmit}>
            <h2 className="form-title">Cadastre-se</h2>
            <label className="input-icon">
              <div className="input-container">
                <FontAwesomeIcon icon={faUser} className="fa-icon" />
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nome" className="styled-input" required />
              </div>
            </label>
            <label className="input-icon">
              <div className="input-container">
                <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="styled-input" required />
              </div>
            </label>
            <label className="input-icon">
              <div className="input-container">
                <FontAwesomeIcon icon={faLock} className="fa-icon" />
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Senha" className="styled-input" required />
              </div>
            </label>
            <label className="input-icon">
              <div className="input-container">
                <FontAwesomeIcon icon={faLock} className="fa-icon" />
                <input type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} placeholder="Confirme a senha" className="styled-input" required />
              </div>
            </label>
            <button type="submit" className="register-button">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;