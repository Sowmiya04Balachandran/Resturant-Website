import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import {useContext ,useRef ,useState} from 'react';
import CartContext from '../../../store/cart-context';



const MealItemForm=(props)=>{
  const amountInputRef=useRef();
  const [amountIsValid ,setAmountIsValid]=useState(true);

  const cartCntx=useContext(CartContext);


  //mentor teached code
  // const addItemToCart=(event)=>{
  //   event.preventDefault();

  //   const quantity=document.getElementById('amount_' + props.id).value;

  const submitHandler=event=>{
    event.preventDefault();

    const enteredAmount=amountInputRef.current.value;

    const  enteredAmountNumber  = +enteredAmount;

    if(enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber>5){
      setAmountIsValid(false)
      return ;
    }
    props.onAddToCart(enteredAmountNumber);

  }


    return(
    <form className={classes.form} onSubmit={submitHandler}>
      {console.log(cartCntx)}
       <Input
        ref={amountInputRef}
    label='Amount'
    input={{
     
        id: 'amount_' + props.id, // this changed!
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
    }}
/>
     <button>+ Add</button> 
     {!amountIsValid && <p>Please Enter A Valid Amount(1-5)</p>}
    </form>
    )
}
export default MealItemForm;