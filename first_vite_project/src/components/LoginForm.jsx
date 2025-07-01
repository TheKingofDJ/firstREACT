import React, { useState } from 'react';
import InputField from './InputField';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bestellung: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (formData.name.trim() === '') {
      alert('Bitte Name eingeben!');
      return;
    }
    console.log('Formular Daten:', formData);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', bestellung: '' });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="form-wrapper">
        <h2>Bestellformular</h2>
        <p>{formData.name}, vielen Dank für Ihre Bestellung!</p>
        <button onClick={handleReset} className="submit-button">Neue Bestellung</button>
      </div>
    );
  }

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
