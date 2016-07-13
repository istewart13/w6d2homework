basket = {
  contents: [],
  subtotal: 0,
  discount: 0,
  total: 0,
  add: function(item) {
    this.contents.push(item);
    this.subtotal += item.price;
  },
  remove: function(item) {
    var index = this.contents.indexOf(item);
    this.contents.splice(index, 1);
    this.subtotal -= item.price;
  },
  // bogof: function() {
  //   var sortedContents = this.contents.sort();
  //   var results = [];
  //   for (var i = 0; i < this.contents.length; i++) {
  //     if (sortedContents[i + 1] === sortedContents[i]) {
  //       results.push(sortedContents[i]);
  //     }
  //   }
  //   // this.subtotal -= 
  // },
  checkForDiscount: function(validDiscountCard) {
    if (this.subtotal > 20) {
      this.discount = (0.1 * this.subtotal).toFixed(2);
      if (!validDiscountCard) {
        this.total = this.subtotal - this.discount;
      } else {
        this.subtotal = this.subtotal - this.discount;
        this.total = (this.subtotal * 0.95).toFixed(2);
      }
    }
  }
}

module.exports = basket;