export type ProductType = {
  _id?:string,
  name:string,
  img:string,
  category:string,
  desc?:string,
  status?:string,
  price:number
}
export type ProductCart={
  _id?:string,
  name:string,
  img:string,
  category:string,
  desc?:string,
  status?:string,
  price:number
  quantity:number
}
