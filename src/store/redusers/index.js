import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import ping from './PingByMac/PingByMac';
import stbInfo from './StatusByMac/StatusByMac';
import dvbc from './DvbcByMac/DvbcByMac'
import dataUI from './DataUI/DataUI'
import authApp from './Auth/Auth';
import appInit from './AppInit/AppInit';
import users from './Users/UsersList';

const rootReducer = combineReducers({
    ping,
    stbInfo,
    dvbc,
    dataUI,
    authApp,
    appInit,
    users,
    form: formReducer,
})

export default rootReducer;