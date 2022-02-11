import axios from "axios";
import { useReducer } from "react";
import * as yup from "yup";

import { Button, Form, FormGroup, Input } from "reactstrap";

const authConstants = {
    setEmail: "SET_EMAIL",
    setFirstName: "SET_FIRST_NAME",
    setLastName: "SET_LAST_NAME",
    setMobNo: "SET_MOB_NO",
    setPassword: "SET_PASSWORD",
    setEmailError: "SET_EMAIL_ERROR",
    setPasswordError: "SET_PASSWORD_ERROR",
    setMobNoError: "SET_MOB_NO_ERROR",
  };
  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case authConstants.setEmail: {
        return {
          ...state,
          email: payload,
        };
      }
      case authConstants.setFirstName: {
        return {
          ...state,
          firstName: payload,
        };
      }
      case authConstants.setLastName: {
        return {
          ...state,
          lastName: payload,
        };
      }
      case authConstants.setMobNo: {
        return {
          ...state,
          mobNo: payload,
        };
      }
      case authConstants.setPassword: {
        return {
          ...state,
          password: payload,
        };
      }
      case authConstants.setEmailError: {
        return {
          ...state,
          emailError: payload,
        };
      }
      case authConstants.setPasswordError: {
        return {
          ...state,
          passwordError: payload,
        };
      }
      case authConstants.setMobNoError: {
        return {
          ...state,
          mobNoError: payload,
        };
      }
      default:
        return state;
    }
  };
  const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    mobNo: "",
    password: "",
    emailError: "",
    passwordError: "",
    mobNoError: "",
  };
export default function SignUp({ onLoginSuccess }) {
  //   const [email, setEmail] = useState("");
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [mobNo, setMobNo] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [emailError, setEmailError] = useState("");
  //   const [passwordError, setPasswordError] = useState("");
  //   const [mobNoError, setMobNoError] = useState("");

  

  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    email,
    firstName,
    lastName,
    mobNo,
    password,
    emailError,
    passwordError,
    mobNoError,
  } = state;

  const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
    mobNo: yup.string().required().min(10).max(10),
  });

  const onSubmit = (event) => {
    event.preventDefault();

    // const isLongEnough = password.length >= 8;
    // const hasNoSpace = !password.includes(" ");
    // let isValidated = isLongEnough && hasNoSpace;

    // if (isValidated) {
    //   axios
    //     .post(`https://reqres.in/api/login`, {
    //       email,
    //       password,
    //     })
    //     .then(({ data }) => {
    //       onLoginSuccess(data.token);
    //     })
    //     .catch((err) => {
    //       console.log("err", err);
    //     });
    // } else {
    //   setPasswordError("enter valid password");
    //   alert("Login Failed!");
    // }
    dispatch({ type: authConstants.setEmailError, payload: "" });
    dispatch({ type: authConstants.setPasswordError, payload: "" });
    dispatch({ type: authConstants.setMobNoError, payload: "" });
    loginSchema
      .validate({ email, password, mobNo }, { abortEarly: false })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err.inner.forEach((e) => {
          // console.log(e.path,e.message)
          if (e.path === "email") {
            dispatch({ 
                type: authConstants.setEmailError,
                payload: e.message
            });
          }

          if (e.path === "password") {
            dispatch({
              type: authConstants.setPasswordError,
              payload: e.message,
            });
          }
          if (e.path === "mobNo") {
            dispatch({
              type: authConstants.setMobNoError,
              payload: e.message,
            });
          }
        });
      });
  };
  const clearEmail = (event) => {
    event.preventDefault();
    //setEmail("");
    dispatch({ type: authConstants.setEmail, payload: "" });
  };
  const clearFirstName = (event) => {
    event.preventDefault();
    //setFirstName("");
    dispatch({ type: authConstants.setFirstName, payload: "" });
  };
  const clearLastName = (event) => {
    event.preventDefault();
    //setLastName("");
    dispatch({ type: authConstants.setLastName, payload: "" });
  };
  const clearMobNo = (event) => {
    event.preventDefault();
    //setMobNo("");
    dispatch({ type: authConstants.setMobNo, payload: "" });
  };
  const clearPassword = (event) => {
    event.preventDefault();
    //setPassword("");
    dispatch({ type: authConstants.setPassword, payload: "" });
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          bsSize="lg"
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) =>
            dispatch({
              type: authConstants.setEmail,
              payload: event.target.value,
            })
          }
          //setEmail(event.target.value)}
        />
        <Button style={{ margin: "0 5px" }} close onClick={clearEmail} />
        {emailError && <div>{emailError}</div>}
      </FormGroup>
      <FormGroup>
        <Input
          bsSize="lg"
          name="firstName"
          placeholder="firstName"
          type="text"
          value={firstName}
          onChange={(event) =>
            dispatch({
              type: authConstants.setFirstName,
              payload: event.target.value,
            })
          }
          //setFirstName(event.target.value)}
        />
        <Button style={{ margin: "0 5px" }} close onClick={clearFirstName} />
      </FormGroup>
      <FormGroup>
        <Input
          bsSize="lg"
          name="lastName"
          placeholder="lastName"
          type="text"
          value={lastName}
          onChange={(event) =>
            dispatch({
              type: authConstants.setLastName,
              payload: event.target.value,
            })
          }
          //setLastName(event.target.value)}
        />
        <Button style={{ margin: "0 5px" }} close onClick={clearLastName} />
      </FormGroup>
      <FormGroup>
        <Input
          bsSize="lg"
          name="mobNo"
          placeholder="mobNo"
          type="text"
          value={mobNo}
          onChange={(event) =>
            dispatch({
              type: authConstants.setMobNo,
              payload: event.target.value,
            })
          }
          //setMobNo(event.target.value)}
        />
        <Button style={{ margin: "0 5px" }} close onClick={clearMobNo} />
        {mobNoError && <div>{mobNoError}</div>}
      </FormGroup>
      <FormGroup>
        <Input
          bsSize="lg"
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) =>
            dispatch({
              type: authConstants.setPassword,
              payload: event.target.value,
            })
          }
          //setPassword(event.target.value)}
        />
        <Button style={{ margin: "0 5px" }} close onClick={clearPassword} />
        {passwordError && <div>{passwordError}</div>}
      </FormGroup>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "30px",
        }}
      >
        <Button color="danger" outline type="reset">
          Reset
        </Button>
        <Button color="success" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}
