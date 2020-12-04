import { useState } from "react";
import "./Register.css";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleRegister(formData);
      }}
    >
      <div className="registerBox">
        <h3>Welcome</h3>
        <label>
          <input
            className="username_one"
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <input
            className="email"
            type="text"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <input
            className="password_one"
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="submit_button">Sign Up</button>
      </div>
    </form>
  );
}
