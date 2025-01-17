import styles from './ButtonsContainer.module.css'

function ButtonsContainer({onButtonClick}){
  const buttonName = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.',]
return(
  
  <div className={styles.buttonContainer}>

      {buttonName.map((name) => (<button className={styles.button} onClick={() => onButtonClick(name)}>{name}</button>))};
    </div>
  
  );
}

export default ButtonsContainer;