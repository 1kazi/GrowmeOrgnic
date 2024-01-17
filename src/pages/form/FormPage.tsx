import React, { useState } from "react";
import "./form.scss";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
type usertype = {
  name: string;
  phoneNo: string;
  email: string;
};
const FormPage: React.FC = () => {
  const navigation=useNavigate()
  const [user, setUser] = useState<usertype>({
    name: "",
    phoneNo: "",
    email: "",
  });
  const { name, phoneNo, email } = user;
  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("ApplicationData", JSON.stringify(user));
    setUser({ name: "", phoneNo: "", email: "" });
    navigation("/form-data");
  };
  return (
    <section className="application-form-section pt-5">
      <div className="container">
        <div className="application-from-wrapper">
          <h2 className="fs-32-28 black-242 p-3">Application Form</h2>
          <form action="" onSubmit={submitHandler}>
          <div className="form-frame px-3 py-3 d-flex align-items-center gap-5 flex-wrap">
            <TextField
              id="standard-basic"
              required
              placeholder="Enter Name"
              className="mui-input-box "
              value={name}
              name="name"
              onChange={changeHandler}
              label="Name"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              required
              className="mui-input-box "
              value={phoneNo}
              name="phoneNo"
              onChange={changeHandler}
              label="PhoneNo"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              required
              className="mui-input-box "
              value={email}
              name="email"
              onChange={changeHandler}
              label="Email"
              variant="standard"
            />
          </div>
          <div className="pt-5 px-3">
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default FormPage;
