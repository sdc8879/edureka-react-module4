import { cloneDeep } from "lodash";
const initialState = {
  courseList: [],
  enableForm: false,
  currentCourseName: "",
  userInfo:[]
};

const reducer = (state = initialState, action) => {
  const newState = cloneDeep(state);
  if (action.type === "GET_LIST") {
    newState.courseList = [...action.payload];
  }
  if (action.type === "ENABLE_FORM") {
    newState.enableForm = action.payload.flag;
    newState.currentCourseName = action.payload.courseName;
  }
  return newState;
};
export default reducer;
