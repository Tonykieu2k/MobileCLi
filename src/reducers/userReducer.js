const initialState = {
    users: [],
  };
  
  export default function itemReducer(state = initialState, action) {
    switch (action.type) {
      case "GUI_USER":
        return {
          users: [...state.users, action.usernames],
        };
      default:
        return state;
    }
  }
  