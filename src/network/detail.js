import {request} from "./request";

export function getDetail(iid){
  return request({
    url: '/detail',
    params:{
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })

}


export class GoodsInfo{
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice =itemInfo.price
    this.oldPrice =itemInfo.oldPrice
    this.discount =itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice =itemInfo.lowNowPrice
  }
}

export  class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.cells = shopInfo.cSells;
    this.scores = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

export class GoodsParam {
  constructor(info,rule) {
    this.info = info.set;
    this.size = rule.tables[0];
  }
}