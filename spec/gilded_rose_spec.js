describe("Gilded Rose", function() {

  describe("Standard category shop", function(){
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

    it("Standard items decrease in quality by 1 at end of day", function(){
      var redWine = new Item("Red Wine", 10, 20)
      var cheddarCheese = new Item("Cheddar Cheese", 5, 15)
      var ham = new Item("Ham", 2, 5)
      var originalShop = new Shop([redWine, cheddarCheese, ham])
    
      originalShop.updateQuality()
      expect(originalShop.items[0].quality).toEqual(19)
      expect(originalShop.items[1].quality).toEqual(14)
      expect(originalShop.items[2].quality).toEqual(4)
    });

    it("Aged Brie increases in Quality the older it gets", function(){
      var agedBrie = new Item("Aged Brie", 20, 10)
      var shop = new Shop([agedBrie])
      shop.updateQuality()
      expect(shop.items[0].quality).toEqual(11)
    });

    it("Sulfuras never has to be sold or decreases in Quality", function(){
      var sulfuras = new Item("Sulfuras, Hand of Ragnaros", 20, 10)
      var shop = new Shop([sulfuras])
      shop.updateQuality()
      expect(shop.items[0].sellIn).toEqual(20)
      expect(shop.items[0].quality).toEqual(10)
    });

    it("Backstage pass quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert", function(){
      var backstagePasses = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0)
      var shop = new Shop([backstagePasses])
      shop.updateQuality()
      expect(shop.items[0].sellIn).toEqual(9)
      expect(shop.items[0].quality).toEqual(2)

      // sell in date is below 5 days
      for (let i = 0; i <= 4; i++) {
        shop.updateQuality()
      }
      expect(shop.items[0].sellIn).toEqual(4)
      expect(shop.items[0].quality).toEqual(13)

      // sell in date is below 3 days
      for (let i = 0; i <= 2; i++) {
        shop.updateQuality()
      }
      expect(shop.items[0].sellIn).toEqual(1)
      expect(shop.items[0].quality).toEqual(22)

      // sell in date is below 0
      shop.updateQuality()
      shop.updateQuality()
      expect(shop.items[0].sellIn).toEqual(-1)
      expect(shop.items[0].quality).toEqual(0)
    });
  });

  describe("Conjured category items", function(){
    var magicWine = new conjuredItem("Magic Wine", 10, 20)
    var magicCheese = new conjuredItem("Magic Cheese", 10, 13)
    var magicHam = new conjuredItem("Magic Ham", 10, 5)
    var shop2 = new Shop([magicWine, magicCheese, magicHam])
    shop2.updateQuality()


    it("should have a category on creation", function(){
      expect(shop2.items[1].category).toEqual("conjured")
    });

    it("standard items decrease in quality twice as fast", function(){
      expect(shop2.items[0].quality).toEqual(18)
      expect(shop2.items[1].quality).toEqual(11)
      expect(shop2.items[2].quality).toEqual(3)
    });

    it("Conjured aged Brie increases in Quality the older it gets", function(){
      var conjuredAgedBrie = new conjuredItem("Aged Brie", 20, 10)
      var shop = new Shop([conjuredAgedBrie])
      shop.updateQuality()
      expect(shop.items[0].quality).toEqual(11)
    });

    it("Sulfuras never has to be sold or decreases in Quality", function(){
      var conjuredSulfuras = new conjuredItem("Sulfuras, Hand of Ragnaros", 10, 0)
      var shop = new Shop([conjuredSulfuras])
      shop.updateQuality()
      expect(shop.items[0].sellIn).toEqual(10)
      expect(shop.items[0].quality).toEqual(0)
    });

    it("Backstage pass quality increases by 4 when there are 10 days or less and by 6 when there are 5 days or less but Quality drops to 0 after the concert", function(){
      var magicBackstagePasses = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0)
      var shop = new Shop([magicBackstagePasses])
      shop.updateQuality()
      expect(shop.items[0].sellIn).toEqual(9)
      expect(shop.items[0].quality).toEqual(4)

      // sell in date is below 5 days increases by 2 each day
      for (let i = 9; i >= 5; i--) {
        shop.updateQuality()
      }
      expect(shop.items[0].sellIn).toEqual(4)
      // expect(shop.items[0].quality).toEqual(22)

      // sell in date is below 3 days
      for (let i = 4; i >= 1; i--) {
        shop.updateQuality()
        console.log(shop.items[0].sellIn)
      }
      expect(shop.items[0].sellIn).toEqual(0)
      // expect(shop.items[0].quality).toEqual(46)

      // sell in date is below 0
      shop.updateQuality()
      shop.updateQuality()
      expect(shop.items[0].sellIn).toEqual(-2)
      expect(shop.items[0].quality).toEqual(0)
    });
  }); 

});
