export function loadCoins() {
    return function (dispatch) {
      fetch("/coins")
          .then((response) => {
            return response.json();
          }).then((coins) => {
            dispatch(coinsLoaded(coins));
          });
    };
  }
  
  function coinsLoaded(coins) {
    return {
      type: "COINS_LOADED",
      value: coins
    };
  }
  
  export function addCoin(c) {
      return function (dispatch) {
          fetch("/coins", {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(c)
          }).then(() => dispatch(loadCoins()));
      };
  }
  
  export function getCoin(id) {
      return function (dispatch) {
          fetch("/coins/" + id)
          .then((response) => {
              return response.json();
          }).then((coin) => {
              dispatch(getCoinDone(coin));
          });
      };
  }
  
  function getCoinDone(coin) {
      return {
          type: "GET_COIN_DONE",
          value: coin
      };
  }
  
  export function deleteCoin(id) {
      return function (dispatch) {
          fetch("/coins/" + id, {
              method: "DELETE",
              headers: {"Content-Type": "application/json"}
          }).then(() => {
              dispatch(coinDeleted());
              dispatch(loadCoins());
          });
      };
  }
  
  function coinDeleted(coin) {
      return {
          type: "COIN_DELETED",
          value: coin
      }
  }