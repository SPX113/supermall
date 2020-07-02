import {request} from "./request";

export function getCategory() {
  return request({
    url : '/category',
    timeout : 5000
  })
}

export function getClass(maitKey) {
  return request({
    url : '/subcategory',
    timeout : 5000,
    params:{
      maitKey
    }
  })

}