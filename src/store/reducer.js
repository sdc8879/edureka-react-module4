import { cloneDeep } from "lodash";
const initialState = {
  courseList: [],
  enableForm: false,
  currentCourseName: "",
  userInfo:[]
};

const reducer = (state = initialState, action) => {
  const newState = cloneDeep(state);
  console.log(action)
  if (action.type === "GET_LIST") {
    newState.courseList = [...action.payload];
    newState.enableForm = false;
    newState.currentCourseName = "";
    newState.userInfo = [];
  }
  if (action.type === "ENABLE_FORM") {
    newState.enableForm = action.payload.flag;
    newState.currentCourseName = action.payload.courseName;
  }
  if(action.type === "ENQUIRY_FORM_SUCCESS"){
    newState.currentCourseName = ""
  }
  return newState;
};
export default reducer;
