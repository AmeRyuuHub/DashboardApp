import React from 'react';
import { Box, SvgIcon } from '@material-ui/core';
import { mdiTelevisionBox, mdiSwapHorizontal, mdiRouterWireless, mdiCloudCheck } from '@mdi/js';
import { useTheme } from '@material-ui/core/styles';

const PingAvatar = (props) => {
    const theme = useTheme();
    const iconColor = theme.palette.grey[500];
    const {variant} = props;
    return (

        <Box display="flex" justifyContent="center">
                <SvgIcon>
                  <path fill={iconColor} d={mdiTelevisionBox} />
                </SvgIcon>
                <SvgIcon>
                  <path fill={iconColor} d={mdiSwapHorizontal} />
                </SvgIcon>
                <SvgIcon>
                  <path fill={iconColor} d={mdiRouterWireless} />
                </SvgIcon>
                {variant === "platform" && <> 
                <SvgIcon>
                  <path fill={iconColor} d={mdiSwapHorizontal} />
                </SvgIcon>
                <SvgIcon>
                  <path fill={iconColor} d={mdiCloudCheck} />
                </SvgIcon>
                </>
                }
                

              </Box>
    )
}

export default PingAvatar;