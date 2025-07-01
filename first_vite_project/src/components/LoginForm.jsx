import React, { useState } from 'react';
import InputField from './InputField';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bestellung: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Formular Daten:', formData);
    setFormData({ name: '', email: '', bestellung: '' });
  };

  return (
    <div className="form-wrapper">
      <h2>Bestellformular</h2>
      <InputField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        label="Bestellung"
        name="bestellung"
        value={formData.bestellung}
        onChange={handleChange}
      />
      <button onClick={handleSubmit} className="submit-button">
        Abschicken
      </button>
    </div>
  );
};

export default LoginForm;