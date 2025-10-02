import "./LoginForm.css";

function LoginForm() {
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
            />
        
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
