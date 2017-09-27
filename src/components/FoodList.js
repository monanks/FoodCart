import React,{Component} from 'react';
//import ReactDom from 'react-dom';
import FoodItem from './FoodItem';
//import {addToCart} from '../reducers/actions.js';

class FoodList extends Component{
    render(){
        return(
            <div className="row ">
                <div className="row ">
                    <FoodItem name="Island Pitaya Bowl" price="8" details="Pitaya? I barely know ya! Get to know our Pitaya Energy Bowl that puts a creamy tropical twist on the classic parfait while giving you the nutrient and energy boost you need." ></FoodItem>
                </div>
                <div className="row ">
                    <FoodItem name="Açaí Primo Bowl" price="10" details="A tasty twist of Açaí juice, soymilk, blueberries, strawberries and bananas, which we top with organic granola, fresh bananas, fresh blueberries, coconut and a drizzle of honey." ></FoodItem>
                </div>
                <div className="row ">
                    <FoodItem name="Chunky Strawberry Bowl" price="7" details="A new twist on an old favorite.
A delicious blend of fresh Greek yogurt with strawberries, bananas, peanut butter, and soymilk. It’s topped with organic granola, fresh bananas and fresh strawberries and served in a convenient, on–the-go bowl." ></FoodItem>
                </div>
                <div className="row ">
                    <FoodItem name="Fruit and Greek Yogurt Bowl" price="12" details="Nonfat Greek Yogurt topped with fresh blueberries, fresh strawberries, fresh bananas, organic granola and a drizzle of honey." ></FoodItem>
                </div>
            </div>
        );        
    }
}

export default FoodList;