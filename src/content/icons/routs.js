
import {
  Dashboard,
  MenuBook,
  ExitToApp,
  EmojiEvents,
  Accessible,
  PeopleAlt,
  Settings,
  Home,
  AssignmentInd,
  LiveTv,
  SwapHorizontalCircle,
  Assignment,
  Assessment
} from "@material-ui/icons";
import { mdiLogoutVariant } from '@mdi/js'; 




export const routIcons = {
  home: Home,
  dashboard:Dashboard ,
  reports: Assignment,
  about: MenuBook,
  status:Assessment,
  ping:SwapHorizontalCircle,
  dvbc:LiveTv,
  old: Accessible,
  users: PeopleAlt,
  auth: ExitToApp,
  contacts: EmojiEvents,
  
};
export const routsOptions = {
  
  profile: AssignmentInd,
  logout: mdiLogoutVariant,
  settings: Settings
};
  

  
    
  
  
    