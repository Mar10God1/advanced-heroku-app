import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Coins (props) {
    let coinDivs = props.coins.map((coin, i) => {
        
        return (
            <div key={i}>
                {coin.symbol} {coin.name} {coin.price} {coin.change}
                
                <Link to={"/coins/" + coin._id}>View</Link>
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