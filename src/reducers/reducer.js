import { combineReducers } from 'redux';

import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from './actions'

//const initialState = [];

export function foApp(state, action){
    switch(action.type){
        case ADD_TO_CART:
            console.log(state);
            let s = [];
            let flag = 0;
            let t=action.quantity;
            for(let b of Array.from(state)){
                if(b.name === action.name)
                {
                    t += parseInt(b.quantity,10);
                    b.quantity = t.toString();
                    flag = 1;
                }
                s.push(b);
            }
            
            console.log("hi"+t);
            if(flag===1){return s;}
            else{
                return [...state,
                    {
                        name: action.name,
                        price: action.price,
                        quantity: action.quantity
                    }
    
                ]
            }
        case REMOVE_FROM_CART:
            console.log(state);
            let s1 = [];
            for(let b of Array.from(state)){
                if(b.name === action.name){}
                else{
                    s1.push(b);
                }
            }
            return s1;
        case CLEAR_CART:
            return [];
        default:
            return state;
    }
}

export default combineReducers({
    foApp
})