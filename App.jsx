import styles from "./App.module.css";
import './App.css'
import Display from "./Display";
import ButtonContainer from "./ButtonContainer";
import {useState} from "react";
function App() {

  const[calVal,setCalVal] = useState("45");
  let onButtonClick = (buttonText) =>{
   if(buttonText ==='C'){
    setCalVal("");
   }else if(buttonText === "="){
    const result =eval(calVal);
    setCalVal(result);
   }else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
   }


  }
  return (
    <div className ={styles.calculator}>
       <Display displayValue ={calVal}></Display>
       <ButtonContainer 
       onButtonClick ={onButtonClick}>
       </ButtonContainer>
       </div>
  );
  };

export default App;
