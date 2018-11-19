import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux'

const styles = {
  appBar: {
    position: 'relative',
    backgroundColor: '#673ab7',
},

  root: {
    flexGrow: 1,
   
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
 
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <React.Fragment>
    <div className={classes.root}>
     <AppBar className={classes.appBar} >     
    
        <Toolbar>
        
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            ZRecruitment
          </IconButton>          
          <Typography variant="title" color="inherit">              
            </Typography>
            <Typography variant="h6" color="inherit" className={classes.grow}>            
          </Typography>            
          <Typography variant="title" color="inherit">
              {props.users.UserData}
            </Typography>
        </Toolbar>
      </AppBar>      
    </div>
    </React.Fragment>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(withStyles(styles)(NavBar));

