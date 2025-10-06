import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { api } from "../../../axiosConfig";
import { useState } from "react";


function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/adminLogin", {
        email,
        password,
      });

      console.log("response: "+response.data);

      if (response.data && response.data.authenticated) {
        console.log("Admin authenticated:", response.data);
        const credentials=btoa(`${email}:${password}`);
        sessionStorage.setItem("auth", credentials);
        navigate("/admin/dashboard");

      } else {
        setError("Invalid credentials");
      }

    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your credentials or try again.");
    }
  };

  return (
    <div className="LoginFormContain1">
      <div className="LoginFormContain">
        <h4 className="LoginFormTitle">Login Admin Panel</h4>

        <div className="LoginForm">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputPassword5" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="inputPassword5"
              className="form-control"
              aria-describedby="passwordHelpBlock"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              required
            />
        
          </div>
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary" onClick={handleSubmit} > 
          Sign in
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
