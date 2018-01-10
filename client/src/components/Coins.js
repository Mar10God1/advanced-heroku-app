import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Coins (props) {

    let coinDivs = props.coins.map((coin, i) => {
        
        return (
            <div className="coin-item" key={i}>
                <div>
                    {coin.symbol}
                </div>
                <div>
                    {coin.price}
                </div>
                <div>
                    {coin.change}
                </div>
            </div>);
        });
        return (
            <div className="coin-list">
                {coinDivs}
            </div>
    );
}

Coins.propTypes = {
    coins: PropTypes.array
};

export default Coins;