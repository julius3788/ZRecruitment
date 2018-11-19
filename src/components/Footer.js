import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    footerText: {
        color: '#fff'
    },
    footer: {
        marginTop: theme.spacing.unit * 8,       
        backgroundColor: '#c2b0e2',
        bottom: 0,
    },
})

function Footer(props) {
    const { classes } = props;

    return (
      <div>
        <Fragment>
               <CssBaseline />
        
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" className={classes.footerText} gutterBottom>
                        CopyRight 2018
                    </Typography>
                </footer>
        </Fragment>
        </div>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
