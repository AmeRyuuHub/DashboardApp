import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import ping from './pingByMac/PingByMac';
import stbInfo from './statusByMac/StatusByMac';
import dvbc from './dvbcByMac/DvbcByMac'
import dataUI from './dataUI/DataUI'
import authApp from './auth/Auth';
import appInit from './appInit/AppInit';
import users from './users/UsersList';
import profile from './profile/profile'

const rootReducer = combineReducers({
    ping,
    stbInfo,
    dvbc,
    dataUI,
    authApp,
    appInit,
    users,
    profile,
    form: formReducer,
})

export default rootReducer;