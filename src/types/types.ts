export interface IGenericProduct {
  rawPrice: number
  discountPrice: number
  discountPercentual: number
  title: string
  description: string
  thereIsDiscount: boolean
}

export type MangaProduct = IGenericProduct & {
  volume: number
  name: string
  language: string
}

export interface IAttributeSelector {
  name: string
  css: string
  type: string
  slice?: number
}

export type ProductTypes = IGenericProduct

export type HTTPMethods = 'get' | 'post'
