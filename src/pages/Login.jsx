import React, { usestate } from 'react';
import '../styles/login.css';
import Helmet from '../components/helmet/Helmet';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loading, setLoading] = usestate(false);
  const [email, setEmail] = usestate("");
  const [password, setPassword] = usestate("");
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      toast.success("Logged in successfully");
      navigate("/checkout");
    } catch (error) {
      setLoading(false);
      toast.error("please Check Email id and password");
    }
  };

  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            {
              loading ? <Col lg="12" className="text-center">
                <h5 className='fw-bold'>Loading...</h5>
              </Col> : <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">Login</h3>
                <Form className="auth_form" onSubmit={signIn}>
                  <FormGroup className="form_group">
                    <Input
                      type="email"
                      placeholder="Enter Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <Input
                      type="password"
                      placeholder="Enter Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <button type="submit" className="buy-btn auth_btn" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </button>
                  <p>
                    Don't have an account? <Link to="/signup">Create an Account</Link>
                  </p>
                </Form>
              </Col>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
