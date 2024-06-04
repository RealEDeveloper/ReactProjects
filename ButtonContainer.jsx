import styles from "./ButtonContainer.module.css";

const buttonNames =['C','1','2','+','3','4','-','5','6','*','7','8','/','0',
'9','(',')','%','^','!',"="
];

const ButtonContainer =({onButtonClick}) =>{
    return <div className={styles.buttonContainer}>
       {buttonNames.map(items =>
        <button  className ={styles.button}
        onClick ={()=>onButtonClick(items)}
        >{items}
       </button>
       )}
           
   </div>
}

export default ButtonContainer;