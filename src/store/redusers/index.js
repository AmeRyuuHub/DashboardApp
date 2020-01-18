import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { status, ping, dvbc } from "./dashboard";
import lang from "./lang/lang";
import auth from "./auth/Auth";
import appInit from "./appInit/AppInit";
import users from "./users/users";
import profile from "./profile/profile";
import content from "./content/content";

const rootReducer = combineReducers({
  ping,
  status,
  dvbc,
  lang,
  auth,
  appInit,
  users,
  profile,
  content,
  form: formReducer
});

export default rootReducer;
