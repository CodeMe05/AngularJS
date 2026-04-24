// 1. React State Management Example
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const [isToggled, setIsToggled] = useState(false);
  const [items, setItems] = useState([]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>State Example</h1>

      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text"
      />
      <p>{text}</p>

      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>

      <button onClick={toggleSwitch}>
        {isToggled ? 'ON' : 'OFF'}
      </button>

      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;










// 2. Client-Side Form Validation
import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};

    if (name.trim() === '') {
      err.name = 'Name is required';
    }

    if (email.trim() === '') {
      err.email = 'Email is required';
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errors.name && <p>{errors.name}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p>{errors.email}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;




// 3. Form Components (Single State Object)
import React, { useState } from 'react';

function FormComponents() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} />
      <input name="email" onChange={handleChange} />
      <textarea name="message" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponents;




// 4. Student Registration Form
import React, { useState } from 'react';

function StudentRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    studentClass: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration Successful");

    setFormData({
      name: '',
      email: '',
      number: '',
      studentClass: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input name="number" value={formData.number} onChange={handleChange} placeholder="Phone" />
      <input name="studentClass" value={formData.studentClass} onChange={handleChange} placeholder="Class" />

      <button type="submit">Register</button>
    </form>
  );
}

export default StudentRegistrationForm;





5. Simple Login Form
import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Fill all fields");
    } else {
      setError("");
      alert("Login Successful");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p>{error}</p>}

      <button>Login</button>
    </form>
  );
}

export default LoginForm;





//6. Simple SPA (Without Router)
import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div>
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('about')}>About</button>

      {page === 'home' && <h2>Home Page</h2>}
      {page === 'about' && <h2>About Page</h2>}
    </div>
  );
}

export default App;




       
//7. Routing using React Router

      import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/about" element={<h2>About</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


       //10. REST API (GET + POST + PUT)
       const express = require('express');
const app = express();

app.use(express.json());

let items = [];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name
  };

  items.push(newItem);
  res.json(newItem);
});

app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id == req.params.id);

  if (item) {
    item.name = req.body.name;
    res.json(item);
  } else {
    res.send("Not Found");
  }
});

app.listen(3000);




       //get

       const express = require('express');
const app = express();

app.get('/items', (req, res) => {
  res.json([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" }
  ]);
});

app.listen(3000);


       //post 


const express = require('express');
const app = express();

app.use(express.json());

let items = [];

app.post('/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name
  };

  items.push(newItem);
  res.json(newItem);
});

app.listen(3000);
     
