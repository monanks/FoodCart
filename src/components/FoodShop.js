import React, { Component } from 'react';
//import ReactDom from 'react-dom';
import FoodList from './FoodList';
import FoodCart from './FoodCart';
import Paper from 'material-ui/Paper'

class FoodShop extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5 ">
                    <div className="row App-intros" >Menu</div>
                    <div className="row all-font">
                        <Paper className="heads" zDepth={3}>
                            <FoodList></FoodList>
                        </Paper>
                    </div>
                
                </div>
                <div className="col-md-5 ">
                    <div className="row App-intros" >Order</div>
                    <div className="row all-font">
                        <Paper className="heads" zDepth={3}>
                            <FoodCart></FoodCart>
                        </Paper>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        );
    }
}

export default FoodShop; 