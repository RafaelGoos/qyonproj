import { useState } from 'react';
import axios from 'axios';

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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      <label>
        Confirm Password:
        <input type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} required />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;