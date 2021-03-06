import { useState } from "react";
import "./Login.css";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
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
        props.handleLogin(formData);
      }}
    >
      <div className="loginBox">
        <h3>Hello</h3>

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
            className="password_one"
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>

        <br />

        <button className="submit_button">Sign In</button>
        <h4>Forgot Password?</h4>
      </div>
    </form>
  );
}
