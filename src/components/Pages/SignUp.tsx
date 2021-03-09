import React, { FC, useState, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Input from "../UI/Input";
import Button from "../UI/Button";
import Message from "../UI/Message";
import { signup, setError } from "../../store/actions/authActions";
import { RootState } from "../../store";

const SignUp: FC = () => {
  const [firstName, setFirstName] = useState("");
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
    dispatch(signup({ email, password, firstName }, () => setLoading(false)));
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Sign Up</h2>
        <form className="form" onSubmit={submitHandler} autoComplete="off">
          {error && <Message type="danger" msg={error} />}
          <div className="form-group">
            <Input
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.currentTarget.value)}
              placeholder="First name"
              label=""
            />
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
              placeholder="password"
              label=""
            />
          </div>
          <Button
            text={loading ? "Loading..." : "Singup"}
            className="primary btn-block"
            disabled={loading}
          />
        </form>
      </div>
    </section>
  );
};

export default SignUp;
