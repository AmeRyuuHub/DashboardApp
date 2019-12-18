import React from 'react';
import { Dialog, DialogContent,DialogTitle, Button, IconButton, Typography, Divider, DialogActions} from '@material-ui/core';
import { Close} from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

export const DialogWithClose = withStyles(styles)(props => {
    const { children, classes, onClose, title, id, open, actions,actionsValue,divider, ...other } = props;
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby={`${id}-dialog-title`}
        {...other}
      >
        <DialogTitle
          disableTypography
          id={`${id}-dialog-title`}
          className={classes.root}
        >
          <Typography variant="h6">{title}</Typography>
          {onClose ? (
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={onClose}
            >
              <Close />
            </IconButton>
          ) : null}
        </DialogTitle>
        {divider && <Divider />}
        <DialogContent>
         {children}
        </DialogContent>
        {actions && (
          <DialogActions>
            {actionsValue.map(item => { return (
                <Button key={item.name} 
                         onClick={item.action}
                        color="primary">
                {item.name}
              </Button>
            )
              
            })}
          </DialogActions>
        )}
      </Dialog>
    );
  });






