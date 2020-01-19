
import React from 'react';
import { StyledTab, StyledTabs } from '../../../common/styled';
import { Link } from 'react-router-dom';


// const subMenuButtons =(props) => {




//     return (<>
//         <Button
// aria-label="display DVB-C"
// size="small"
// variant={
//   match.params.tab && match.params.tab === "dvbc"
//     ? "contained"
//     : "text"
// }
// color={
//   match.params.tab && match.params.tab === "dvbc"
//     ? "primary"
//     : "inherit"
// }
// disabled={!dvbcAvailable}
// component={NavLink}
// to={`/dashboard/status/${match.params.mac}/dvbc`}
// >
// <b>DVB-C</b>
// </Button>

// </>
//     )
// }

// export default subMenuButtons;




export default function SubMenuButtons (props) {
const {active, mac, pingAvailable, dvbcAvailable} =props;

  return (

      <StyledTabs
        value={active || "status"}
        indicatorColor="primary"
        textColor="primary"
        aria-label="dashboard navigation"
      >
       {active!=="dvbc" && dvbcAvailable ? <StyledTab  disableRipple label="DVB-C" value="dvbc"  component={Link} to={`/dashboard/status/${mac}/dvbc`}  disabled={!dvbcAvailable}/> :<StyledTab disableRipple label="DVB-C" value="dvbc"   disabled={!dvbcAvailable}/>}
        {active!=="ping" && pingAvailable ? <StyledTab disableRipple label="Ping"  value="ping" component={Link} to={`/dashboard/status/${mac}/ping`} disabled={!pingAvailable} />:<StyledTab disableRipple label="Ping"  value="ping"  disabled={!pingAvailable} />}
       {active ? <StyledTab disableRipple label="Status" value="status" component={Link} to={ `/dashboard/status/${mac}`} />:<StyledTab disableRipple label="Status" value="status"  />}
      </StyledTabs>
  
  );
}