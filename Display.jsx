import styles from "./Display.module.css";
const Display =({displayValue}) =>{

   return <input className={styles.displayI} type = "text"
        value = {displayValue} readOnly>
   </input>
};

export default Display;
