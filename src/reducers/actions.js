export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

export function addToCart(name,price,quantity){
    return { type: ADD_TO_CART, 
        name,
        price,
        quantity 
    }
}

export function removeFromCart(name){
    return {
        type: REMOVE_FROM_CART,
        name
    }
}

export function clearCart(){
    return {
        type: CLEAR_CART,
    }
}