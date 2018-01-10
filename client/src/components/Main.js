import React, { Component } from "react";
import CoinsContainer from "../containers/CoinsContainer";
import SearchBoxContainer from "../containers/SearchBoxContainer";
import ArticlesContainer from "../containers/ArticlesContainer";

class Main extends Component {

    componentDidMount() {
        this.props.loadCoins();
        this.props.loadNews();

    }
    render() {

        return (
            <div className="Main">
                <SearchBoxContainer />
                <CoinsContainer />
                <ArticlesContainer />
            </div>
        );
    }
}

export default Main;