import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

// function EnquiryForm({props}) { /**When we are passing parent to child data to child functional component we have to used like this way */

function EnquiryForm(props) {   /** Here accessing state by using mapStateToProps we have to have pass props this way */
  const dispatch = useDispatch();
  const [courseName, setCourseName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [enquires, setEnquires] = useState("");

  // useEffect(() => {
  //   setCourseName(currentCourseName);
  // }, [currentCourseName, courseName]);/**When we are passing parent to child data to child functional component we have to used like this way */

  useEffect(() => {
    /** Here accessing state by using mapStateToProps we have to have pass props this way */
    setCourseName(props.currentCourseName);
  }, [props]);

  const onCourseNameChange = (e) => {
    setCourseName(e.target.value);
  };
  const onFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const onLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const onMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const onEnquiresChange = (e) => {
    setEnquires(e.target.value);
  };

  const printValues = (e) => {
    e.preventDefault();
    const body = {
      'currentCourseName': courseName,
      'firstName': firstName,
      'lastName': lastName,
      'mobileNumber': mobileNumber,
      'enquires': enquires
    };

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then((data) => {
        setCourseName('');
        setFirstName('');
        setLastName('');
        setMobileNumber('');
        setEnquires('');
        props.enquiryFormSubmit();
      })
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
      <br />
      <br />
      <label>
        Enquires:
        <textarea
          value={enquires}
          onChange={onEnquiresChange}
          name="enquires"
          type="textarea"
        />
      </label>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}

function mapStateToProps(state) {
  return { currentCourseName: state['currentCourseName'] };
}

function mapDispatchToProps(dispatch) {
  return {
    enquiryFormSubmit:()=>{
      return dispatch({
        type:"ENQUIRY_FORM_SUCCESS"
      });
    } 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EnquiryForm);