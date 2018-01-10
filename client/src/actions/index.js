export function loadCoins() {
    return function (dispatch) {
      fetch("https://api.mlab.com/api/1/databases/blockhead/collections/coins?apiKey=D7Xha0NmP3aNaNaSw4L3IHdaoT2DqLrO")
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

  export function loadPrice(symbol) {
    return function (dispatch) {
      let fetchURL = "https://api.cryptonator.com/api/full/" + symbol + "-usd";
      dispatch({
        type: "LOAD_PRICE"
      });
      fetch(fetchURL)
      .then((response) => {
        return response.json();
      }).then((price) => {
        dispatch(priceLoaded(price));
      });  
    };
  }
  
    export function priceLoaded(price) {
      return {
        type: "PRICES_LOADED",
        value: price
      };
    }


        export function getArticle(id) {
            return function (dispatch) {
                fetch("/articles/" + id)
                .then((response) => {
                    return response.json();
                }).then((article) => {
                    dispatch(getArticleDone(article));
                });
            };
        }
        
        function getArticleDone(article) {
            return {
                type: "GET_ARTICLE_DONE",
                value: article
            };
        }
        export function loadNews(searchTerm) {
            return function (dispatch) {
              if (!searchTerm) {
                  searchTerm = "Bitcoin";
              };
              let apiKey = "&language=en&apiKey=6e15c7534d224c2da1c2feecafe5a01b";
              let fetchURL = "https://newsapi.org/v2/everything?q=" + searchTerm + apiKey;
              fetch(fetchURL)
              .then((response) => {
                return response.json();
              }).then((articles) => {
                dispatch(newsLoaded(articles));
              });
            };
          }
          
          function newsLoaded(articles) {
            return {
              type: "ARTICLES_LOADED",
              value: articles.articles
            };
          }
          