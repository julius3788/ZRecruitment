import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Section from '../components/Section'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends React.Component {

  render() {  
    return(
  <React.Fragment>

  <Section title='Welcome'>
  <Typography gutterBottom variant="h5">   
    Selamat Datang    
      silahkan tekan tombol dibawah ini untuk memulai test     
    </Typography>
      <div class="center">
      <Link to ="/quiz1">
      <Button variant="contained" color="primary" >
          Start
      </Button>
      </Link>
      </div>
      </Section>
      </React.Fragment>

    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(Home);



  
 

  
