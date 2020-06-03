export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => {
          return user.id !== action.payload;
        })
      }
    case 'ADD_USER':

    var newUser = action.payload;

    var check = true;

    state.users.map(user => {
      if(user.id === newUser.id) {
        check = false;
      }
    });

    if(check) {
      return {
        ...state,
        users: [action.payload, ...state.users]
      }
    } else {
      return {
        ...state,
        users: [...state.users]
      }
    }
    case 'EDIT_USER':
      const updateUser = action.payload;

      const updateUsers = state.users.map(user => {
        if (user.id === updateUser.id) {
          return updateUser;
        }
        return user;
      })
      return {
        ...state,
        users: updateUsers
      }

      case 'FILTER_BY_AGE': 
        const filteredUsers = state.users.sort((a, b) => (a.employee_age > b.employee_age) ? 1 : -1);
        
        return {
        ...state,
        users: filteredUsers
      }

    default:
      return state;
  }
}