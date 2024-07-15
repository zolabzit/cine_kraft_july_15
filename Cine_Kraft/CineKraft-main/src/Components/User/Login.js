import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Row, Col, Card } from "react-bootstrap";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, useLocation } from "react-router-dom";
import "./Homepage.css";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    showPassword: false,
  });

  const handleLoginInputChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
      [`${event.target.name}Error`]: "", // Clear the error when input changes
    });
  };

  const togglePasswordVisibility = () => {
    setLoginData({
      ...loginData,
      showPassword: !loginData.showPassword,
    });
  };

  const validateEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    let isValid = true;

    if (loginData.email.trim() === "") {
      setLoginData({
        ...loginData,
        emailError: "Please enter an email address.",
      });
      isValid = false;
    } else if (!validateEmail(loginData.email)) {
      setLoginData({
        ...loginData,
        emailError: "Please enter a valid email address.",
      });
      isValid = false;
    }

    if (loginData.password.trim() === "") {
      setLoginData({
        ...loginData,
        passwordError: "Please enter a password.",
      });
      isValid = false;
    }

    if (isValid) {
      // Process the login logic here
      // You can make an API call or perform any necessary operations
    }
  };

//   const handleForgotPassword = () => {
    // Handle forgot password logic here
    // You can navigate to a password reset page or show a modal to reset the password
//     console.log("Forgot Password");
//   };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log("Sign in with Google");
  };

  const navigate = useNavigate();
  const location = useLocation();
  const value = location.state;
  console.log("sample", value);

  return (
    <div>
      <div style={{ padding: "3%" }}>
        <Row>
          <Col className="mt-5" md={8} xl={6}>
            <img
              style={{ width: "100%" }}
              src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=ais"
              alt="not found"
            />
          </Col>
          <Col className="mt-5" md={11} xl={6}>
            <Card
              style={{
                boxShadow: "inset 0 2px 6px rgba(0,0,0,.35)",
                margin: "0 auto",
                maxWidth: "100%",
                padding: "5%",
              }}
            >
              <Form
                style={{ width: "100%", padding: "5%" }}
                onSubmit={handleSubmit}
              >
                <h4 className="text-center">Login</h4>
                <Row style={{ paddingBottom: "5%", paddingTop: "5%" }}>
                  <Col>
                    <Form.Group controlId="email">
                      <Form.Label>
                        <b>Email Id</b>
                      </Form.Label>
                      <Form.Control
                        style={{ width: "100%" }}
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleLoginInputChange}
                        required
                        isInvalid={!!loginData.emailError}
                      />
                      <Form.Control.Feedback type="invalid">
                        {loginData.emailError}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row style={{ paddingBottom: "5%" }}>
                  <Col>
                    <Form.Group controlId="password">
                      <Form.Label>
                        <b>Password</b>
                      </Form.Label>
                      <div className="password-input">
                        <Form.Control
                          style={{ width: "100%" }}
                          type={loginData.showPassword ? "text" : "password"}
                          name="password"
                          value={loginData.password}
                          onChange={handleLoginInputChange}
                          required
                          isInvalid={!!loginData.passwordError}
                        />
                        <span
                          className="password-toggle"
                          onClick={togglePasswordVisibility}
                        >
                          {loginData.showPassword ? (
                            <FiEyeOff className="eye-icon" />
                          ) : (
                            <FiEye className="eye-icon" />
                          )}
                        </span>
                      </div>
                      <Form.Control.Feedback type="invalid">
                        {loginData.passwordError}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <div>
                  <p style={{ textAlign: "end", fontSize: "14px" }}>
                    <a
                      style={{ textDecoration: "none" }}
                      href="/"
                      onClick={() => navigate("/ForgotPassword")}
                    >
                      Forgot Password?
                    </a>
                  </p>
                </div>
                <Row>
                  <Col style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                  </Col>
                </Row>
                <div style={{ paddingTop: "3%", paddingBottom: "3%" }}>
                  <p style={{ textAlign: "center", fontSize: "14px" }}>
                    Don't have an account?&nbsp;&nbsp;
                    <a
                      style={{ textDecoration: "none" }}
                      href="/"
                      onClick={() => navigate("/AdminSignup")}
                    >
                      Signup Now
                    </a>
                  </p>
                </div>
                <div>
                  <Row>
                    <Col>
                      <hr></hr>
                    </Col>
                    Or
                    <Col>
                      <hr></hr>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row style={{ paddingTop: "3%" }}>
                    <Col style={{ display: "flex", justifyContent: "center" }}>
                      <Button variant="light" onClick={handleGoogleSignIn}>
                        <FcGoogle style={{ marginRight: "5px" }} /> Sign in with
                        Google
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Login;
