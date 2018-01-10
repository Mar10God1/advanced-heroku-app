import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadCoins,loadNews } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadCoins: function () {
      dispatch(loadCoins());
    },
    loadNews: function (searchTerm) {
        dispatch(loadNews());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
