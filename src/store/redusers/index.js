import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import ping from './pingByMac/PingByMac';
import stbInfo from './statusByMac/StatusByMac';
import dvbc from './dvbcByMac/DvbcByMac'
import lang from './lang/lang'
import authApp from './auth/Auth';
import appInit from './appInit/AppInit';
import users from './users/UsersList';
import profile from './profile/profile'
import content from './content/content';


const rootReducer = combineReducers({
    ping,
    stbInfo,
    dvbc,
    lang,
    authApp,
    appInit,
    users,
    profile,
    content,
    form: formReducer,
})

export default rootReducer;