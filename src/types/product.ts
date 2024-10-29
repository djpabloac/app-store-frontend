export interface Response {
    success: boolean
    data: Product[]
  }
  
  export interface Product {
    _id: string
    name: string
    description: string
    unitType: string
    currency: string
    price: number
    deleted: boolean
    createdAt: string
    updatedAt: string
    __v: number
  }
  