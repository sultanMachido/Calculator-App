import React,{Component} from 'react';
import Button from '../../components/Button/Button';
import Display from '../../components/Display/Display';
import classes from './Calculator.css';
import Auxil from '../../Hoc/Auxil/Auxil';

class Calculator extends Component{
   
    state = {
        calculatorButtons:[1,2,3,4,5,6,7,8,9,'+',0,'-','/','x','=','','cancel',''],
        values:[],
        stringValue:'',
        result:0
    }
    

    addValuesHandler = (e)=>{
        let newValue;
        let lastOperatorSeen = 0;//index of where the last operator was seen
        let arr = [];
        let result = 0;
        let arrLastOperandIndex = 0;
        let arrLastOperatorSeen = 0;
        
        console.log(e.target.innerHTML);
        const duplicateValuesState = [...this.state.values];
        console.log(duplicateValuesState);
        let lastOperandIndex = duplicateValuesState.length-1;

        if (e.target.innerHTML === '') {
            alert('hi');
        }

        //display logic
        if (e.target.innerHTML==='cancel') {
             let lastVal = duplicateValuesState.length - 1;
             duplicateValuesState.splice(lastVal);
             console.log(duplicateValuesState);
             newValue = duplicateValuesState;
        }else if(e.target.innerHTML==='='){
             newValue = duplicateValuesState;
             console.log(duplicateValuesState);
        }else{
            newValue = duplicateValuesState.concat(e.target.innerHTML)
            console.log(duplicateValuesState);
        }


         //calculation logic
         if (e.target.innerHTML==='=') {
            console.log('result!');
            
            //splitting input into operator and operand
            duplicateValuesState.map((item,index)=>{
               

                if (item ==='+') {
                  let operand =  duplicateValuesState.slice(lastOperatorSeen,index).join('');
                  console.log(operand);
                  parseInt(operand);
                  console.log(operand);
                  arr.push(operand);
                  arr.push(item);
                  console.log(index);
                  lastOperatorSeen = index + 1;//1 is added so that the slice is done starting from the number immediately after the last operator seen
                  console.log(lastOperatorSeen);
                  console.log(arr);
                //   result += parseInt(operand);
                //   console.log(result);
                }

                if (item ==='-') {
                    let operand =  duplicateValuesState.slice(lastOperatorSeen,index).join('');
                    console.log(operand);
                    parseInt(operand);
                    console.log(operand);
                    arr.push(operand);
                    arr.push(item);
                    console.log(index);
                    lastOperatorSeen = index + 1;//1 is added so that the slice is done starting from the number immediately after the last operator seen
                    console.log(lastOperatorSeen);
                    console.log(arr);
                  //   result += parseInt(operand);
                  //   console.log(result);
                  }

                  if (item ==='/') {
                    let operand =  duplicateValuesState.slice(lastOperatorSeen,index).join('');
                    console.log(operand);
                    parseInt(operand);
                    console.log(operand);
                    arr.push(operand);
                    arr.push(item);
                    console.log(index);
                    lastOperatorSeen = index + 1;//1 is added so that the slice is done starting from the number immediately after the last operator seen
                    console.log(lastOperatorSeen);
                    console.log(arr);
                  //   result += parseInt(operand);
                  //   console.log(result);
                  }

                  if (item ==='x') {
                    let operand =  duplicateValuesState.slice(lastOperatorSeen,index).join('');
                    console.log(operand);
                    parseInt(operand);
                    console.log(operand);
                    arr.push(operand);
                    arr.push(item);
                    console.log(index);
                    lastOperatorSeen = index + 1;//1 is added so that the slice is done starting from the number immediately after the last operator seen
                    console.log(lastOperatorSeen);
                    console.log(arr);
                  //   result += parseInt(operand);
                  //   console.log(result);
                  }

                if (lastOperandIndex === index) {
                    let operand =  duplicateValuesState.slice(lastOperatorSeen).join('');
                    console.log(operand);
                    arr.push(operand);
                    console.log(arr);
                    console.log(lastOperatorSeen);
                    console.log(arr[lastOperatorSeen-1]);
                    // if (arr[lastOperatorSeen-1]==='+') {
                    //     result += parseInt(operand); 
                    //     console.log(result);
                    // }

                    // newValue=[' ']; 
                    //remove operation display and show result
                }
            })  
            console.log(arr);
            arrLastOperandIndex = arr.length - 1;

            console.log(arrLastOperandIndex);

            //arithmetic logic
            // arr.map((item,index)=>{
            //     if (item === "+") {
            //         let operand =  arr.slice(arrLastOperatorSeen,index);
            //         arrLastOperatorSeen = index + 1;
            //         console.log(arrLastOperatorSeen);
            //         result += parseInt(operand);
            //         console.log(result);
            //         console.log(arr);
            //     }
            //     console.log(arrLastOperandIndex);
            //     if (arrLastOperandIndex === index) {
            //         let operand =  arr.slice(arrLastOperatorSeen);
            //         console.log(arr[arrLastOperatorSeen - 1]);
            //         if(arr[arrLastOperatorSeen - 1]==='+') {
            //             console.log(operand);
            //             console.log(arr);
            //             result += parseInt(operand); 
            //             console.log(result);
            //         }

            //         newValue=[' ']; //remove operation display and show result
            //     }
            // })

            //calling the functions based on BODMAS
                    this.divisionLogic(arr);
                    console.log(arr);
                    this.multiplicationLogic(arr);
                    console.log(arr);
                    this.sumLogic(arr)
                    console.log(arr);
                    this.subtractionLogic(arr)
                    console.log(arr);

                    newValue=[' ']; //remove operation display and show result

                    result = arr[0];
         }
        console.log(result);
       
        this.setState({
            values:newValue,
            stringValue:newValue.join(''),
            result:result
        });
       
        

    }

