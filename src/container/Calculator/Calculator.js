import React,{Component} from 'react';
import Button from '../../components/Button/Button';
import Display from '../../components/Display/Display';

class Calculator extends Component{
   
    state = {
        calculatorButtons:[1,2,3,4,5,6,7,8,9,0]
    }
    render(){
        return(
            <div>
               {this.state.calculatorButtons.map(numbers => <Button number={numbers} />)} 
            </div>
        )
    }
}


export default Calculator;
