import React from 'react'

class Coundown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          running: false,
        }       
      }
      
      componentDidMount(){
        this.setState(
            {
                count:this.props.time
            }
          );
    
      this.handleStart();
    }

    format(time) {
        let seconds = time % 60;
        let minutes = Math.floor(time / 60);
        minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
        seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
        return minutes + ':' + seconds;
      }

      componentDidUpdate(prevProps, prevState) {
       
        if(this.state.running !== prevState.running){
          switch(this.state.running) {
            case true:
              this.handleStart();
              break;
            default:
            console.log("default");
          }
        }
      }
      
     
      handleStart() {
        this.timer = setInterval(() => {
          const newCount = this.state.count - 1;
          this.setState(
            {count: newCount >= 0 ? newCount : 0, running:false
            }           
          );

          if(this.state.count >= 1)
          {
         //     console.log(this.state.count);
           }
           else
           {
        //   const { history: { push } } = this.props;
    //        event.preventDefault();
              this.timeouts()

               this.handleStop()
               console.log("stop");
           }         
        }, 1000);
      }
      
      timeouts(){
   
        console.log("stop");
      // ini tar buat redirect kl waktu habis
       
      }

      handleStop() {
        if(this.timer) {
          clearInterval(this.timer);
          this.setState(
            {running:false}
          );
        }
      }
      
      handleReset() {
        this.setState(
          {count: 0}
        );
      }
      
      handleCountdown(seconds) {
        this.setState({
          count: seconds,
          running: true
        })
      }

    render() {    
      return(
        <div className="displayedTime">
        <h1>{this.format(this.state.count)}</h1>
      </div>
          )
    }

}

export default Coundown;

