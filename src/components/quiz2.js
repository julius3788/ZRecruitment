import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Section from './Section'
import { fetchCountings} from '../actions/counting';
import { fetchInsts2} from '../actions/inst2';
import { changeResult} from '../actions/result';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Countdown from './Coundown'

let kuizArr = [];
//let KeyAnsw = [];

class Quiz2 extends React.Component {
  state = {
    color: 'default',
    onDelete: 'none',
    avatar: 'none',
    icon: 'none',
    variant: 'default',
  };

  componentDidMount(){
    
  //  console.log("result 2"+ this.props.results)

    this.props.fetchCountings()
    this.props.fetchInsts2()    
  }

  handleChange = (key,answer) => (event, value) => {
    let result= this.props.results.resultData;

    this.setState({
      [key]: value,
    });

    let indexArr = kuizArr.indexOf(key)

    if(indexArr >= 0)
    {   
      if(answer === value)
      { result =  result + 1; }
      else
      { result =  result - 1; }
    }
    else
    {
      kuizArr.push(key);
   
      if(answer === value)
      { result =  result + 1; }
      
    }
   
  //  console.log("props result :"+this.props.results.resultData)

   // console.log("result : "+result)

    this.props.changeResult(result)

  };
 
  render() {
    const { countings } = this.props;

    return (
      <div>
         <Countdown time={60}/>
         <Section title={this.props.instructions2} >
      
      <FormControl component="fieldset">
        {
          countings.map((counting) =>(
            <div>
               <FormLabel>{counting.id+". "+counting.question}</FormLabel>
         
                <RadioGroup
                row
                name={counting.id}
                aria-label="color"
                value= {this.state[counting.id]}
                onChange={this.handleChange(counting.id, counting.answer)}
              >
              <FormControlLabel value={counting.a[0]} control={<Radio />} label={counting.a[1]} />
              <FormControlLabel value={counting.b[0]} control={<Radio />} label={counting.b[1]} />         
              
              </RadioGroup>
            </div>
          )
          )
        }
        <Link to ="/result">
            <Button variant="contained" color="primary">
                Finish
            </Button>
           </Link>
       
    </FormControl>
    </Section>
    </div>
    );
   
  } 
}

Quiz2.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  countings: state.countings.countingData,
  instructions2 : state.instruction2.inst2Data,
  results:state.results
})

const mapDispatchToProps = dispatch => ({
  fetchCountings: () => dispatch(fetchCountings()),
  fetchInsts2 : () => dispatch(fetchInsts2()),
  changeResult:(newResult)=> dispatch((changeResult(newResult))   ,
    ),
})

export default connect(mapStateToProps,mapDispatchToProps)(Quiz2)
