import { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { createUser, loginUser } from "../../services/userService";

const SignUp = ({ type }: { type: string }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e: any) => {
    e.preventDefault();
    const response = await createUser({
      fullName: name,
      email: email,
      password: password,
    });
    if (response === 201) navigate("/login");
    else alert("Please enter valid user details");
  };
  const handleLogin = async (e: any) => {
    e.preventDefault();
    const response = await loginUser({
      email: email,
      password: password,
    });
    if (response === 200) navigate("/dashboard");
    else alert("Please enter valid email or password");
  };
  return (
    <div>
      <div className="outer">
        <div className="inner">
          <header className="signup">
            <h1>SignUp</h1>
            <p>It takes 30sec</p>
          </header>

          <main className="content">
            <form action="">
              {type === "signup" && (
                <p>
                  <label htmlFor="Full Name">Full Name</label>
                  <input
                    type="text"
                    placeholder="Gourav Parmar"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </p>
              )}

              <p>
                <label htmlFor="Email">Your Email</label>
                <input
                  type="text"
                  placeholder="gourav.parmar434@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>

              <p>
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  placeholder="At least 8 characters"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </p>
              <p>
                <button
                  type="submit"
                  className="submit-btn"
                  onClick={(e: any) => {
                    type === "signup" ? handleRegister(e) : handleLogin(e);
                  }}
                >
                  {type === "signup" ? "Create Account" : "Login"}
                </button>
              </p>
            </form>
          </main>

          {type === "signup" && (
            <footer>
              <p>
                Already have an account! click on login.
                <span onClick={() => navigate("/login")} className="login-link">
                  login
                </span>
              </p>
            </footer>
          )}
        </div>
        <div className="circle c1"></div>
        <div className="circle c2"></div>
      </div>
    </div>
  );
};

export default SignUp;
