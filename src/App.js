import React, { useState } from 'react';
//import { API } from 'aws-amplify';
//import { createForm } from './graphql/mutations';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    checkboxes: [],
    textBox1: '',
    textBox2: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        checkboxes: checked ? [...formData.checkboxes, value] : formData.checkboxes.filter((item) => item !== value)
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
 //   e.preventDefault();
 //   try {
 //     await API.graphql({
//        query: createForm,
 //       variables: { input: formData }
 //     });
 //     alert('Form submitted successfully!');
 //     setFormData({
 //       firstName: '',
 //       lastName: '',
 //       email: '',
 //       checkboxes: [],
 //       textBox1: '',
 //       textBox2: ''
 //     });
 //   } catch (error) {
 //     console.error('Error creating form', error);
 //   }
  };

  return (
    <div className="App">
      <h1>Submit your information</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          value={formData.firstName}
          required
        /><br/>
        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          value={formData.lastName}
          required
        /><br/>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
        /><br/>
        <label>
          <input name="checkbox1" type="checkbox" value="checkbox1" onChange={handleChange} /> Checkbox 1
        </label><br/>
        <label>
          <input name="checkbox2" type="checkbox" value="checkbox2" onChange={handleChange} /> Checkbox 2
        </label><br/>
        <textarea
          name="textBox1"
          placeholder="Text Box 1"
          onChange={handleChange}
          value={formData.textBox1}
        ></textarea><br/>
        <textarea
          name="textBox2"
          placeholder="Text Box 2"
          onChange={handleChange}
          value={formData.textBox2}
        ></textarea><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

