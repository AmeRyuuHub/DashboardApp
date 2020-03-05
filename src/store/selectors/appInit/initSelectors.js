
// Getting autorization status, authorized or not

export const getAuthStatus = state => {
  return state.auth.loginStatus;
};

//If service is authorized, getting user's name
export const getUser = state => {
  return state.auth.fullName;
};

// Getting user's role
export const getUserRole = state => {
  return state.auth.role;
};

// Getting UI current lang
export const getUILang = state => {
  return state.lang.langUI;
};

