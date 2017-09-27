import React,{Component} from 'react';
//import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import CartItem from './CartItem';
import {clearCart} from '../reducers/actions';
import FlatButton from 'material-ui/FlatButton';
//import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class FoodCart extends Component{

    // componentWillMount(){
    //     //this.props.dispatch()
    // }
    checkItems = () =>{
        if(this.props.items.length<=0){
            return false;
        }
        else{
            return true;
        }
    }
    calcTotal = () =>{
        if(!this.checkItems()){
            console.log(this.props.items.length);
            return "0";
        }
        else{
            var a = this.props.items.map(item=>(parseInt(item.price,10)*parseInt(item.quantity,10)))
            return a.reduce((sum,x) => sum + x);
        }
    }

    addItems = () =>{
        return this.props.items.map(item=>(
            <CartItem name={item.name} price={item.price} quantity={item.quantity} ></CartItem>
        ))
    }

    render(){
        return(
            <div className="row">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-3">Item
                    </div>
                    <div className="col-md-1">Price
                    </div>
                    <div className="col-md-3">Quantity
                    </div>
                    <div className="col-md-3">
                        <FlatButton id="btn" className="clrbtn" name="Add" onClick={()=>{
                            this.props.clearCart();
                            }
                        }
                        >Clear Cart</FlatButton>
                    </div>
                </div>
                <div className="row">
                    {this.addItems()}
                </div>
                <div className="row papers">
                    <Paper className="" zdepth={4}>
                       <div className="row">
                            <div className="col-md-4">
                                Total:
                            </div>
                            <div className="col-md-6">
                            </div>
                            <div className="col-md-2">
                                {this.calcTotal()}
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        );        
    }
}

const mapStateToProps= foApp =>{
    return{
        items: foApp
    };
}

function mapDispatchToProps(dispatch){
    return {
        clearCart : () => dispatch(clearCart())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(FoodCart);