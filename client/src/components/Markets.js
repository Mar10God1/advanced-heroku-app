import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Markets (props) {

    let marketDivs = props.markets.map((market, i) => {
        
        return (
            <div key={i}>
                {market.MarketName} {market.last} 
                
                <Link to={"/markets/" + market._id}>View</Link>
            </div>);
        });
        return (
            <div className="market-list">
                {marketDivs}
            </div>
    );
}

Markets.propTypes = {
    markets: PropTypes.array
};

export default Markets;