import CONSTANT from "../contstants/constant";
const intitialState = {
  users: [],
  showWhat: 0,
  loading: false,
};

const showReducer = (state = intitialState, action) => {
  switch (action.type) {
    case CONSTANT.ADD:
      return { ...state, users: [...state.users, action.payload] };
    case CONSTANT.loading:
      return { ...state, loading: action.payload };
    case CONSTANT.select:
      return { ...state, showWhat: action.payload };
    case CONSTANT.addAll:
      return { ...state, users: action.payload };
    default:
      return intitialState;
  }
};

export default showReducer;
