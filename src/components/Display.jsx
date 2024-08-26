import styles from './Display.module.css'

function Display({displayValue}){
  return <input type="text" className={styles.input} value = {displayValue}  readOnly/>;
}

export default Display;