    divisionLogic=(arr)=>{
        console.log(arr); 
        let operandOnLeftIndex;
        let operandOnRightIndex;
        let operatorIndex;
        let result;
        arr.map((item,index)=>{
            console.log(item);
            console.log(index);
            if (item === '/' || arr[index-1] === '/') {
               
             if (arr[index-1] === '/') {
                 operatorIndex = index - 1;
                 operandOnLeftIndex = index - 2;
                 operandOnRightIndex = index ;
                }else{
                 operatorIndex = index;
                 operandOnLeftIndex = index - 1;
                 operandOnRightIndex = index + 1;
                }
               
     
             //    let splicedArr = arr.splice(operandOnLeftIndex,3);
             //    console.log(splicedArr);
                console.log(arr[operandOnLeftIndex]);
     
                
                result = parseInt(arr[operandOnLeftIndex]) / parseInt(arr[operandOnRightIndex]);
               
               
                console.log(result);
                arr[operandOnLeftIndex] = result;
                console.log(arr);
                arr.splice(operatorIndex,operandOnRightIndex)
                console.log(arr);
               
            }
        })
        
     };
    
    
     multiplicationLogic=(arr)=>{
        console.log(arr); 
        let operandOnLeftIndex;
        let operandOnRightIndex;
        let operatorIndex;
        let result;
        arr.map((item,index)=>{
            console.log(item);
            console.log(index);
            if (item === 'x' || arr[index-1] === 'x') {
               
             if (arr[index-1] === 'x') {
                 operatorIndex = index - 1;
                 operandOnLeftIndex = index - 2;
                 operandOnRightIndex = index ;
                }else{
                 operatorIndex = index;
                 operandOnLeftIndex = index - 1;
                 operandOnRightIndex = index + 1;
                }
               
     
             //    let splicedArr = arr.splice(operandOnLeftIndex,3);
             //    console.log(splicedArr);
                console.log(arr[operandOnLeftIndex]);
     
                
                result = parseInt(arr[operandOnLeftIndex]) * parseInt(arr[operandOnRightIndex]);
               
               
                console.log(result);
                arr[operandOnLeftIndex] = result;
                console.log(arr);
                arr.splice(operatorIndex,operandOnRightIndex)
                console.log(arr);
               
            }
        })
        
     };
    
    sumLogic=(arr)=>{
       console.log(arr); 
       let operandOnLeftIndex;
       let operandOnRightIndex;
       let operatorIndex;
       let result;
       arr.map((item,index)=>{
           console.log(item);
           console.log(index);
           if (item === '+' || arr[index-1] === '+') {
              
            if (arr[index-1] === '+') {
                operatorIndex = index - 1;
                operandOnLeftIndex = index - 2;
                operandOnRightIndex = index ;
               }else{
                operatorIndex = index;
                operandOnLeftIndex = index - 1;
                operandOnRightIndex = index + 1;
               }
              
    
            //    let splicedArr = arr.splice(operandOnLeftIndex,3);
            //    console.log(splicedArr);
               console.log(arr[operandOnLeftIndex]);
    
               
               result = parseInt(arr[operandOnLeftIndex]) + parseInt(arr[operandOnRightIndex]);
              
              
               console.log(result);
               arr[operandOnLeftIndex] = result;
               console.log(arr);
               arr.splice(operatorIndex,operandOnRightIndex)
               console.log(arr);
              
           }
       })
       
    };
    
    subtractionLogic=(arr)=>{
        console.log(arr); 
        let operandOnLeftIndex;
        let operandOnRightIndex;
        let operatorIndex;
        let result;
        arr.map((item,index)=>{
            console.log(item);
            console.log(index);
            if (item === '-' || arr[index-1] === '-') {
               
             if (arr[index-1] === '-') {
                 operatorIndex = index - 1;
                 operandOnLeftIndex = index - 2;
                 operandOnRightIndex = index ;
                }else{
                 operatorIndex = index;
                 operandOnLeftIndex = index - 1;
                 operandOnRightIndex = index + 1;
                }
               
     
             //    let splicedArr = arr.splice(operandOnLeftIndex,3);
             //    console.log(splicedArr);
                console.log(arr[operandOnLeftIndex]);
     
                
                result = parseInt(arr[operandOnLeftIndex]) - parseInt(arr[operandOnRightIndex]);
               
               
                console.log(result);
                arr[operandOnLeftIndex] = result;
                console.log(arr);
                arr.splice(operatorIndex,operandOnRightIndex)
                console.log(arr);
               
            }
        })
        
     };
    
    

    render(){
        return(
            <Auxil>
               <Display stringValue={this.state.stringValue} result={this.state.result} />
               <div className={classes.Calculator}>
                  {this.state.calculatorButtons.map(numbers =><Button number={numbers} add={this.addValuesHandler} />
                  
                )} 
               </div>
            </Auxil>
           )
    }
}


export default Calculator;
