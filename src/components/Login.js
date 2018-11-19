import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {changeUser } from '../actions/user';
const styles = theme => ({

  root:{
    position: 'relative',
    overflow: 'hidden',
  },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    card: {
        width: 200,
        minWidth: 275,
     //  position
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
  });

class Login extends React.Component {

  state = {
    name: '',
    
  };

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      //  console.log(event.target.value)
      };


      buttonClick = name => event => {
        
        console.log(this.state.name)
      };

render() {
    const { classes } = this.props;

    return (

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >

  <Grid item xs={3}>
    
      <div>
          <Card className={classes.card}>
          <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
         Login
        </Typography>
          <TextField
          id="standard-with-placeholder"
          label="User Name"
          placeholder="User Name"
          className={classes.textField}
          margin="normal"
          value={this.state.name}
          onChange={this.handleChange('name')}
        />
         
        </CardContent>
        <CardActions>
        <Link to ="/home">
        <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
            onClick={()=> this.props.setUser(this.state.name)}           
            >
            Login
        </Button>
        </Link>
         </CardActions>
        </Card>
        </div>

        </Grid>   

</Grid>

      );
  }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  const mapDispatchToProps = (dispatch) => {
    return{
      setUser:(newUser)=> dispatch(
        changeUser("Hi, "+newUser)   ,
         console.log(newUser)   
        ),
     
    }
  }

  export default connect(null,mapDispatchToProps)(withStyles(styles)(Login));