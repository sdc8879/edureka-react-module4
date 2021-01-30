import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export default function EnquiryForm({ currentCourseName }) {
  const dispatch = useDispatch();
  const [courseName, setCourseName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  useEffect(() => {
    setCourseName(currentCourseName);
  }, [currentCourseName, courseName]);

  const onCourseNameChange = (e) => {
    setCourseName(e.target.value);
    dispatch({
      type: "onChangeCourseName",
      payload: e.target.value
    });
  };
  const onFirstNameChange = (e) => {
    setFirstName(e.target.value);
    dispatch({
      type: "onChangeFirstName",
      payload: e.target.value
    });
  };
  const onLastNameChange = (e) => {
    setLastName(e.target.value);
    dispatch({
      type: "onChangeFirstName",
      payload: e.target.value
    });
  };
  const onMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
    dispatch({
      type: "onChangeMobileNumber",
      payload: e.target.value
    });
  };

  const printValues = (e) => {
    e.preventDefault();
    console.log(courseName, firstName,lastName,mobileNumber);
  };

  return (
    <form onSubmit={printValues}>
      <label>
        Course Name:
        <input
          value={courseName}
          onChange={onCourseNameChange}
          name="username"
          type="text"
        />
      </label>
      <br />
      <br />
      <label>
        First name:
        <input
          value={firstName}
          onChange={onFirstNameChange}
          name="firstName"
          type="text"
        />
      </label>
      <br />
      <br />
      <label>
        Last name:
        <input
          value={lastName}
          onChange={onLastNameChange}
          name="lastName"
          type="text"
        />
      </label>
      <br />
      <br />
      <label>
        Mobile Number:
        <input
          value={mobileNumber}
          onChange={onMobileNumberChange}
          name="mobileNumber"
          type="text"
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
