import styles from './App.module.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
import { useState } from 'react';

function App(){

  let [calVal,setcalVal] = useState("");
  const onButtonClick = (buttonText) =>{
    if(buttonText === 'C'){
       setcalVal("")
    }
    else if(buttonText === '='){
      setcalVal(eval(calVal))
    }
    else{
      const newDisplayValue = calVal + buttonText
      setcalVal(newDisplayValue)
    }}
  return(
    <div className = {styles.calculator}>
    <Display displayValue = {calVal}></Display>
    <ButtonsContainer onButtonClick = {onButtonClick}></ButtonsContainer>
  </div>
    
  );
}

export default App;
