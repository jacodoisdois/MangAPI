import { type HTTPMethods } from '../types/types'

export interface IAmazonDataSource {
  domain: string
  searchParam: string
  searchUrl: string
  headers: any
  httpMethodSearch: HTTPMethods
  rawProductData: (searchString: string, searchRegex: RegExp) => any
  shuffleHeaders: () => any
}
