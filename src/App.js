import React from "react";
import { connect } from "react-redux";
import CourseList from "./CourseList";
import EnquiryForm from "./EnquiryForm";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
  //   this.props.getList();   Here actions diretly dispatched
  // }

  componentDidMount() {
    this.getCourseList();
  }

  getCourseList() {
    let url = "http://localhost:3001/courses";
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.props.getList(data);
      })
      .catch(console.log)
  }

  render() {
    let formDiv;
    if (this.props.enableForm) {
      formDiv = (
        <EnquiryForm
          currentCourseName={this.props.enquiryFormdata.currentCourseName}
        ></EnquiryForm>
      );
    }
    return (
      <div className="container">
        <CourseList clist={this.props.courseList}></CourseList>
        <br></br>
        {formDiv}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    courseList: state.courseList,
    enableForm: state.enableForm,
    enquiryFormdata: state.enquiryFormdata
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getList: () => dispatch({ type: "GET_LIST" })   FOR DIRECTLY DISPATCHING ACTION
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    getList: (courselist) => dispatch({ type: "GET_LIST", payload: courselist })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
