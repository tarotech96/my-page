const { modalState } = require("redux/states/modal");

const modalReducers = (state = modalState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        isOpen: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default modalReducers;
