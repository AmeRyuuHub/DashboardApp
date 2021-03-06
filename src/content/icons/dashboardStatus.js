
  import {
    mdiTelevisionBox,
    mdiPowerSettings,
    mdiWan,
    mdiSettingsBox,
    mdiCellphone,
    mdiHelpCircleOutline,
    mdiFormatVerticalAlignBottom , mdiFormatVerticalAlignTop , mdiFormatVerticalAlignCenter, mdiTimelapse 
  } from "@mdi/js";
  
    const dashboardStatus = {
      model: mdiTelevisionBox,
      online: mdiWan,
      power: mdiPowerSettings,
      version: mdiSettingsBox,
      mobile: mdiCellphone,
      unknown: mdiHelpCircleOutline,
      min:mdiFormatVerticalAlignBottom,
      max:mdiFormatVerticalAlignTop,
      avg:mdiFormatVerticalAlignCenter,
      time: mdiTimelapse,
    };
  
  
    export default dashboardStatus; 
  
  
    
  
  
    