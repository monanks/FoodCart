import React,{Component} from 'react';
//import ReactDom from 'react-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {addToCart} from '../reducers/actions.js';
import {connect} from 'react-redux';

class FoodItem extends Component{
    render(){
        return(
            <div className="col-md-12">
                <Card className="cards">
                    <CardHeader
                    title={this.props.name}
                    subtitle={this.props.price}
                    actAsExpander={true}
                    showExpandableButton={true}
                    />
                    <CardActions>
                    <FlatButton label="Add" onClick={()=>{
                            this.props.addToCart(this.props.name,this.props.price,1);
                            //console.log(store.getState());
                            }
                        }/>
                    </CardActions>
                    <CardText expandable={true}>
                        {this.props.details}
                    </CardText>
                </Card>
            </div>
        );        
    }
}

function mapDispatchToProps(dispatch){
    return {
        addToCart : (data,data1,data2) => dispatch(addToCart(data,data1,data2))
    };
}

export default connect(null,mapDispatchToProps)(FoodItem);