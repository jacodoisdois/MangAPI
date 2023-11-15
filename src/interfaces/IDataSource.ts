import { type HTTPMethods } from '../types/types'

export interface IDataSource {
  domain: string
  searchParam: string
  searchUrl: string
  headers: any
  httpMethodSearch: HTTPMethods
}
