import { useState } from "react";
import Usertable from "./userTable";
export default function User() {
  const [user, setUser] = useState([{}]);
  function userHandler(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const dob = e.target.dob.value;
    const location = e.target.location.value;
    const userData = {
      key: Date.now(),
      name,
      phone,
      dob,
      location
    };
    setUser((prevdata) => [...user, userData]);
    console.log(user);
  }

  return (
    <div>
      <div className="container mt-2">
        <h1 className="display-2">User Input</h1>
      </div>
      <div className="container" style={{ width: "700px" }}>
        <form class="form-control" onSubmit={userHandler}>
          <div>
            <label className="form-label">Username</label>
          </div>
          <div>
            <input name="name" className="form-control"></input>
          </div>
          <div>
            <label className="form-label">phoneNo</label>
          </div>
          <div>
            <input name="phone" className="form-control"></input>
          </div>
          <div>
            <label className="form-label">DateOfBirth</label>
          </div>
          <div>
            <input name="dob" className="form-control" type="date"></input>
          </div>
          <div>
            <label className="form-label">Location</label>
          </div>
          <div>
            <input name="location" className="form-control"></input>
          </div>
          <div>
            <button className="form-control btn-primary mt-5" type="submit">
              Submit
            </button>
          </div>
        </form>
        <Usertable userData={user}></Usertable>
      </div>
    </div>
  );
}
