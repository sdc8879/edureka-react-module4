import { cloneDeep } from "lodash";
const initialState = {
  courseList: [],
  enableForm: false,
  enquiryFormdata: {
    currentCourseName: "",
    firstName: "",
    lastName: "",
    mobileNumber: ""
  }
};

const reducer = (state = initialState, action) => {
  const newState = cloneDeep(state);
  if (action.type === "GET_LIST") {
    console.log(action)
    newState.courseList = [...action.payload];
  }
  if (action.type === "ENABLE_FORM") {
    newState.enableForm = action.payload.flag;
    newState.enquiryFormdata.currentCourseName = action.payload.courseName;
  }
  if (action.type === "onChangeCourseName") {
    console.log("onChangeCourseName action->", action);
  }
  if (action.type === "onChangeFirstName") {
    console.log("onChangeFirstName action-->", action);
  }
  if (action.type === "onChangeLastName") {
    console.log("onChangeLastName action--->", action);
  }
  if (action.type === "onChangeMobileNumber") {
    console.log("onChangeMobileNumber action--->", action);
  }
  return newState;
};
export default reducer;
