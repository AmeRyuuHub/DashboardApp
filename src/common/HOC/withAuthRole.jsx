import React from 'react';
import { connect } from 'react-redux';

import {Redirect} from 'react-router-dom';
import { getAuthStatus, getUserRole } from '../../store/selectors/appInit/initSelectors';
import { getDataRouts } from '../../store/selectors/appBar/appBarSelectors';

let mapStateToProps = (state) =>({
    loginStatus: getAuthStatus(state),
    role: getUserRole(state),
    routsList:getDataRouts(state),
});

 const withAuthRole = (Component) => {

      const withAuth = (props) =>{

        
             
            const {loginStatus,role, routsList,location:{pathname}} = props;
            let routRole=routsList.filter(item=> item.endPoint === pathname);

            if (!loginStatus){ return <Redirect to="/auth"/>}
            if ( routRole[0] && (routRole[0].role > role)) { return <Redirect to="/"/>}   
            
            return <Component {...props}/>
        
    }
    
    

return connect (mapStateToProps,null)(withAuth);
}

export default withAuthRole;