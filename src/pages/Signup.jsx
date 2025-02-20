import React, { usestate } from 'react';

import Helmet from '../components/helmet/Helmet';
import '../styles/login.css';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase.config';
import { setDoc, doc } from "firebase/firestore";
import { db } from '../firebase.config';
import { toast } from "react-toastify";
import { auth } from "../firebase.config";
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [username, setUsername] = usestate('');
  const [email, setEmail] = usestate('');
  const [password, setPassword] = usestate('');
  const [file, setFile] = usestate(null);
  const [loading, setLoading] = usestate(false);
  const navigate = useNavigate();
  

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create user with email and password
      const userCredential =await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const storageRef = ref(storage, 'images/${Date.now()+username}');
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on((error) => {
        toast.error(error.message);
      },()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateProfile(user, {
            displayName: username,
            photoURL: downloadURL,

          })
          await setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            displayName: username,
            email,
            photoURL: downloadURL,
          });
        })
      })
      setLoading(false);
      toast.success("Account Created Sccuessfully");
      navigate("/login");
    }
    // Handle file upload if a file is selected
    catch (error) {
      setLoading(false);
      toast.error("Something went wrong")

    }
  };

  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>{
             
              loading ? <Col className="text-center" lg="12">
                <h5 className="fw-blod">Loading.....</h5>
              </Col> :""
              }
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold mb-4">Signup</h3>
              <Form className="auth_form" onSubmit={signup}>
                <FormGroup className="form_group">
                  <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormGroup>
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
                <FormGroup className="form_group">
                  <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
                </FormGroup>
                <button type="submit" className="buy-btn auth_btn" disabled={loading}>
                  {loading ? "Creating Account..." : "Create an Account"}
                </button>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
