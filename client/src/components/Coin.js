import React, { Component } from "react";

class Coin extends Component {

    componentDidMount() {

         
        this.props.getCoin(this.props.match.params.id);
    }
    render() {

        return (
            <div>
                <div>{this.props.coin.symbol}</div>
                <div>{this.props.coin.name}</div>
            </div>
        );
    }
}

export default Coin;