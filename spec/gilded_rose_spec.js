describe("Gilded Rose", function() {

  describe("Normal shop category operates", function(){
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

    it("Items decrease in quality at normal rate", function(){
      var redWine = new Item("Red Wine", 10, 20)
      var cheddarCheese = new Item("Cheddar Cheese", 5, 15)
      var ham = new Item("Ham", 2, 5)
      var originalShop = new Shop([redWine, cheddarCheese, ham])
    
      originalShop.updateQuality()
      expect(originalShop.items[0].quality).toEqual(19)
      expect(originalShop.items[1].quality).toEqual(14)
      expect(originalShop.items[2].quality).toEqual(4)
    });

    // test brie cheese
    it("Aged Brie” actually increases in Quality the older it gets", function(){
      var agedBrie = new Item("Aged Brie", 20, 10)
      var shop = new Shop([agedBrie])
      shop.updateQuality()
      expect(shop.items[0].quality).toEqual(11)
    });

    //Sulfuras, Hand of Ragnaros
    it("Sulfuras”, being a legendary item, never has to be sold or decreases in Quality", function(){
      var sulfuras = new Item("Sulfuras, Hand of Ragnaros", 20, 10)
      var shop = new Shop([sulfuras])
      shop.updateQuality()
      expect(shop.items[0].sellIn).toEqual(20)
      expect(shop.items[0].quality).toEqual(10)
    });

    // Backstage passes
    it("Sulfuras”, being a legendary item, never has to be sold or decreases in Quality", function(){
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
        console.log(shop.items[0].sellIn)
      }
      expect(shop.items[0].sellIn).toEqual(1)
      expect(shop.items[0].quality).toEqual(22)

      shop.updateQuality()
      shop.updateQuality()
      expect(shop.items[0].sellIn).toEqual(-1)
      expect(shop.items[0].quality).toEqual(0)
    });
  });

  describe("conjured items", function(){
    var magicWine = new conjuredItem("Magic Wine", 10, 20)
    var magicCheese = new conjuredItem("Magic Cheese", 10, 20)
    var magicHam = new conjuredItem("Magic Ham", 10, 20)
    var shop2 = new Shop([magicWine, magicCheese, magicHam])
    shop2.updateQuality()

    it("should have a category", function(){
      expect(shop2.items[1].category).toEqual("conjured")
    });

    it("should update the quality twice as fast", function(){
      expect(shop2.items[0].quality).toEqual(18)
      expect(shop2.items[1].quality).toEqual(18)
      expect(shop2.items[2].quality).toEqual(18)
    });
  }); 

});
