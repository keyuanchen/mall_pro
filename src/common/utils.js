export class GoodsBaseInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.price = itemInfo.lowNowPrice;
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class DetailInfo {
  constructor(detailInfo) {
    this.key = detailInfo.detailImage[0].key
    this.desc = detailInfo.desc
    this.list = detailInfo.detailImage[0].list
  }
}