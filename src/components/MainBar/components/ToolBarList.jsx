
import React from 'react';
import RoutsContent from './RoutsContent';
import { StyledDrawer } from '../../common/styled';



const ToolBarList = props => {
  

  return (
    <StyledDrawer variant="permanent">
      <RoutsContent {...props} />
    </StyledDrawer>
  );
};

export default ToolBarList;
