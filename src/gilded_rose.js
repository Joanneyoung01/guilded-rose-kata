class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    // loop through each of the shop's items
    for (var i = 0; i < this.items.length; i++) {

      // if the items name is not "Aged Brie" and the items name is not "backstage passes"
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {

        // and if the items quality is greater than 0
        if (this.items[i].quality > 0) {

          // and if the items name is not Sulfuras, Hand of Ragnaros
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {

            // then the items quality will minus by 1
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } 
      
      
      
      else {
        // if the items quality is less than 50
        if (this.items[i].quality < 50) {

          // the items quality increases by 1
          this.items[i].quality = this.items[i].quality + 1;

          // and if the items name is backstage passes
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {

            // and if the items sell in number is less than 11
            if (this.items[i].sellIn < 11) {

              // and the items quality is less than 50
              if (this.items[i].quality < 50) {

                // then items quality is to increase by 1
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            // and if the item sell in number is less than 6
            if (this.items[i].sellIn < 6) {

              // and if the items quality is less than 50
              if (this.items[i].quality < 50) {

                // then the items quality increases by 1
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }

      // If the items name is not "Sulfuras, Han of Raganros"
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        // the sell in number is minus 1
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }


      // If the items sell in number is less than 0
      if (this.items[i].sellIn < 0) {

        // and if the items name is not Aged Brie
        if (this.items[i].name != 'Aged Brie') {

          // and if the items name is not Backstage passes
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {

            // and if the items quality is greater than 0
            if (this.items[i].quality > 0) {

              // and if the items name is not Sulfuras, Hand of Ragnaros
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {

                // then the quality will reduce by 1
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            // the items quality is the quality number take away the quality number
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          // if the item's quality number is less than 50
          if (this.items[i].quality < 50) {
            // the items quality increases by 1
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }
    // return the full shop inventory
    return this.items;
  }
}

class conjuredItem extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
    this.category = "conjured"
  }

  // updateQuality() {
  //   super.updateQuality();
  //   // for (var i = 0; i < this.items.length; i++) {
  //   //   this.items[i].quality === this.items[i].quality

      
  //   // }
  //   // update normally as the shop method does
  //   // redo the function call, but keep the sell in the same
  // }
}

// var wine = new Item("Wine", 10, 20)
// var cheddarCheese = new Item("Cheddar Cheese", 10, 20)
// var ham = new Item("Ham", 10, 20)
// var originalShop = new Shop([wine, cheddarCheese, ham])
// originalShop.items
// originalShop.items[0].name
// originalShop.updateQuality()
// originalShop.items[0].quality
// originalShop.items[1].quality
// originalShop.items[2].quality

// var magicWine = new conjuredItem("Magic Wine", 10, 20)
// var magicCheese = new conjuredItem("Magic Cheese", 10, 20)
// var magicHam = new conjuredItem("Magic Ham", 10, 20)
// var Shop = new Shop([magicWine, magicCheese, magicHam])
// conjuredShop.updateQuality()
// conjuredShop.items.name
// conjuredShop.items[0].name
// conjuredShop.updateQuality()
// conjuredShop.items[0].quality
// conjuredShop.items[1].quality
// conjuredShop.items[2].quality


