class DataSource {
  constructor() {
    this.url = 'https://static.ngnrs.io/test/prices';
  }

  /**
   * retrieves price data from 'https://static.ngnrs.io/test/prices'
   * @returns {Array} Each element in the array is an object with the following keys
   * buy, sell, id, pair, timestamp
   * and the following methods mid() and quote()
   */
  async getPrices() {
    try {
      const res = await fetch(this.url);
      const { data } = await res.json();
      const { prices } = data;

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
// this is how the class needs to be used
const ds = new DataSource();
ds.getPrices().then((prices) => {
  prices.forEach((price) => {
    console.log(`Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`);
  });
}).catch((error) => {
  console.err(error);
});
