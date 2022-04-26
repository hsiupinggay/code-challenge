const axios = require('axios');

class DataSource {
  /**
   * retrieves price data from 'https://static.ngnrs.io/test/prices'
   * @returns {Array} Each element in the array is an object with the following keys
   * buy, sell, id, pair, timestamp
   * and the following methods mid() and quote()
   */
  async getPrices() {
    try {
      const res = await axios.get('https://static.ngnrs.io/test/prices');
      const { prices } = res.data.data;

      prices.forEach((price) => {
        price.mid = function () {
          return (price.buy + price.sell) / 2 / 100;
        };

        price.quote = function () {
          return price.pair.slice(-3);
        };
      });

      return prices;
    } catch (err) {
      console.log('Error', err);
    }
  }
}

const ds = new DataSource();
ds.getPrices().then((prices) => {
  prices.forEach((price) => {
    console.log(`Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`);
  });
}).catch((error) => {
  console.err(error);
});
