var basket = require('../basket/basket');
var item = require('../item/item');
var assert = require('chai').assert;

describe('Basket', function() {

  beforeEach(function(){
    basket.contents = [];
    basket.subtotal = 0;
  })

  it('Basket should initially have subtotal of 0', function() {
    assert.equal(0, basket.subtotal);
  })

  it('Basket should be empty at start', function() {
    assert.equal(0, basket.contents.length);
  })

  it('Discount should initially be zero', function() {
    assert.equal(0, basket.discount);
  })

  it('Basket can hold a single item', function() {
    basket.add(item.bananas);
    assert.equal(1, basket.contents.length);
  })

  it('Total is initially zero', function() {
    assert.equal(0, basket.total);
  })

  it('Subtotal increase correctly when one item is added', function() {
    basket.add(item.cherries);
    assert.equal(3, basket.subtotal);
  })

  it('Basket can multiple items', function() {
    basket.add(item.strawberries);
    basket.add(item.pears);
    assert.equal(2, basket.contents.length);
  })

  it('Items can be removed from the basket', function() {
    basket.add(item.strawberries);
    basket.add(item.pears);
    basket.remove(item.pears);
    assert.equal(1, basket.contents.length);
  })

  it('Items can be removed from the basket and the subtotal updates accordingly', function() {
    basket.add(item.strawberries);
    basket.add(item.pears);
    basket.remove(item.strawberries);
    assert.equal(1, basket.contents.length);
    assert.equal(2, basket.subtotal);
  })

  it('Discount is correctly calculated when cost is over 20', function() {
    basket.add(item.strawberries);
    basket.add(item.bananas);
    basket.add(item.oranges);
    basket.add(item.apricots);
    basket.checkForDiscount(true);
    assert.equal(2.05, basket.discount)
  })

  it('Total is correctly calculated when cost is over 20 and no valid discount card', function() {
    basket.add(item.strawberries);
    basket.add(item.bananas);
    basket.add(item.oranges);
    basket.add(item.apricots);
    basket.checkForDiscount(false);
    assert.equal(18.45, basket.total)
  })

  it('Total is correctly calculated when cost is over 20 and customer has valid discount card', function() {
    basket.add(item.strawberries);
    basket.add(item.bananas);
    basket.add(item.oranges);
    basket.add(item.apricots);
    basket.checkForDiscount(true);
    assert.equal(17.53, basket.total)
  })

  // it('Total is correctly calculated when cost is over 20 and customer has valid discount card, using the bogof offer', function() {
  //   basket.add(item.strawberries);
  //   basket.add(item.bananas);
  //   basket.add(item.bananas);
  //   basket.add(item.oranges);
  //   basket.add(item.apricots);
  //   basket.add(item.apricots);
  //   basket.add(item.apricots);
  //   basket.bogof();
  //   // assert.equal(17.53, basket.total)
  // })

})