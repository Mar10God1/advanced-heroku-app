import { connect } from "react-redux";
import Coin from "../components/Coin";
import { getCoin,loadPrice } from "../actions";

function mapStateToProps(state) {

    return {
        coin: state.coin,
        price: state.price
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getCoin: function (id) {
            dispatch(getCoin(id));
        },
        loadPrice: function (symbol) {
            dispatch(loadPrice(symbol));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Coin);
