import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Section from './Section'
import { fetchAdkudags} from '../actions/adkudag';
import { fetchInsts1} from '../actions/inst1';
import { changeResult} from '../actions/result';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Countdown from './Coundown'

let result = 0;
let kuizArr = [];

class Quiz1 extends React.Component {
  state = {
    color: 'default',
    onDelete: 'none',
    avatar: 'none',
    icon: 'none',
    variant: 'default',    
  };
  
  componentDidMount(){
    console.log("result 1"+ this.props.results)
    this.props.fetchAdkudags()
    this.props.fetchInsts1()    
  }

  handleChange = (key,answer) => (event, value) => {
    console.log("key:"+key, "value:"+value, "answer:"+answer )
    this.setState({
      [key]: value,
    });

    let indexArr = kuizArr.indexOf(key)

    if(indexArr >= 0)
    {
 //     console.log("ada");
      if(answer === value)
      { result =  result + 1; }
      else
      { result =  result - 1; }
    }
    else
    {
      kuizArr.push(key);
   //   console.log("belum")

      if(answer === value)
      { result =  result + 1; }
      
    }

    console.log(this.props.results)
    console.log("result : "+result)
   
    this.props.changeResult(result)

  };

  render() {
    const { adkudags} = this.props;
 
    return (
      <div>
      <Countdown time={60}/>
    
      <Section title={this.props.instructions1} >
      <FormControl component="fieldset">
     
        {
          adkudags.map((adkudag) => (
            <div>
          <FormLabel>{adkudag.id+". "+adkudag.question}</FormLabel>
         
          <RadioGroup
          row
          name={adkudag.id}
          aria-label="color"
          value= {this.state[adkudag.id]}
          onChange={this.handleChange(adkudag.id, adkudag.answer)}
        >
      
       <FormControlLabel value={adkudag.a[0]} control={<Radio />} label={adkudag.a[1]} />
        <FormControlLabel value={adkudag.b[0]} control={<Radio />} label={adkudag.b[0]} />         
          
           </RadioGroup>
        </div>
        ))
        }
           
            <Link to ="/quiz2">
            
            <Button variant="contained" color="primary">
                Next
            </Button>
           </Link>
     
       </FormControl>
    </Section>
    </div>
    );
   
  } 
}

Quiz1.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  adkudags: state.adkudags.adkudagData,
  instructions1 : state.instruction1.inst1Data,
  results:state.results
})

const mapDispatchToProps = dispatch => ({
  fetchAdkudags: () => dispatch(fetchAdkudags()),
  fetchInsts1 : () => dispatch(fetchInsts1()),
  changeResult:(newResult)=> dispatch((changeResult(newResult))   ,
    ),

})

export default connect(mapStateToProps,mapDispatchToProps)(Quiz1)
