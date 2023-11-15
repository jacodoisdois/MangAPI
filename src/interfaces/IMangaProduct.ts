import { type IGenericProduct } from './IGenericProduct'

export type IMangaProduct = IGenericProduct & {
  volume: number
  name: string
  language: string
}
