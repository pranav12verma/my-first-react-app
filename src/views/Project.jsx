import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  userDataFailure,
  userDataInitiate,
  userDataSuccess,
} from "../redux/users/action";
export default function Projects() {
  //const [userData, setUserData] = useState([]);
  const userState = useSelector((state) => state.userReducer);
  console.log(userState);
  const dispatch = useDispatch();

  const { loader, userData, error } = userState;

  useEffect(() => {
    dispatch(userDataInitiate());
    //getUsers();
    axios
      .get("https://reqres.in/api/users")
      .then((res) => dispatch(userDataSuccess(res.data.data))) //setUserData(res.data.data)
      .catch((err) => dispatch(userDataFailure(err))); //console.log("err", err)
    console.log(userData);
  }, []);
  console.log(userData);
  return (
    <div>
      <h1>Projects</h1>

      <>
        {userData.map((user) => (
          <Card key={user.id}>
            <CardImg
              alt="Card image cap"
              src={user.avatar}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                {user.first_name} {user.last_name}
              </CardTitle>
              <CardTitle tag="h6">Email : {user.email}</CardTitle>
            </CardBody>
          </Card>
        ))}
      </>
    </div>
  );
}
