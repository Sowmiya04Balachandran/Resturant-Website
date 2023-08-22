import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import {useContext, useEffect , useState} from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton=(props)=>{
const [btnIsHighLighted , setBtnIsHighLighted] =  useState(false);

  const cartCtx=useContext(CartContext);

//   let quantity=0;

//   cartCntx.items.forEach(item=>{
//     quantity=quantity + Number(item.quantity);
//   })

const { items }=cartCtx;

  const numberOfCartItems=items.reduce((curNumber,item)=>{
    return curNumber+item.amount;
  },0);
  //console.log(cartCtx.msg)

  

  const btnclasses=`${classes.button} ${btnIsHighLighted ? classes.bump : ''}`;

useEffect(()=>{
  if(items.length === 0){
    return;
  }
setBtnIsHighLighted(true);

const timer=setTimeout(()=>{
setBtnIsHighLighted(false);
},300);

return ()=>{
  clearTimeout(timer);
}

},[items]);


    return (
        <button className={btnclasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart </span>
         
           
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}
export default HeaderCartButton;