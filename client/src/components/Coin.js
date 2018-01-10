import React, { Component } from "react";

class Coin extends Component {

    componentDidMount() {

         
        this.props.getCoin(this.props.match.params.id);

        
    }
    render() {

        return (
            <div className="coin">
                <div>{this.props.coin.symbol}</div>
                <div>{this.props.coin.name}</div>
                <div>{this.props.coin.price}</div>
                <div>{this.props.coin.change}</div>
            </div>
        );
    }
}

export default Coin;