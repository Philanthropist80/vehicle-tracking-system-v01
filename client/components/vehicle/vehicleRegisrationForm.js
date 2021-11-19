import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
// Import custom components
import renderText from '../common/form/renderText';

const styles = {
  root: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '15%',
    left: 0,
    right: 0,
    margin: 'auto',
  },
  card: {
    padding: 20,
    overflow: 'auto',
  },
  cardHeader: {
    textAlign: 'center',
  },
  btnDiv: {
    textAlign: 'center',
  },
  btn: {
    marginTop: 21,
  },
};

const VehicleRegisrationForm = (props) => {
  const { handleSubmit, onSubmit, classes } = props;

  return (
    <div className={classes.root} style={{maxWidth: 675}}>
      <Card className={classes.card}>
        <CardHeader className={classes.cardHeader} title="Vehicle Regisration" />
        <CardContent>
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={4} style={{marginBottom: 15}}>
                <Grid item xs={4}>
                    <Field type="text" name="code" component={renderText} label="Vehicle Code" />
                </Grid>
                <Grid item xs={4}>
                    <Field type="text" name="model" component={renderText} label="Model" />
                </Grid>
                <Grid item xs={4}>
                    <Field type="text" name="description" component={renderText} label="Description" /> 
                </Grid>
                <Grid item xs={4}>
                <Field type="text" name="chesis" component={renderText} label="Chesis #" />
                </Grid>
                <Grid item xs={4}>
                <Field type="text" name="engine" component={renderText} label="Engine #" />
                </Grid>
                <Grid item xs={4}>
                <Field type="text" name="made_year" component={renderText} label="made_year" />
                </Grid>
                <Grid item xs={4}>
                <Field type="text" name="registration_year" component={renderText} label="Year of Registration" />
                </Grid>
                <Grid item xs={4}>
                <Field type="text" name="owner" component={renderText} label="Vehicle Owner" />
                </Grid>
                <Grid item xs={4}>
                <Field type="text" name="owner_phone" component={renderText} label="Owner's Phone" />
                </Grid>
                <Grid item xs={12}>
                <Field type="text" name="owner_email" component={renderText} label="Owner's Email" />
                </Grid>
               
                <Grid item xs={12}>
                <div className={classes.btnDiv}>
                    <Button className={classes.btn} type="submit" variant="contained" color="primary">
                        Register Now!
                    </Button>
                    <p>
                        <Link to={'/vehicle'}>Cancel</Link>.
                    </p>
                </div>
                </Grid>
              </Grid>
            
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const validateVehicleRegisration = (values) => {
  const errors = {};

  const requiredFields = ['first_name', 'last_name', 'email', 'password'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = '(The ' + field + ' field is required.)';
    }
  });

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '(Invalid email address.)';
  }
  return errors;
};

VehicleRegisrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'VehicleRegisrationForm', // a unique identifier for this form
  validate: validateVehicleRegisration, // ←Callback function for client-side validation
})(withStyles(styles)(VehicleRegisrationForm));
