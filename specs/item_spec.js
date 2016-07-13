var item = require('../item/item');
var assert = require('chai').assert;

describe('Items', function() {

  it('Item should have a cost', function() {
    assert.equal(5, item.bananas.price);
  })

  it('Item should have a description', function() {
    assert.equal('bananas', item.bananas.description);
  })

})


// #Shopping Basket Lab
// We need to find the price of a shopping basket.
// A shopping basket can have multiple items.
// It should be able to add and remove items.

// Discounts:

// - 10% discount for all shopping baskets over £20
// - If the customer has a valid discount card then they get an additional 5% off.
