export type Auth={
  _id?:string,
  name:string,
  email:string,
  passsword:string,
  role:number,
  status:boolean
}


export type AuthToken={
  asscessToken:string,
  user:{
    email:string,
    role:number,
    _id:string,
    name:string,
    status:boolean
  }
}
