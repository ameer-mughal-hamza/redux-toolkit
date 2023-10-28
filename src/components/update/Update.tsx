import Warning from "../warning/Warning";
import "./update.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser2 } from "../../redux/userSlice";
import { updateUser } from "../../redux/api-calls";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const {
    userInfo: { name: username, email: userEmail },
    isLoading,
  } = useSelector((state: any) => state.user);
  const handleUpdate = (e: any) => {
    e.preventDefault();
    // console.log(name, email);
    updateUser({ name, email }, dispatch);
    // dispatch(updateUser2({ name, email}));
    setName("");
    setEmail("");
    // dispatch(update({ name, email }));
  };

  // const handleDelete = (e: any) => {
  //   dispatch(remove());
  // };

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete">Delete Account</button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={username}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                value={email}
                className="formInput"
                type="text"
                placeholder={userEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button
              className="updateButton"
              onClick={handleUpdate}
              disabled={isLoading}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
