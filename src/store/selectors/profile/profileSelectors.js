
export const getProfile = state => {
  return state.profile.profile;
};

export const getProfileFetching = state => {
  return state.profile.isFetching;
};

export const getProfileFailed = state => {
    return state.profile.requestFailed;
  };

