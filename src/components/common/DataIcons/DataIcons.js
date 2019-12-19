import {
  Language,
  Memory,
  GetApp,
  ImportExport,
  FiberPin,
  Input,
  Router,
  SettingsEthernet,
  Dns,
  Dashboard,
  BarChart,
  AccountTree,
  ExitToApp,
  EmojiEvents,
  Accessible,
  PeopleAlt,
  Settings,
  Home,
  SupervisedUserCircle,
  AccountCircle,
  LocalCafe,
  MeetingRoom,
  AssignmentInd
} from "@material-ui/icons";
import {
  mdiTelevisionBox,
  mdiPowerSettings,
  mdiWan,
  mdiSettingsBox,
  mdiCellphone
} from "@mdi/js";
import ru from "../../../pics/ru.png";
import ua from "../../../pics/ua.png";
import us from "../../../pics/us.png";

export const dataListIcons = {
    cpu: Memory,
    loader: GetApp,
    minerva: ImportExport,
    pin: FiberPin,
    hdmi: Input,
    ExternalIP: Language,
    IpAddress: Router,
    DefaultGateway: SettingsEthernet,
    DnsServer1: Dns,
    DnsServer2: Dns
  };

  export const dataStatusIcons = {
    model: mdiTelevisionBox,
    online: mdiWan,
    power: mdiPowerSettings,
    version: mdiSettingsBox,
    mobile: mdiCellphone
  };


  export const dataRoutsIcons = {
    home: Home,
    dashboard: Dashboard,
    reports: BarChart,
    about: AccountTree,
    old: Accessible,
    users: PeopleAlt,
    auth: ExitToApp,
    contacts: EmojiEvents,
    profile: AssignmentInd,
    logout:MeetingRoom,
    settings:Settings,
  };

  export const dataLangList = { ru: ru, ua: ua, eng: us };
  export const dataUsersRoleIcons = {
    3: LocalCafe,
    2: SupervisedUserCircle,
    1: AccountCircle
  };


  


  