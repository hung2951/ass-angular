export type ProductType = {
  _id?:string,
  name:string,
  img:string,
  category:string,
  desc?:string,
  status:boolean,
  price:number,
  sale_price:number,
}
export type ProductCart={
  _id?:string,
  name:string,
  img:string,
  category:string,
  desc?:string,
  status:boolean,
  price:number,
  quantity:number
}
