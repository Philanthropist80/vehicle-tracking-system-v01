import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import Wallpaper from '@material-ui/icons/Wallpaper';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Commute from '@material-ui/icons/Commute';

const styles = () => ({
  root: {
    paddingTop: 0,
  },
  subheader: {
    fontSize: 24,
    backgroundColor: cyan[600],
    color: '#FFFFFF',
  },
  actions: {
    justifyContent: 'flex-end',
  },
});

const RecentRegistration = (props) => {
  const { classes } = props;
  const recentRegistrations = props.data;

  return (
    <Card>
      <CardHeader title="Recent Registration" />
      <Divider />
      <CardContent>
        <List>
          {recentRegistrations.map((item, i) => (
            <ListItem divider={i < recentRegistrations.length - 1} key={item.id}>
              <ListItemIcon>
                <Avatar>
                  <Commute />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary={item.code} secondary={item.description} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button color="primary" size="small" variant="text">
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

RecentRegistration.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array,
};

export default withStyles(styles)(RecentRegistration);
