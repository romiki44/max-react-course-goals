//import styled from 'styled-components';

//import './Button.css';  //klasicke css platne v celom projekte
import styles from './Button.module.css'; //css-module...css platny iba pre tento modul!!!

//lokalne css pomocou pkg styles-components
//vyuziva tzv. template literal syntax, co nie je react, ale cisty javascript
//...akesi divne volanie funkcie...treba proste dostudovat
//tu styled.button`` vlastne vrati button doplneny o vlastne css...
//pricom nesmiemem pouzit selector .button, lebo je to uz aplikovana na Button
//pseudo-selektory .button: treba nahradit &
//zmenil som farbu aby bola vidiet zmena
/* const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid green;
  color: white;
  background: green;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`; */

//css-module!
const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

// klasicky cez Button.css (plati pre cely projekt)
// const Button = (props) => {
//   return (
//     <button type={props.type} className='button' onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
