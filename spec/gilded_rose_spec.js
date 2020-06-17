describe("Gilded Rose", function() {

  var wine = new Item("Wine", 20, 50)
  var shop = new Shop([wine])

  it("Shop can be initialized with new item",function(){
    expect(shop.items).toContain(wine)
  });

  it("Item name can be called", function(){
    expect(shop.items[0].name).toEqual("Wine")
  });

  it("Item sell by number can be called",function(){
    expect(shop.items[0].sellIn).toEqual(20)
  });

  it("Item quality number can be called", function(){
    expect(shop.items[0].quality).toEqual(50)
  });

});
