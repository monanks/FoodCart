import React,{Component} from 'react';
//import ReactDom from 'react-dom';
//import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
//import FlatButton from 'material-ui/FlatButton';
import {removeFromCart} from '../reducers/actions.js';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

class CartItem extends Component{
    render(){
        return(
            <div className="col-md-12 ">
                <Paper zdepth={4} className="papers">
                <div className="row">
                    <div className="col-md-5">
                        {this.props.name}
                    </div>
                    <div className="col-md-2">
                        {this.props.price}
                    </div>
                    <div className="col-md-2">
                        {this.props.quantity}
                    </div>
                    <div className="col-md-3">
                    <FlatButton id="btn" name="Add" onClick={()=>{
                        this.props.removeFromCart(this.props.name);
                        }
                    }
                    >X</FlatButton>
                    </div>
                </div>
                </Paper>
                
                {/* <Card>
                    <CardHeader
                    title={this.props.name}
                    subtitle={this.props.price}
                    actAsExpander={true}
                    showExpandableButton={true}
                    />
                    <CardActions>
                    <FlatButton label="Add" onClick={()=>{
                        this.props.removeFromCart(this.props.name);
                        }
                    }/>
                    </CardActions>
                    <CardText expandable={true}>
                    {this.props.details}
                    </CardText>
                </Card> */}
            </div>
        );        
    }
}

function mapDispatchToProps(dispatch){
    return {
        removeFromCart : (data) => dispatch(removeFromCart(data))
    };
}

export default connect(null,mapDispatchToProps)(CartItem);