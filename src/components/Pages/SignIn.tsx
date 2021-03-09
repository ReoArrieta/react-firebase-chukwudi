import React, { FC, useState, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Input from "../UI/Input";
import Button from "../UI/Button";
import Message from "../UI/Message";
import {
  signin,
  signinFb,
  setError,
  signinGmail,
} from "../../store/actions/authActions";
import { RootState } from "../../store";

const SignIn: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(""));
      }
    };
  }, [error, dispatch]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (error) {
      dispatch(setError(""));
    }
    setLoading(true);
    dispatch(signin({ email, password }, () => setLoading(false)));
  };

  const submitFacebook = (e: FormEvent) => {
    e.preventDefault();
    if (error) {
      dispatch(setError(""));
    }
    setLoading(true);
    dispatch(signinFb(() => setLoading(false)));
  };

  const submitGmail = (e: FormEvent) => {
    e.preventDefault();
    if (error) {
      dispatch(setError(""));
    }
    setLoading(true);
    dispatch(signinGmail(() => setLoading(false)));
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Sign In</h2>
        <form className="form" onSubmit={submitHandler} autoComplete="off">
          {error && <Message type="danger" msg={error} />}
          <div className="form-group">
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="Email"
              label=""
            />
            <Input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              placeholder="Password"
              label=""
            />
          </div>
          <p>
            <Link to="/forgot-password">Forgot password?</Link>
          </p>
          <Button
            text={loading ? "Loading..." : "Signin"}
            className="secondary btn-block"
            disabled={loading}
          />
          <Button
            type="button"
            text={loading ? "Cargando..." : "Facebook"}
            className="primary btn-block"
            disabled={loading}
            onClick={submitFacebook}
          />
          <Button
            type="button"
            text={loading ? "Cargando..." : "Google"}
            className="danger btn-block"
            disabled={loading}
            onClick={submitGmail}
          />
        </form>
      </div>
    </section>
  );
};

export default SignIn;
