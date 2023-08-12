import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState={
  items:[],
  totalAmount:0
};

const cartReducer = (state,action)=>{
if(action.type === 'ADD'){
  const updatedItems= state.items.concat(action.item);
  const updatedTotalAmount=state.totalAmount+action.item.price*action.item.amount;
  return {
    items:updatedItems,
    totalAmount:updatedTotalAmount
  }
}

return  defaultCartState;
};


//const items=[];
const CartProvider = (props) => {

const [cartState , dispatchCartAction] =useReducer(cartReducer, defaultCartState);
  

  //to update the cart by state it render the function
  //const [items,updateItems]=useState([]);

  const addItemToCartHandler=(item)=>{

  dispatchCartAction({type:'ADD',item: item});
    // updateItems([...items,item]);
   
    // //items.push(item)
    // console.log(cartContext);




  };

  const removeItemFromCartHandler=(id)=>{
    dispatchCartAction({type:'REMOVE',id:id});
  };


  const cartContext={
    items:cartState.items, //items before change
    totalAmount:cartState.totalAmount,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler,
    
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;