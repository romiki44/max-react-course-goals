import React, { useState } from 'react';
//import styled from 'styled-components';

import Button from '../../UI/Button/Button';
//import './CourseInput.css';
import styles from './CourseInput.module.css'; //css-module!

/* const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
    background-color: lightcoral;
  }

  &.invalid label {
    color: red;
  }
`; */

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    props.onAddGoal(enteredValue);
  };

  //css-module s dynamickou css-triedou!
  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler} />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );

  //ako styled-components...bud takto, alebo aj cez parameter...ale to som tu uz nedal
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <FormControl className={!isValid && 'invalid'}>
  //       <label>Course Goal</label>
  //       <input type='text' onChange={goalInputChangeHandler} />
  //     </FormControl>
  //     <Button type='submit'>Add Goal</Button>
  //   </form>
  // );

  //dynamicky css-class...urcite lepsie ako dynamicky inline style!
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
  //       <label>Course Goal</label>
  //       <input type='text' onChange={goalInputChangeHandler} />
  //     </div>
  //     <Button type='submit'>Add Goal</Button>
  //   </form>
  // );

  // dynamicky css cez inline style objekt...
  //...nie je moc vyhodne, vlastne skor nevyhodne ako vyhodne
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className='form-control'>
  //       <label
  //         style={{
  //           color: !isValid ? 'red' : 'black',
  //         }}
  //       >
  //         Course Goal
  //       </label>
  //       <input
  //         style={{
  //           borderCollor: !isValid ? 'red' : '#ccc',
  //           background: !isValid ? 'lightcoral' : 'transparent',
  //         }}
  //         type='text'
  //         onChange={goalInputChangeHandler}
  //       />
  //     </div>
  //     <Button type='submit'>Add Goal</Button>
  //   </form>
  // );
};

export default CourseInput;
