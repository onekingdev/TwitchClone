const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isSignedIn: true, userId: action.payload };

    case "LOGOUT":
      return { ...state, isSignedIn: false, userId: null };

    default:
      return state;
  }
};
