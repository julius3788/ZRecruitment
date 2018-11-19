import React from 'react'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import Section from './Section'
import FormControl from '@material-ui/core/FormControl';

class ResultTest extends React.Component{
  state = {
    color: 'default',  
    avatar: 'none',
    icon: 'none',
    variant: 'default',
  };
 
  render() {

    return (
      <div>
      <Section title='Result'>
      
      <FormControl component="fieldset">
     
      <Typography gutterBottom>
      <h2> Terima kasih atas partisipasi anda mengikuti online test ini
      { // console.log("result : "+ this.props.results)
    }
        { //this.props.resultData
        }       
       </h2></Typography>

      </FormControl>
    </Section>
       </div>
    );
      }
}

const mapStateToProps = state => ({ 
  results:state.results
})

export default connect(mapStateToProps)(ResultTest)

 

  
