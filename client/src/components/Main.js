import React, { Component } from "react";
import CoinsContainer from "../containers/CoinsContainer";
import ArticlesContainer from "../containers/ArticlesContainer";
import MarketsContainer from "../containers/MarketsContainer";
class Main extends Component {

    componentDidMount() {
        this.props.loadCoins();
        this.props.loadMarkets();
        this.props.loadNews();

    }
    render() {

        return (
            <div className="Main">
                <CoinsContainer />
                <MarketsContainer />
                <ArticlesContainer />
            </div>
        );
    }
}

export default Main;