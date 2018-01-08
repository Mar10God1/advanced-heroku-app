import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadCoins } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadCoins: function () {
      dispatch(loadCoins());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
